import {
  AchievementsState,
  AchievementsActionTypes,
  GET_ALL_ACHIEVEMENTS_SUCCESS,
  CREATE_ACHIEVEMENT_SUCCESS,
  DELETE_ACHIEVEMENT_SUCCESS,
} from './types';

const initialState: AchievementsState = {
  items: [],
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
      return { ...state, items: [...state.items, action.payload] };
    }

    case DELETE_ACHIEVEMENT_SUCCESS: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default achievementsReducer;
