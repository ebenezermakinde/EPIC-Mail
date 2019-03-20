export const createUser = 'INSERT INTO users (firstname,lastname,email, password) VALUES ($1, $2, $3, $4) returning *';
export const findUserById = 'SELECT * FROM users WHERE id = $1';
export const queryUsersByEmail = 'SELECT * FROM users where email = $1';
export const sendMessage = 'INSERT INTO messages (subject, message, parentmessageid, initiator, status) VALUES ($1, $2, $3, $4, $5) returning *';
export const findUserByEmail = 'SELECT * FROM users WHERE email = $1';
export const insertIntoSent = 'INSERT INTO sent (messageid, senderid) VALUES ($1, $2) returning *';
export const insertIntoInbox = 'INSERT INTO inbox (messageid, receiverid) VALUES ($1, $2) returning *';
export const allReceivedMessages = 'SELECT * FROM messages LEFT JOIN inbox ON messages.id = inbox.messageid WHERE inbox.receiverid = $1';
