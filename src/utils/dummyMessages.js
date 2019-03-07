import moment from 'moment';

const messages = [

  {
    id: 1,
    createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
    subject: 'Party Time',
    message: 'Dear friends, party time is here',
    parentMessageId: 1,
    status: 'sent',
  },
  {
    id: 2,
    createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
    subject: '[Action] - Withdrawal confirmation',
    message: 'Dear customer, Kindly confirmation action.',
    parentMessageId: 1,
    status: 'unread',
  },
];
export default messages;
