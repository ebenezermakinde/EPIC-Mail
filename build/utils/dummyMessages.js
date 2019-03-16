"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.draft = exports.sentMessages = exports.receivedMessages = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messages = [[{
  id: 1,
  createdOn: (0, _moment.default)().format('MMMM Do YYYY, h:mm:ss a'),
  subject: '[Action] - Withdrawal confirmation',
  message: 'Dear customer, Kindly confirmation action.',
  senderId: 2,
  receiverId: 1,
  parentMessageId: 1,
  status: 'read'
}, {
  id: 2,
  createdOn: (0, _moment.default)().format('MMMM Do YYYY, h:mm:ss a'),
  subject: '[Action] - Withdrawal confirmation',
  message: 'Dear customer, Kindly confirmation action.',
  senderId: 2,
  receiverId: 1,
  parentMessageId: 1,
  status: 'unread'
}], [{
  id: 1,
  createdOn: (0, _moment.default)().format('MMMM Do YYYY, h:mm:ss a'),
  subject: '[Action] - Withdrawal confirmation',
  message: 'Dear customer, Kindly confirmation action.',
  senderId: 2,
  receiverId: 1,
  parentMessageId: 1,
  status: 'sent'
}, {
  id: 2,
  createdOn: (0, _moment.default)().format('MMMM Do YYYY, h:mm:ss a'),
  subject: '[Action] - Withdrawal confirmation',
  message: 'Dear customer, Kindly confirmation action.',
  senderId: 2,
  receiverId: 1,
  parentMessageId: 1,
  status: 'sent'
}], [{
  id: 1,
  createdOn: (0, _moment.default)().format('MMMM Do YYYY, h:mm:ss a'),
  subject: '[Action] - Withdrawal confirmation',
  message: 'Dear customer, Kindly confirmation action.',
  senderId: 2,
  receiverId: 1,
  parentMessageId: 1,
  status: 'draft'
}]]; // Destructing the message: Array
// eslint-disable-next-line import/prefer-default-export

var receivedMessages = messages[0],
    sentMessages = messages[1],
    draft = messages.slice(2);
exports.draft = draft;
exports.sentMessages = sentMessages;
exports.receivedMessages = receivedMessages;
//# sourceMappingURL=dummyMessages.js.map