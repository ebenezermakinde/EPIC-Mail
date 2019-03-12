import { receivedMessages, sentMessages } from '../utils/dummyMessages';
import { arrayFlatten } from '../helpers/arrayFlatten';

const value = [...receivedMessages, ...sentMessages];
const messages = arrayFlatten(value);

// eslint-disable-next-line import/prefer-default-export
export const findEmailById = (req, res, next) => {
  const foundEmail = messages.find(message => message.id === Number(req.params.messageId));
  if (!foundEmail) {
    return res.status(404).json({
      status: 404,
      error: 'Email was not found',
    });
  }
  req.body.foundEmail = foundEmail;
  return next();
};
