import pool from '../config';

const createInboxTable = `DROP TABLE IF EXISTS inbox CASCADE;
CREATE TABLE inbox (
  id SERIAL PRIMARY KEY NOT NULL,
  messageid INTEGER NOT NULL,
  FOREIGN KEY (messageid) REFERENCES messages (id) on DELETE CASCADE,
  createdon TIMESTAMP WITH TIME ZONE DEFAULT now()
)`;


export default async function inboxTable() {
  try {
    const create = await pool.query(createInboxTable);
    console.log(`inboxTable: ${create[0].command}PED and ${create[1].command}D`);
  } catch (error) {
    console.log(error);
  }
}
