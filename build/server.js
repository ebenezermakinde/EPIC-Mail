"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _messageRoutes = _interopRequireDefault(require("./routes/messageRoutes"));

var _defaultRoute = _interopRequireDefault(require("./routes/defaultRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up the express app.
var app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
})); // Use our routes.

app.use('/api/v1/', _userRoutes.default);
app.use('/api/v1/messages', _messageRoutes.default);
app.use('/', _defaultRoute.default); // Define our port number.

var port = process.env.PORT || 3000; // Set up listening.

app.listen(port, function () {
  console.log("Server is listening on port ".concat(port));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=server.js.map