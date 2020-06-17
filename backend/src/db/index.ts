import { Pool } from 'pg';

const pool = new Pool({
  user: 'ruperto',
  password: '',
  host: 'localhost',
  database: 'cheer-me-up',
  port: 5432,
});

const query = (text: string, params?: any[]) => pool.query(text, params);

export default query;
