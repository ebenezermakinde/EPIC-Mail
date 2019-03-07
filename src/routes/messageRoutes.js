import express from 'express';
import MessageController from '../controllers/messageController';

const { getAllMessages, getSentEmail, getUnreadEmail } = MessageController;

const messageRouter = express.Router();

messageRouter.get('', getAllMessages);
messageRouter.get('/sent', getSentEmail);
messageRouter.get('/unread', getUnreadEmail);

export default messageRouter;
