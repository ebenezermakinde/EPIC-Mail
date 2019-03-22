import db from '../config';
import {
  sendMessage,
  insertIntoSent,
  insertIntoInbox,
  allReceivedMessages,
  unreadMessages,
  allSentMessages,
  updateStatus,
  queryUsersByEmail,
  draftQuery,
  queryString,
  deleteMessage,
  deleteSent,
  deleteInbox,
} from '../config/sql';

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
      subject, message, email,
    } = req.body;

    const { id } = req.authData;
    try {
      const result = await db.query(queryUsersByEmail, [email]);
      if (result.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'This user cannot be found',
        });
      }
      const insertSent = await db.query(sendMessage, [subject, message, null, id, 'sent']);
      // Save message as sent in sent table.
      await db.query(insertIntoSent, [insertSent.rows[0].id, id]);

      // Save to received messages(inbox)
      await db.query(insertIntoInbox, [insertSent.rows[0].id, result.rows[0].id]);
      return res.status(201).json({
        status: 201,
        data: insertSent.rows[0],
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
  static async getOneEmail(req, res) {
    const params = Number(req.params.messageId);
    const { id } = req.authData;
    try {
      const draftMessage = await db.query(draftQuery, [id, 'draft', params]);
      if (draftMessage.rowCount !== 0) {
        return res.status(200).json({
          status: 200,
          data: draftMessage.rows[0],
        });
      }
      const { rows } = await db.query(queryString, [params]);
      if (rows.length === 0) {
        return res.status(404).json({
          status: 404,
          error: 'The message was not found',
        });
      }
      if (rows[0].senderid === id) {
        return res.status(200).json({
          status: 200,
          data: rows,
        });
      }
      const updateMessage = await db.query(updateStatus, ['read', rows[0].id]);
      return res.status(200).json({
        status: 200,
        data: updateMessage.rows[0],
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
  static async getAllMessages(req, res) {
    const { id } = req.authData;
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
  static async getSentEmail(req, res) {
    const { id } = req.authData;
    try {
      const { rows, rowCount } = await db.query(allSentMessages, [id]);
      if (rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: 'No sent messages',
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
   * Get all unread messages
   * @param {object} req
   * @param {object} res
   * @returns {object} all unread messages
   */
  static async getUnreadEmail(req, res) {
    const { id } = req.authData;
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
  static async deleteEmail(req, res) {
    const params = Number(req.params.messageId);
    const { id } = req.authData;

    try {
      const deleteDraft = await db.query(deleteMessage, [id, 'draft', params]);
      if (deleteDraft.rows.length !== 0) {
        return res.status(200).json({
          status: 200,
          data: [{
            message: 'Message was deleted',
          }],
        });
      }
      const { rows } = await db.query(deleteSent, [id, params]);
      if (rows.length === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Message was not found',
        });
      }
      if (rows[0].senderid === id) {
        return res.status(200).json({
          status: 200,
          data: 'Message was deleted',
        });
      }
      if (rows[0].receiverid === id) {
        const inboxMessage = await db.query(deleteInbox, [id, params]);
        return res.status(200).json({
          status: 200,
          data: `${inboxMessage} was deleted`,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
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
