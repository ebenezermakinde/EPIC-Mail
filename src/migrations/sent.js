import pool from '../config';

const createSentTable = `DROP TABLE IF EXISTS sent CASCADE;
CREATE TABLE sent (
  id SERIAL PRIMARY KEY NOT NULL,
  messageid INTEGER NOT NULL,
  FOREIGN KEY (messageid) REFERENCES messages (id) on DELETE CASCADE,
  createdon TIMESTAMP WITH TIME ZONE DEFAULT now()
)`;

export default async function sentTable() {
  try {
    const create = await pool.query(createSentTable);
    console.log(`sentTable: ${create[0].command}PED and ${create[1].command}D`);
  } catch (error) {
    console.log(error);
  }
}
