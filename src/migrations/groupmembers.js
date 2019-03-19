import pool from '../config';

const creategroupMembers = `DROP TABLE IF EXISTS groupmembers CASCADE;
CREATE TABLE groupmembers (
id SERIAL PRIMARY KEY NOT NULL,
groupid INTEGER NOT NULL,
userid INTEGER NOT NULL,
createdon TIMESTAMP WITH TIME ZONE DEFAULT now(),
FOREIGN KEY (groupid) references groups (id) on delete CASCADE,
FOREIGN KEY (userid) references users (id) on delete CASCADE
)`;

/**
 * Group Member Table function
 * @returns {object} either error or success.
 */
export default async function groupMember() {
  try {
    const create = await pool.query(creategroupMembers);
    console.log(`groupMembers: ${create[0].command}PED and ${create[1].command}D`);
  } catch (error) {
    console.log(error);
  }
}
