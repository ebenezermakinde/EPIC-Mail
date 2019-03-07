import messages from '../utils/dummyMessages';

class MessageController {
  static getAllMessages(req, res) {
    return res.status(200).json({
      status: 200,
      data: messages,
    });
  }

  static getSentEmail(req, res) {
    const sent = messages.filter(message => message.status === 'sent');
    if (!sent) {
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
}


export default MessageController;
