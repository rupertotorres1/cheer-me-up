import { Request, Response } from 'express';
import {
  getAllAchievements,
  createAchievement,
  deleteAchievement,
} from '../services/achievements';
import { User } from '../types/users';

export const getAll = async (req: Request, res: Response) => {
  const user = req.user as User;
  const achievements = await getAllAchievements(user.id);
  res.status(200).send({ achievements });
};

export const create = async (req: Request, res: Response) => {
  const user = req.user as User;
  const { text } = req.body;
  const achievementId = await createAchievement(text, user.id);
  res.send({ achievementId });
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteAchievement(id);
  res.sendStatus(200);
};
