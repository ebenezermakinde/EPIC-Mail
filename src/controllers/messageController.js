import moment from 'moment';
import { receivedMessages, sentMessages } from '../utils/dummyMessages';
import { arrayFlatten } from '../helpers/arrayFlatten';

const email = [...receivedMessages, ...sentMessages];
const messages = arrayFlatten(email);


/**
 * MessageController class
 */
class MessageController {
  /**
   * Get all messages
   * @param {object} req
   * @param {object} res
   * @returns {object} all messages
   */
  static getAllMessages(req, res) {
    return res.status(200).json({
      status: 200,
      data: receivedMessages,
    });
  }

  /**
   * Get one message
   * @param {object} req
   * @param {object} res
   * @returns {object} only one message
   */
  static getOneEmail(req, res) {
    const { foundEmail } = req.body;
    return res.status(200).json({
      status: 200,
      data: [foundEmail],
    });
  }

  /**
   * Get all sent messages
   * @param {object} req
   * @param {object} res
   * @returns {object} all sent messages
   */
  static getSentEmail(req, res) {
    const sent = messages.filter(message => message.status === 'sent');
    if (sent.length === 0) {
      return res.status(404).json({
        status: 404,
        error: 'No sent items',
      });
    }
    return res.status(200).json({
      status: 200,
      data: sent,
    });
  }

  /**
   * Get all unread messages
   * @param {object} req
   * @param {object} res
   * @returns {object} all unread messages
   */
  static getUnreadEmail(req, res) {
    const unread = messages.filter(message => message.status === 'unread');
    if (unread.length === 0) {
      return res.status(404).json({
        status: 404,
        error: 'No unread emails',
      });
    }
    return res.status(200).json({
      status: 200,
      data: unread,
    });
  }

  /**
   * Send an email
   * @param {object} req
   * @param {object} res
   * @returns {object} a created message
   */
  static sendEmail(req, res) {
    const newMessage = {
      id: messages.length + 1,
      createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
      subject: req.body.subject,
      message: req.body.message,
      senderId: 1,
      receiverId: messages.length - 1,
      parentMessageId: messages.length + 1,
      status: 'sent',
    };
    messages.push(newMessage);
    return res.status(201).json({
      status: 201,
      data: [newMessage],
    });
  }

  /**
   * Delete a message
   * @param {object} req
   * @param {object} res
   * @returns {object} a delete message
   */
  static deleteEmail(req, res) {
    const { foundEmail } = req.body;
    const index = messages.indexOf(foundEmail);
    messages.splice(index, 1);
    return res.status(200).json({
      status: 200,
      data: [{
        message: 'Email has been successfully deleted',
      }],
    });
  }
}

export const {
  getAllMessages, getSentEmail, getUnreadEmail, sendEmail,
  deleteEmail, getOneEmail,
} = MessageController;
