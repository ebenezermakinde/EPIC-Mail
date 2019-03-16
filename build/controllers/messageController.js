"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneEmail = exports.deleteEmail = exports.sendEmail = exports.getUnreadEmail = exports.getSentEmail = exports.getAllMessages = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _dummyMessages = require("../utils/dummyMessages");

var _arrayFlatten = require("../helpers/arrayFlatten");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var email = [].concat(_toConsumableArray(_dummyMessages.receivedMessages), _toConsumableArray(_dummyMessages.sentMessages));
var messages = (0, _arrayFlatten.arrayFlatten)(email);

var MessageController =
/*#__PURE__*/
function () {
  function MessageController() {
    _classCallCheck(this, MessageController);
  }

  _createClass(MessageController, null, [{
    key: "getAllMessages",
    // Get all emails
    value: function getAllMessages(req, res) {
      return res.status(200).json({
        status: 200,
        data: _dummyMessages.receivedMessages
      });
    } // Get one email.

  }, {
    key: "getOneEmail",
    value: function getOneEmail(req, res) {
      var foundEmail = req.body.foundEmail;
      return res.status(200).json({
        status: 200,
        data: [foundEmail]
      });
    } // Get all sent emails

  }, {
    key: "getSentEmail",
    value: function getSentEmail(req, res) {
      var sent = messages.filter(function (message) {
        return message.status === 'sent';
      });

      if (sent.length === 0) {
        return res.status(404).json({
          status: 404,
          error: 'No sent items'
        });
      }

      return res.status(200).json({
        status: 200,
        data: sent
      });
    } // Get all unread messages

  }, {
    key: "getUnreadEmail",
    value: function getUnreadEmail(req, res) {
      var unread = messages.filter(function (message) {
        return message.status === 'unread';
      });

      if (unread.length === 0) {
        return res.status(404).json({
          status: 404,
          error: 'No unread emails'
        });
      }

      return res.status(200).json({
        status: 200,
        data: unread
      });
    } // Send an email

  }, {
    key: "sendEmail",
    value: function sendEmail(req, res) {
      var newMessage = {
        id: messages.length + 1,
        createdOn: (0, _moment.default)().format('MMMM Do YYYY, h:mm:ss a'),
        subject: req.body.subject,
        message: req.body.message,
        senderId: 1,
        receiverId: messages.length - 1,
        parentMessageId: messages.length + 1,
        status: 'sent'
      };
      messages.push(newMessage);
      return res.status(201).json({
        status: 201,
        data: [newMessage]
      });
    } // Delete an email

  }, {
    key: "deleteEmail",
    value: function deleteEmail(req, res) {
      var foundEmail = req.body.foundEmail;
      var index = messages.indexOf(foundEmail);
      messages.splice(index, 1);
      return res.status(200).json({
        status: 200,
        data: [{
          message: 'Email has been successfully deleted'
        }]
      });
    }
  }]);

  return MessageController;
}();

var getAllMessages = MessageController.getAllMessages,
    getSentEmail = MessageController.getSentEmail,
    getUnreadEmail = MessageController.getUnreadEmail,
    sendEmail = MessageController.sendEmail,
    deleteEmail = MessageController.deleteEmail,
    getOneEmail = MessageController.getOneEmail;
exports.getOneEmail = getOneEmail;
exports.deleteEmail = deleteEmail;
exports.sendEmail = sendEmail;
exports.getUnreadEmail = getUnreadEmail;
exports.getSentEmail = getSentEmail;
exports.getAllMessages = getAllMessages;
//# sourceMappingURL=messageController.js.map