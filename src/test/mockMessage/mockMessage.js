export const validPostData = [
  {
    subject: 'Test message',
    message: 'Testing 123456.',
    email: 'johndoe@mail1.com',
    parentmessageid: '1',
    status: 'sent',
  },
];

export const invalidPost = [
  {
    subject: '',
    message: 'Testing 123456.',
    email: 'johndoe@mail1.com',
    parentmessageid: '1',
    status: 'sent',
  },
  {
    subject: 'This is it',
    message: '',
    email: 'johndoe@mail1.com',
    parentmessageid: '1',
    status: 'sent',
  },
];

export const noSentItem = [];
