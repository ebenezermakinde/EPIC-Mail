/**
 * Message validator class.
 */
class MessageValidator {
  /**
   * Function that helps with email validation
   * @param {object} req The request object
   * @param {object} res The request object
   * @param {object} next The request object
   * @returns {object} The error object
   */
  static emailValidator(req, res, next) {
    let { subject, message } = req.body;
    // No blank subject allowed
    if (!subject) {
      return res.status(400).json({
        status: 400,
        error: 'Subject is required',
      });
    }
    // Change subject to lowercase and remove whitespaces
    subject = subject.toLowerCase().trim();
    // No message subject allowed
    if (!message) {
      return res.status(400).json({
        status: 400,
        error: 'Message is required',
      });
    }
    // Change message to lowercase and remove whitespaces
    message = message.toLowerCase().trim();
    req.body.subject = subject;
    req.body.message = message;
    return next();
  }
}
export default MessageValidator;
