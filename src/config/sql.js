// Messages SQL Queries
export const createUser = 'INSERT INTO users (firstname,lastname,email, password) VALUES ($1, $2, $3, $4) returning *';
export const findUserById = 'SELECT * FROM users WHERE id = $1';
export const queryUsersByEmail = 'SELECT * FROM users where email = $1';
export const sendMessage = 'INSERT INTO messages (subject, message, parentmessageid, initiator, status) VALUES ($1, $2, $3, $4, $5) returning *';
export const findUserByEmail = 'SELECT * FROM users WHERE email = $1';
export const insertIntoSent = 'INSERT INTO sent (messageid, senderid) VALUES ($1, $2) returning *';
export const insertIntoInbox = 'INSERT INTO inbox (messageid, receiverid) VALUES ($1, $2) returning *';
export const allSentMessages = 'SELECT * FROM messages LEFT JOIN sent ON messages.id = sent.messageid WHERE sent.senderid = $1';
export const allReceivedMessages = 'SELECT * FROM messages LEFT JOIN inbox ON messages.id = inbox.messageid WHERE inbox.receiverid = $1';
export const unreadMessages = 'SELECT * FROM messages LEFT JOIN inbox ON messages.id = inbox.messageid WHERE (inbox.receiverid, messages.status) = ($1, $2)';
export const queryString = 'SELECT *, inbox.receiverid, sent.senderid FROM messages LEFT JOIN inbox on inbox.messageid = messages.id LEFT JOIN sent on sent.messageid = messages.id WHERE messages.id = $1';
export const updateStatus = 'UPDATE messages SET status = $1 WHERE id = $2 returning *';
export const draftQuery = 'SELECT * FROM messages WHERE (initiator, status, id) = ($1, $2, $3)';
export const deleteMessage = 'DELETE FROM messages WHERE (initiator, status, id) = ($1, $2, $3) returning *';
export const deleteSent = 'DELETE FROM sent WHERE (senderid, messageid) = ($1, $2) returning *';
export const deleteInbox = 'DELETE FROM inbox WHERE (receiverid, messageid) =($1, $2) returning *';

// Group SQL Queries.
export const createGroup = 'INSERT INTO groups (name, creator) VALUES ($1, $2) returning *';
export const insertAdminToGroupmembersTable = 'INSERT INTO groupmembers (groupid, userid, userrole) VALUES ($1, $2, $3) returning *';
export const insertGroupMember = 'INSERT INTO groupmembers (groupid, userid) VALUES ($1, $2) returning *';
export const fetchSpecificGroupByUser = 'SELECT groupid,name,role FROM groups INNER JOIN groupmembers on groupmembers.groupid = groups.id WHERE userid = $1 AND groupid = $2;';
export const fetchAllGroupsByUser = 'SELECT groupid,name,role FROM groups INNER JOIN groupmembers on groupmembers.groupid = groups.id WHERE userid = $1;';
export const getGroupByName = 'SELECT * FROM groups WHERE name = $1';
export const removeGroupMembers = 'DELETE FROM groupmembers WHERE (groupid, userid) = ($1, $2) returning *';
export const patchGroupName = ' UPDATE groups SET name = $1 WHERE id = $2 returning * ';
