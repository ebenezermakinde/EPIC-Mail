"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../server"));

var _mockUser = require("./mockMessage/mockUser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai.default.should,
    expect = _chai.default.expect;
should();

_chai.default.use(_chaiHttp.default);

describe('User test', function () {
  describe('SignUp a user', function () {
    describe('User with good details', function () {
      it('should return status code 201 and create a new user', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.goodSignUpDetail[0]).end(function (err, res) {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          expect(res.body.status).to.equal(201);
          expect(res.body.data).to.be.a('array');
          expect(res.body.data[0]).to.have.property('token');
          done();
        });
      });
    });
    describe('User with empty email', function () {
      it('should return status code 400 and send error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.badSignUpDetail[0]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('Email is required');
          done();
        });
      });
    });
    describe('User with empty firstname', function () {
      it('should return status code 400 and send error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.badSignUpDetail[1]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('firstname is required');
          done();
        });
      });
    });
    describe('User with empty lastname', function () {
      it('should return status code 400 and send error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.badSignUpDetail[2]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('lastname is required');
          done();
        });
      });
    });
    describe('User with empty password', function () {
      it('should return status code 400 and send error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.badSignUpDetail[3]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('Password is required');
          done();
        });
      });
    });
    describe('User signing up with a short password', function () {
      it('should return status code 400 and send an error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.badSignUpDetail[9]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('Password is too short');
          done();
        });
      });
    });
    describe('User with invalid firstname format', function () {
      it('should return status code 400 and send error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.badSignUpDetail[4]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('firstname format is invalid');
          done();
        });
      });
    });
    describe('User with invalid lastname format', function () {
      it('should return status code 400 and send error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.badSignUpDetail[5]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('lastname format is invalid');
          done();
        });
      });
    });
    describe('User with invalid email format', function () {
      it('should return status code 400 and send error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.badSignUpDetail[6]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('Email format is invalid');
          done();
        });
      });
    });
    describe('User with short email address', function () {
      it('should return status code 400 and send error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.badSignUpDetail[7]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('Email is too short');
          done();
        });
      });
    });
    describe('User signing up existing email', function () {
      it('should return status code 400 and send an error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/signup').send(_mockUser.badSignUpDetail[8]).end(function (err, res) {
          res.should.have.status(409);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(409);
          expect(res.body.error).to.equal('Email already exists');
          done();
        });
      });
    });
  });
  describe('Login a user', function () {
    describe('User already signed up', function () {
      it('should return status code 200 and login the user', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/login').send(_mockUser.goodSignUpDetail[0]).end(function (err, res) {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          expect(res.body.status).to.equal(200);
          expect(res.body.data).to.be.a('array');
          expect(res.body.data[0]).to.have.property('token');
          done();
        });
      });
    });
    describe('User not signed up', function () {
      it('should return status code 401 and send an error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/login').send(_mockUser.badLoginDetails[0]).end(function (err, res) {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(401);
          expect(res.body.error).to.equal('Authentication failed');
          done();
        });
      });
    });
    describe('Signed up user providing empty email', function () {
      it('should return status code 400 and send an error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/login').send(_mockUser.badLoginDetails[1]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('Email is required');
          done();
        });
      });
    });
    describe('Signed up user providing empty password', function () {
      it('should return status code 400 and send an error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/login').send(_mockUser.badLoginDetails[2]).end(function (err, res) {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(400);
          expect(res.body.error).to.equal('Password is required');
          done();
        });
      });
    });
    describe('Signed up user providing wrong password', function () {
      it('should return status code 401 and send an error message', function (done) {
        _chai.default.request(_server.default).post('/api/v1/auth/login').send(_mockUser.badLoginDetails[3]).end(function (err, res) {
          res.should.have.status(401);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('error');
          expect(res.body.status).to.equal(401);
          expect(res.body.error).to.equal('Incorrect login details');
          done();
        });
      });
    });
  });
});
//# sourceMappingURL=user.test.js.map