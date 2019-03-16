"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai.default.should,
    expect = _chai.default.expect;
should(); // Use chaiHttp for Http verbs.

_chai.default.use(_chaiHttp.default);

var goodUrl = '/';
var welcomeMsg = 'Welcome to EPIC-Mail, Great to have you';
var badUrl = '/*';
var badUrlMsg = 'Oops, Sorry page not found!';
describe('Test for index route', function () {
  describe('GET request to home page', function () {
    it('should return the homepage with a welcome message', function (done) {
      _chai.default.request(_server.default).get(goodUrl).end(function (err, res) {
        res.should.have.status(200);
        res.should.be.a('object');
        expect(res.body.message).to.equal(welcomeMsg);
        done();
      });
    });
  });
  describe('GET request for wrong path', function () {
    it('should return a page with an error message', function (done) {
      _chai.default.request(_server.default).get(badUrl).end(function (err, res) {
        res.should.have.status(404);
        res.should.be.a('object');
        expect(res.body.message).to.equal(badUrlMsg);
        done();
      });
    });
  });
});
//# sourceMappingURL=defaultRoute.test.js.map