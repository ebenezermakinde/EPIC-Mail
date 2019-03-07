import express from 'express';
import MessageController from '../controllers/messageController';

const { getAllMessages, getSentEmail } = MessageController;

const messageRouter = express.Router();

messageRouter.get('', getAllMessages);
messageRouter.get('/sent', getSentEmail);

export default messageRouter;
