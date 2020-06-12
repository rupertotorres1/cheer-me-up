import {
  AchievementsState,
  AchievementsActionTypes,
  GET_ALL_ACHIEVEMENTS_SUCCESS,
  CREATE_ACHIEVEMENT_SUCCESS,
  PICK_NEXT_ACHIEVEMENT,
} from './types';

const initialState: AchievementsState = {
  items: [],
  displayedAchievement: undefined,
};

const achievementsReducer = (
  state = initialState,
  action: AchievementsActionTypes
): AchievementsState => {
  switch (action.type) {
    case GET_ALL_ACHIEVEMENTS_SUCCESS: {
      return { ...state, items: action.payload };
    }

    case CREATE_ACHIEVEMENT_SUCCESS: {
      return {
        ...state,
        items: [...state.items, action.payload],
        displayedAchievement: state.displayedAchievement || action.payload,
      };
    }

    // ***** Not used for now. If not used in the near future, delete action,type,etc. *****
    // case DELETE_ACHIEVEMENT_SUCCESS: {
    //   return {
    //     ...state,
    //     items: state.items.filter((item) => item.id !== action.payload),
    //   };
    // }

    case PICK_NEXT_ACHIEVEMENT: {
      const { displayedAchievement, items } = state;

      const newItems = displayedAchievement
        ? items.filter((item) => item.id !== displayedAchievement.id)
        : items;

      const newDisplayedAchievement =
        newItems.length > 0
          ? newItems[Math.floor(Math.random() * newItems.length)]
          : undefined;

      return {
        ...state,
        items: newItems,
        displayedAchievement: newDisplayedAchievement,
      };
    }

    default:
      return state;
  }
};

export default achievementsReducer;
