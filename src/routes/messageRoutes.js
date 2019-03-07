import express from 'express';
import MessageController from '../controllers/messageController';

const { getAllMessages } = MessageController;

const messageRouter = express.Router();

messageRouter.get('', getAllMessages);

export default messageRouter;
