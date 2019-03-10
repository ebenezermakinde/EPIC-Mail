import moment from 'moment';

const messages = [

  [
    {
      id: 1,
      createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
      subject: '[Action] - Withdrawal confirmation',
      message: 'Dear customer, Kindly confirmation action.',
      senderId: 2,
      receiverId: 1,
      parentMessageId: 1,
      status: 'read',
    },
    {
      id: 2,
      createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
      subject: '[Action] - Withdrawal confirmation',
      message: 'Dear customer, Kindly confirmation action.',
      senderId: 2,
      receiverId: 1,
      parentMessageId: 1,
      status: 'unread',
    },
  ],

  [
    {
      id: 1,
      createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
      subject: '[Action] - Withdrawal confirmation',
      message: 'Dear customer, Kindly confirmation action.',
      senderId: 2,
      receiverId: 1,
      parentMessageId: 1,
      status: 'sent',
    },
    {
      id: 2,
      createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
      subject: '[Action] - Withdrawal confirmation',
      message: 'Dear customer, Kindly confirmation action.',
      senderId: 2,
      receiverId: 1,
      parentMessageId: 1,
      status: 'sent',
    },
  ],
  [
    {
      id: 1,
      createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
      subject: '[Action] - Withdrawal confirmation',
      message: 'Dear customer, Kindly confirmation action.',
      senderId: 2,
      receiverId: 1,
      parentMessageId: 1,
      status: 'draft',
    },
  ],
];

// Destructing the message: Array
// eslint-disable-next-line import/prefer-default-export
export const [receivedMessages, sentMessages, ...draft] = messages;
