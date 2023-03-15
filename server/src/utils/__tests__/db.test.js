const mongoose = require('mongoose');
require('dotenv').config()
const db = require('../db');


describe('Database Connection', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.disconnect();
  });

  it('should establish a connection to the database', () => {
    expect(mongoose.connection.readyState).toEqual(1);
  });

  it('should close the database connection when disconnected', async () => {
    await db.disconnect();
    expect(mongoose.connection.readyState).toEqual(0);
  });
});
