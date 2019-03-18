import pool from '../config';

const createUserTable = `DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    firstname CHARACTER VARYING(255) NOT NULL,
    lastname CHARACTER VARYING(255) NOT NULL,
    email CHARACTER VARYING(50) UNIQUE NOT NULL,
    password CHARACTER VARYING(255) NOT NULL,
    registeredon TIMESTAMP WITH TIME ZONE DEFAULT now()
  )`;


export default async function userTable() {
  try {
    const create = await pool.query(createUserTable);
    console.log(`userTable: ${create[0].command}PED and ${create[1].command}D`);
  } catch (error) {
    console.log(error);
  }
}
