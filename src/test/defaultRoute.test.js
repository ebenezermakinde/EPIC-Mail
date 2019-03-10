import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const { should, expect } = chai;
should();

// Use chaiHttp for Http verbs.
chai.use(chaiHttp);

const goodUrl = '/';
const welcomeMsg = 'Welcome to EPIC-Mail, Great to have you';
const badUrl = '/*';
const badUrlMsg = 'Oops, Sorry page not found!';

describe('Test for index route', () => {
  describe('GET request to home page', () => {
    it('should return the homepage with a welcome message', (done) => {
      chai.request(app)
        .get(goodUrl)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          expect(res.body.message).to.equal(welcomeMsg);
          done();
        });
    });
  });
  describe('GET request for wrong path', () => {
    it('should return a page with an error message', (done) => {
      chai.request(app)
        .get(badUrl)
        .end((err, res) => {
          res.should.have.status(404);
          res.should.be.a('object');
          expect(res.body.message).to.equal(badUrlMsg);
          done();
        });
    });
  });
});
