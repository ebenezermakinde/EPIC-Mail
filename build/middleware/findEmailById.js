"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findEmailById = void 0;

var _dummyMessages = require("../utils/dummyMessages");

var _arrayFlatten = require("../helpers/arrayFlatten");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var value = [].concat(_toConsumableArray(_dummyMessages.receivedMessages), _toConsumableArray(_dummyMessages.sentMessages));
var messages = (0, _arrayFlatten.arrayFlatten)(value); // eslint-disable-next-line import/prefer-default-export

var findEmailById = function findEmailById(req, res, next) {
  var foundEmail = messages.find(function (message) {
    return message.id === Number(req.params.messageId);
  });

  if (!foundEmail) {
    return res.status(404).json({
      status: 404,
      error: 'Email was not found'
    });
  }

  req.body.foundEmail = foundEmail;
  return next();
};

exports.findEmailById = findEmailById;
//# sourceMappingURL=findEmailById.js.map