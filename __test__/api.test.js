const request = require('supertest');
const server = require('../src/server/server');
const { validate } = require('uuid');

describe('Test first case', function () {
  let person = {
    name: 'dummy',
    age: 6,
    hobbies: ['dummy'],
  };
  it('get []', function (done) {
    request(server)
      .get('/person')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body.length).toEqual(0);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('create person', function (done) {
    request(server)
      .post('/person')
      .send(person)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .expect((res) => {
        person = res.body;
        expect(res.body.name).toEqual('dummy');
        expect(validate(res.body.id)).toEqual(true);
        expect(res.body.name).toEqual('dummy');
        expect(res.body.age).toEqual(6);
        expect(res.body.hobbies).toEqual(['dummy']);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('get created person by id', function (done) {
    request(server)
      .get(`/person/${person.id}`)

      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(person);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('update person', function (done) {
    const updatedPerson = {
      name: 'dummy1',
      age: 64,
      hobbies: [],
    };
    request(server)
      .put(`/person/${person.id}`)
      .send(updatedPerson)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual({ ...updatedPerson, id: person.id });
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('delete person by id', function (done) {
    request(server)
      .delete(`/person/${person.id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(204)

      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('get deleted person by id', function (done) {
    request(server)
      .get(`/person/${person.id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)

      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe('Test seconde case', function () {
  const person = {
    name: 'dummy',
    age: 6,
    hobbies: [5],
  };

  it('create person', function (done) {
    request(server)
      .post('/person')
      .send(person)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)

      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe('Test third case', function () {
  let person = {
    name: 'dummy',
    age: 6,
    hobbies: ['dummy'],
  };

  it('create person', function (done) {
    request(server)
      .post('/person')
      .send(person)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .expect((res) => {
        person = res.body;
        expect(res.body.name).toEqual('dummy');
        expect(validate(res.body.id)).toEqual(true);
        expect(res.body.name).toEqual('dummy');
        expect(res.body.age).toEqual(6);
        expect(res.body.hobbies).toEqual(['dummy']);
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  it('get created person by wrong id', function (done) {
    request(server)
      .get(`/person/dummy`)

      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)

      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
