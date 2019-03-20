import db from '../config';
import {
  sendMessage,
  findUserByEmail,
  insertIntoSent,
  insertIntoInbox,
  allReceivedMessages,
  unreadMessages,
} from '../config/sql';
import { receivedMessages, sentMessages } from '../utils/dummyMessages';
import { arrayFlatten } from '../helpers/arrayFlatten';

const email = [...receivedMessages, ...sentMessages];
const messages = arrayFlatten(email);

/**
 * MessageController class
 */
class MessageController {
  /**
   * Get send a message
   * @param {object} req
   * @param {object} res
   * @returns {object} for success on sent
   */
  static async sendEmail(req, res) {
    const {
      subject, message, status, email, parentmessageid,
    } = req.body;

    const { id } = req.authData.id;
    try {
      if (status === 'draft') {
        const params = [subject, message, parentmessageid, id, status];
        const { rows } = await db.query(sendMessage, params);
        return res.status(201).json({
          status: 201,
          data: [rows[0]],
        });
      }
      const receiver = await db.query(findUserByEmail, [email]);
      if (!receiver.rows[0]) {
        return res.status(404).json({
          status: 404,
          error: 'User does not exist',
        });
      }
      const values = [subject, message, parentmessageid, id, 'sent'];
      const { rows } = await db.query(sendMessage, values);

      // persisting into sent table
      const sent = [rows[0].id, id];
      await db.query(insertIntoSent, sent);

      // persisting into inbox table
      const inboxValues = [rows[0].id, receiver.rows[0].id];
      await db.query(insertIntoInbox, inboxValues);
      return res.status(201).json({
        status: 201,
        data: rows[0],
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
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
   * Get one message
   * @param {object} req
   * @param {object} res
   * @returns {object} only one message
   */
  static async getAllMessages(req, res) {
    const { id } = req.authData.id;
    try {
      const { rows, rowCount } = await db.query(allReceivedMessages, [id]);
      if (rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'There are no received messages yet',
        });
      }
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
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
  static async getUnreadEmail(req, res) {
    const { id } = req.authData.id;
    try {
      const { rows, rowCount } = await db.query(unreadMessages, [id, 'unread']);
      if (rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'No unread messages',
        });
      }
      return res.status(200).json({
        status: 200,
        data: rows,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
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
      data: [
        {
          message: 'Email has been successfully deleted',
        },
      ],
    });
  }
}

export const {
  getAllMessages,
  getSentEmail,
  getUnreadEmail,
  sendEmail,
  deleteEmail,
  getOneEmail,
} = MessageController;
