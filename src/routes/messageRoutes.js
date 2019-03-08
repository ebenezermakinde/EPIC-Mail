import express from 'express';
import {
  getAllMessages, getSentEmail, getUnreadEmail, sendEmail,
} from '../controllers/messageController';
import MessageValidator from '../middleware/messageValidator';

const messageRouter = express.Router();

// Destructure email validator for the class.
const { emailValidator } = MessageValidator;

// Message routes
messageRouter.get('', getAllMessages);
messageRouter.post('', emailValidator, sendEmail);
messageRouter.get('/sent', getSentEmail);
messageRouter.get('/unread', getUnreadEmail);

export default messageRouter;
