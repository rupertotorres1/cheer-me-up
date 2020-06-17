import query from '../db';
import { User } from '../types/users';

export const createUser = async (
  providerId: string,
  name: string
): Promise<string> => {
  const {
    rows,
  } = await query(
    'INSERT INTO user_account (provider_id, name) VALUES ($1, $2) RETURNING id',
    [providerId, name]
  );

  return rows[0].id;
};

export const getUserByProviderId = async (
  providerId: string
): Promise<User> => {
  const {
    rows,
  } = await query('SELECT * FROM user_account WHERE provider_id = $1', [
    providerId,
  ]);
  return rows[0];
};

export const getUserById = async (id: string): Promise<User> => {
  const { rows } = await query('SELECT * FROM user_account WHERE id = $1', [
    id,
  ]);
  return rows[0];
};
