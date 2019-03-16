"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRouter = _express.default.Router(); // Entry message for visitors


defaultRouter.get('/', function (req, res) {
  return res.status(200).json({
    message: 'Welcome to EPIC-Mail, Great to have you'
  });
}); // Handles other routes not defined in the app

defaultRouter.all('/*', function (req, res) {
  return res.status(404).json({
    message: 'Oops, Sorry page not found!'
  });
});
var _default = defaultRouter;
exports.default = _default;
//# sourceMappingURL=defaultRoute.js.map