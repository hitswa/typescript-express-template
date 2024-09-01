// Example Feature Test with Mocha and Chai
import request from 'supertest';
import { expect } from 'chai';
import { app } from '../../index'; // Adjust the path as needed

describe('User Routes', () => {
  it('should create a new user and return 201', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'John Doe', email: 'john@example.com' });
    
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body.name).to.equal('John Doe');
  });

  it('should fetch a user by ID and return 200', async () => {
    const userId = 'some-id'; // Replace with a valid user ID
    const res = await request(app)
      .get(`/users/${userId}`);
    
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('name');
  });

  // More feature tests
});
