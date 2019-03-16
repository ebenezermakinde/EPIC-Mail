"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayFlatten = void 0;

// eslint-disable-next-line import/prefer-default-export
var arrayFlatten = function arrayFlatten(message) {
  var newArr = []; // eslint-disable-next-line no-plusplus

  for (var i = 0; i < message.length; i++) {
    if (Array.isArray(message[i])) {
      newArr = newArr.concat(arrayFlatten(message[i]));
    } else {
      newArr.push(message[i]);
    }

    newArr.forEach(function (args, index) {
      // eslint-disable-next-line no-param-reassign
      args.id = index + 1;
    });
  }

  return newArr;
};

exports.arrayFlatten = arrayFlatten;
//# sourceMappingURL=arrayFlatten.js.map