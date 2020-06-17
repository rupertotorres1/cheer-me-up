import query from '../db';
import { Achievement } from '../types/achievements';

export const getAllAchievements = async (
  userId: string
): Promise<Achievement[]> => {
  const { rows } = await query('SELECT * FROM achievement WHERE user_id = $1', [
    userId,
  ]);
  return rows;
};

export const createAchievement = async (
  text: string,
  userId: string
): Promise<string> => {
  const {
    rows,
  } = await query(
    'INSERT INTO achievement (text, user_id) VALUES ($1, $2) RETURNING id',
    [text, userId]
  );

  return rows[0].id;
};

export const deleteAchievement = async (id: string): Promise<void> => {
  await query('DELETE FROM achievement WHERE id = $1', [id]);
};
