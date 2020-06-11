import {
  Achievement,
  AchievementsActionTypes,
  GET_ALL_ACHIEVEMENTS,
  GET_ALL_ACHIEVEMENTS_SUCCESS,
  CREATE_ACHIEVEMENT,
  CREATE_ACHIEVEMENT_SUCCESS,
  DELETE_ACHIEVEMENT,
  DELETE_ACHIEVEMENT_SUCCESS,
} from './types';

export const getAllAchievements = (): AchievementsActionTypes => {
  return { type: GET_ALL_ACHIEVEMENTS };
};

export const getAllAchievementsSuccess = (
  achievements: Achievement[]
): AchievementsActionTypes => {
  return { type: GET_ALL_ACHIEVEMENTS_SUCCESS, payload: achievements };
};

export const createAchievement = (text: string): AchievementsActionTypes => {
  return { type: CREATE_ACHIEVEMENT, payload: text };
};

export const createAchievementSuccess = (
  achievement: Achievement
): AchievementsActionTypes => {
  return { type: CREATE_ACHIEVEMENT_SUCCESS, payload: achievement };
};

export const deleteAchievement = (id: string): AchievementsActionTypes => {
  return { type: DELETE_ACHIEVEMENT, payload: id };
};

export const deleteAchievementSuccess = (
  id: string
): AchievementsActionTypes => {
  return { type: DELETE_ACHIEVEMENT_SUCCESS, payload: id };
};
