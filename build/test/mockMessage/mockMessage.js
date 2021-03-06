"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noSentItem = exports.invalidPost = exports.validPostData = void 0;
var validPostData = [{
  subject: 'Test message',
  message: 'Testing 123456.'
}];
exports.validPostData = validPostData;
var invalidPost = [{
  subject: '',
  message: 'Testing this app'
}, {
  subject: 'This is it',
  message: ''
}];
exports.invalidPost = invalidPost;
var noSentItem = [];
exports.noSentItem = noSentItem;
//# sourceMappingURL=mockMessage.js.map