'use strict';
const supertest = require('supertest');
const app = require('../src/app');

it('return => { hello: world }', async () => {
    const { status, body } = await supertest(app).get('/');
    expect(status).toEqual(200);
    expect(body).toMatchObject({ hello: 'world' });
});
