const frisby = require('frisby');
const { connection: getConnection } = require('../model/connection');

describe('Check if gets all users', () => {
  let url = 'http://localhost:3001';
  let db;

  beforeAll(async () => {
    db = await getConnection();
  });

  beforeEach(async () => {
    await db.collection('users').deleteMany({});
    const users = {
      firstName: 'Joana', lastName: 'Pimentel', participation: 10, color: 'rgb(255,255,255)'
    };
    await db.collection('users').insertOne(users);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Will be validated if all fields return filled', async () => {
    await frisby
    .get(`${url}/users`)
    .expect('status', 200)
    .then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      expect(result[0].firstName).toEqual("Joana");
      expect(result[0].lastName).toEqual("Pimentel");
      expect(result[0].participation).toEqual(10);
      expect(result[0].color).toEqual('rgb(255,255,255)');
      expect(result).toHaveLength(result.length);
    });
  });
});
