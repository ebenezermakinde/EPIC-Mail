import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

// Get our dummyData from utils folder
import messages from '../utils/dummyMessages';

// Get our  mockMessages
import { validPostData, invalidPost } from './mockMessage/mockMessage';
import { goodSignUpDetail } from './mockMessage/mockUser';

const { should, expect } = chai;
should();

// Use chaiHttp for Http verbs.
chai.use(chaiHttp);

let userToken;

describe('Create Token for user', () => {
  it('should return token for successful login user', (done) => {
    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'johndoe@mail.com',
        password: 'obey123456',
      })
      .end((error, res) => {
        expect(res).to.have.status(200);
        userToken = res.body.data[0].token;
        done();
      });
  });
});

describe('Emails test', () => {
  describe('POST', () => {
    describe('Send a valid email', () => {
      it('should return status code 200 and send message', (done) => {
        chai
          .request(app)
          .post('/api/v1/messages')
          .set('authorization', userToken)
          .send(validPostData[0])
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            expect(res.body.status).to.equal(201);
            expect(res.body).to.be.a('object');
            done();
          });
      });
    });
    describe('Sending an email with empty subject', () => {
      it('should return status code 400 and send an error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/messages')
          .set('authorization', userToken)
          .send(invalidPost[0])
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('error');
            expect(res.body.status).to.equal(400);
            expect(res.body.error).to.equal('Subject is required');
            done();
          });
      });
    });
    describe('Sending an email with empty message', () => {
      it('should return status code 400 and send an error message', (done) => {
        chai
          .request(app)
          .post('/api/v1/messages')
          .set('authorization', userToken)
          .send(invalidPost[1])
          .end((err, res) => {
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('error');
            expect(res.body.status).to.equal(400);
            expect(res.body.error).to.equal('Message is required');
            done();
          });
      });
    });
  });
  describe('GET', () => {
    describe('Get all recieved emails', () => {
      it('should return status code 200 and get all emails', (done) => {
        chai
          .request(app)
          .get('/api/v1/messages')
          .set('authorization', userToken)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('error');
            expect(res.body.status).to.equal(404);
            expect(res.body.error).to.equal('There are no received messages yet');
            done();
          });
      });
    });
    describe('Get one email', () => {
      it('should return status code 200 and get a message', (done) => {
        chai
          .request(app)
          .get('/api/v1/messages/1')
          .set('authorization', userToken)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            expect(res.body.status).to.equal(200);
            done();
          });
      });
    });
    describe('Get all sent emails', () => {
      it('should return status code 200 and get all sent', (done) => {
        chai
          .request(app)
          .get('/api/v1/messages/sent')
          .set('authorization', userToken)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            expect(res.body.status).to.equal(200);
            done();
          });
      });
    });
    describe('Get all unread with no unread present', () => {
      it('should return status code 404 and send error message', (done) => {
        chai
          .request(app)
          .get('/api/v1/messages/unread')
          .set('authorization', userToken)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('error');
            expect(res.body.status).to.equal(404);
            expect(res.body.error).to.equal('No unread messages');
            done();
          });
      });
    });
  });

  describe('DELETE', () => {
    describe('Delete an email id that is present', () => {
      it('should return status code 200 and remove message', (done) => {
        const id = 1;
        chai
          .request(app)
          .delete(`/api/v1/messages/${id}`)
          .set('authorization', userToken)
          .send(messages)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            expect(res.body.status).to.equal(200);
            done();
          });
      });
    });
    describe('Delete an email id that is not present', () => {
      it('should return status code 404 and send an error message', (done) => {
        const id = 6;
        chai
          .request(app)
          .delete(`/api/v1/messages/${id}`)
          .set('authorization', userToken)
          .send(messages)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            res.body.should.have.property('error');
            expect(res.body.status).to.equal(404);
            expect(res.body.error).to.equal('Message was not found');
            done();
          });
      });
    });
  });
});
