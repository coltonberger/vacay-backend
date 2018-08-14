process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../db/knex');

beforeEach(done => {
  Promise.all([
    knex('users').insert({id:1, firstName: 'colton', lastName: 'berger', email: 'colton@gmail.com', password: '1234'})
  ])
  .then(() => done())
  .catch((err)=>{
    console.log(err)
  })
});

// GET ALL
describe('GET /users', () => {
    it('responds with JSON', done => {
        request(app)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('returns an array of all users objects when responding with JSON', done => {
    request(app)
      .get('/users')
      .end((err, res) => {
        expect(res.body).to.deep.equal([{
          id: 1,
          firstName: 'colton',
          lastName: 'berger',
          email: 'colton@gmail.com',
          password: '1234'
        }]);
        done();
      });
  });
});

// GET ONE
describe('GET /users/:id', () => {
  it('responds with JSON', done => {
      request(app)
          .get('/users')
          .expect('Content-Type', /json/)
          .expect(200, done);
  });

  it('the server returns data on the users with the given id', done => {
  request(app)
    .get('/users/1')
    .end((err, res) => {
      expect(res.body).to.deep.equal([{
        id: 1,
        firstName: 'colton',
        lastName: 'berger',
        email: 'colton@gmail.com',
        password: '1234'
      }]);
      done();
    });
  });
});

afterEach((done) => {
  knex('users')
  .del()
  .then(() => {
    return done()
  })
  .catch((err) => {
    console.log(err)
  })
});

describe('POST /users', () => {

  let newUser = {
    firstName: 'max',
    lastName: 'berger',
    email: 'max@gmail.com',
    password: '1234'
  }

  it('responds with JSON', done => {
    request(app)
      .post('/users')
      .type('form')
      .send(newUser)
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('adds the new user to the database', done => {
    request(app)
      .post('/user')
      .type('form')
      .send(newUser)
      .end((err, res) => {
        knex('users')
        .select()
        .then(users => {
          done();
        });
      });
  });
});
