import pool from '../config';

const createContactTable = `DROP TABLE IF EXISTS contacts CASCADE;
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY NOT NULL,
  firstname CHARACTER VARYING(255) NOT NULL,
  lastname CHARACTER VARYING(255) NOT NULL,
  email CHARACTER VARYING(100) UNIQUE NOT NULL,
  createdon TIMESTAMP WITH TIME ZONE DEFAULT now()
)`;

/**
 * Contact Table function
 * @returns {object} either error or success.
 */
export default async function contactTable() {
  try {
    const create = await pool.query(createContactTable);
    console.log(`contactTable: ${create[0].command}PED and ${create[1].command}D`);
  } catch (error) {
    console.log(error);
  }
}
