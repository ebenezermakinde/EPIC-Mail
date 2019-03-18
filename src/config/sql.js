export const createUser = 'INSERT INTO users (firstname,lastname,email, password) VALUES ($1, $2, $3, $4) returning *';
export const findUserById = 'SELECT * FROM users WHERE id = $1';
export const queryUsersByEmail = 'SELECT * FROM users where email = $1';
