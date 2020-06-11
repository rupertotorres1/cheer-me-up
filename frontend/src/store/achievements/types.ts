export interface Achievement {
  id: string;
  text: string;
}

export interface AchievementsState {
  items: Achievement[];
}

export const GET_ALL_ACHIEVEMENTS = 'GET_ALL_ACHIEVEMENTS';
export const GET_ALL_ACHIEVEMENTS_SUCCESS = 'GET_ALL_ACHIEVEMENTS_SUCCESS';
export const CREATE_ACHIEVEMENT = 'ADD_ACHIEVEMENT';
export const CREATE_ACHIEVEMENT_SUCCESS = 'ADD_ACHIEVEMENT_SUCCESS';
export const DELETE_ACHIEVEMENT = 'DELETE_ACHIEVEMENT';
export const DELETE_ACHIEVEMENT_SUCCESS = 'DELETE_ACHIEVEMENT_SUCCESS';

interface GetAllAchievementsAction {
  type: typeof GET_ALL_ACHIEVEMENTS;
}

interface GetAllAchievementsSuccessAction {
  type: typeof GET_ALL_ACHIEVEMENTS_SUCCESS;
  payload: Achievement[];
}

export interface CreateAchievementAction {
  type: typeof CREATE_ACHIEVEMENT;
  payload: string;
}

interface CreateAchievementSuccessAction {
  type: typeof CREATE_ACHIEVEMENT_SUCCESS;
  payload: Achievement;
}

export interface DeleteAchievementAction {
  type: typeof DELETE_ACHIEVEMENT;
  payload: string;
}

interface DeleteAchievementSuccessAction {
  type: typeof DELETE_ACHIEVEMENT_SUCCESS;
  payload: string;
}

export type AchievementsActionTypes =
  | GetAllAchievementsAction
  | GetAllAchievementsSuccessAction
  | CreateAchievementAction
  | CreateAchievementSuccessAction
  | DeleteAchievementAction
  | DeleteAchievementSuccessAction;
