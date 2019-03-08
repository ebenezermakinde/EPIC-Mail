// eslint-disable-next-line import/prefer-default-export
export const validPostData = [
  {
    subject: 'Test message',
    message: 'Testing 123456.',
  },
];

export const invalidPost = [
  {
    subject: '',
    message: 'Testing this app',
  },
  {
    subject: 'This is it',
    message: '',
  },
];

export const emptyMessage = [];
