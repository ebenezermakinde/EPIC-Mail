import messages from '../utils/dummyMessages';

class MessageController {
  static getAllMessages(req, res) {
    return res.status(200).json({
      status: 200,
      data: messages,
    });
  }
}
export default MessageController;
