import pool from '../config';

const createMessagesTable = `DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  subject CHARACTER VARYING(255) NOT NULL,
  message CHARACTER VARYING(500) NOT NULL,
  parentmessageid INTEGER NOT NULL,
  FOREIGN KEY (parentmessageid) references messages (id) on delete CASCADE,
  status CHARACTER VARYING(50) NOT NULL,
  createdon TIMESTAMP WITH TIME ZONE DEFAULT now()
)`;

export default async function messageTable() {
  try {
    const create = await pool.query(createMessagesTable);
    console.log(`messageTable: ${create[0].command}PED and ${create[1].command}D`);
  } catch (error) {
    console.log(error);
  }
}
