import { Request, Response } from 'express';
import query from '../db';

export const getAll = async (req: Request, res: Response) => {
  const { rows } = await query('SELECT * FROM achievement');
  res.status(200).send(rows);
};

export const create = async (req: Request, res: Response) => {
  const { text } = req.body;
  const {
    rows,
  } = await query('INSERT INTO achievement (text) VALUES ($1) RETURNING id', [
    text,
  ]);
  res.send(rows[0]);
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  await query('DELETE FROM achievement WHERE id = $1', [id]);
  res.sendStatus(200);
};
