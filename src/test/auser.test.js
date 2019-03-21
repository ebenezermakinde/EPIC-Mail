import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import {
  goodSignUpDetail, badSignUpDetail, goodLoginDetails, badLoginDetails,
} from './mockMessage/mockUser';

const { should, expect } = chai;
should();

chai.use(chaiHttp);

describe('User test', () => {
  describe('SignUp a user', () => {
    describe('User with good details', () => {
      it('should return status code 201 and create a new user', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(goodSignUpDetail[0])
          .end((err, res) => {
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
    describe('User with good details', () => {
      it('should return status code 201 and create a new user', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(goodSignUpDetail[1])
          .end((err, res) => {
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
    describe('User with good details', () => {
      it('should return status code 201 and create a new user', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(goodSignUpDetail[2])
          .end((err, res) => {
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
    describe('User with empty email', () => {
      it('should return status code 400 and send error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(badSignUpDetail[0])
          .end((err, res) => {
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
    describe('User with empty firstname', () => {
      it('should return status code 400 and send error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(badSignUpDetail[1])
          .end((err, res) => {
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
    describe('User with empty lastname', () => {
      it('should return status code 400 and send error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(badSignUpDetail[2])
          .end((err, res) => {
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
    describe('User with empty password', () => {
      it('should return status code 400 and send error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(badSignUpDetail[3])
          .end((err, res) => {
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
    describe('User with invalid firstname format', () => {
      it('should return status code 400 and send error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(badSignUpDetail[4])
          .end((err, res) => {
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
    describe('User with invalid lastname format', () => {
      it('should return status code 400 and send error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(badSignUpDetail[5])
          .end((err, res) => {
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
    describe('User with invalid email format', () => {
      it('should return status code 400 and send error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(badSignUpDetail[6])
          .end((err, res) => {
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
    describe('User signing up existing email', () => {
      it('should return status code 400 and send an error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/signup')
          .send(badSignUpDetail[8])
          .end((err, res) => {
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

  describe('Login a user', () => {
    describe('User already signed up', () => {
      it('should return status code 200 and login the user', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/login')
          .send(goodSignUpDetail[0])
          .end((err, res) => {
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
    describe('User not signed up', () => {
      it('should return status code 401 and send an error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/login')
          .send(badLoginDetails[0])
          .end((err, res) => {
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
    describe('Signed up user providing empty email', () => {
      it('should return status code 400 and send an error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/login')
          .send(badLoginDetails[1])
          .end((err, res) => {
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
    describe('Signed up user providing empty password', () => {
      it('should return status code 400 and send an error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/login')
          .send(badLoginDetails[2])
          .end((err, res) => {
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
    describe('Signed up user providing wrong password', () => {
      it('should return status code 401 and send an error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/auth/login')
          .send(badLoginDetails[3])
          .end((err, res) => {
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
