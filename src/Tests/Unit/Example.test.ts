import request from 'supertest';
import express from 'express';
import { expect } from 'chai';

// Import your Express app
import { app } from '../../index';

describe('GET /example', () => {
  it('should return 200 and the expected response', async () => {
    const res = await request(app).get('/example');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('message', 'Hello World');
  });
});
