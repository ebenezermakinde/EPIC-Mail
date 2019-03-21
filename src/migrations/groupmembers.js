import pool from '../config';

const createGroupMembers = `DROP TABLE IF EXISTS groupmembers CASCADE;
  CREATE TABLE groupmembers (
  id SERIAL PRIMARY KEY NOT NULL,
  groupid INTEGER NOT NULL,
  userid INTEGER NOT NULL,
  userrole CHARACTER VARYING(100) NOT NULL DEFAULT ('user'),
  createdon TIMESTAMP WITH TIME ZONE DEFAULT now(),
  FOREIGN KEY (groupid) references groups (id) on delete CASCADE,
  FOREIGN KEY (userid) references users (id) on delete CASCADE
)`;

/**
 * Create Member Table function
 * @returns {object} either success or failure
 */
export default async function groupMember() {
  try {
    const create = await pool.query(createGroupMembers);
    console.log(`groupMembers: ${create[0].command}PED and ${create[1].command}D`);
  } catch (error) {
    console.log(error);
  }
}
