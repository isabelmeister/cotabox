const frisby = require('frisby');
const { connection: getConnection } = require('../model/connection');

describe('Check if creates a new user', () => {
  let url = 'http://localhost:3001';
  let db;

  beforeAll(async () => {
    db = await getConnection();
  });

  beforeEach(async () => {
    await db.collection('users').deleteMany({});
    /* const users = {
      name: 'admin', email: 'root@email.com', password: 'admin', role: 'admin' };
    await db.collection('users').insertOne(users); */
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Check if all fields are filled', async () => {
    await frisby
      .post(`${url}/users`,
        {
          firstName: 'Joana',
          lastName: 'Pimentel',
          participation: 10
        })
      .expect('status', 201)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.message).toBe('created new user');
      });
  });

  it('Check if firstName exists', async () => {
    await frisby
      .post(`${url}/users`,
        {
          lastName: 'Pimentel',
          participation: 10
        })
      .expect('status', 400)
      // Change to 422 status before update portfolio
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.error).toBe('First name is required');
      });
  });

  it('Check if firstName value is greater than 3 letters', async () => {
    await frisby
      .post(`${url}/users`,
        {
          firstName: 'Joa',
          lastName: 'Pimentel',
          participation: 10
        })
      .expect('status', 400)
      // Change to 422 status before update portfolio
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.error).toBe('First name must have at least 4 characters');
      });
  });

  it('Check if firstName value is string', async () => {
    await frisby
      .post(`${url}/users`,
        {
          firstName: 1,
          lastName: 'Pimentel',
          participation: 10
        })
      .expect('status', 400)
      // Change to 422 status before update portfolio
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.error).toBe('First name must be a string');
      });
  });

  it('Check if lastName exists', async () => {
    await frisby
      .post(`${url}/users`,
        {
          firstName: 'Joana',
          participation: 10
        })
      .expect('status', 400)
      // Change to 422 status before update portfolio
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.error).toBe('Last name is required');
      });
  });

  it('Check if lastName value is greater than 4 letters', async () => {
    await frisby
      .post(`${url}/users`,
        {
          firstName: 'Joana',
          lastName: 'Pime',
          participation: 10
        })
      .expect('status', 400)
      // Change to 422 status before update portfolio
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.error).toBe('Last name must have at least 5 characters');
      });
  });

  it('Check if lastName value is string', async () => {
    await frisby
      .post(`${url}/users`,
        {
          firstName: 'Joana',
          lastName: 1,
          participation: 10
        })
      .expect('status', 400)
      // Change to 422 status before update portfolio
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.error).toBe('Last name must be a string');
      });
  });
  
  it('Check if participation exists', async () => {
    await frisby
      .post(`${url}/users`,
        {
          firstName: 'Joana',
          lastName: 'Pimentel'
        })
      .expect('status', 400)
      // Change to 422 status before update portfolio
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.error).toBe('Participation is required');
      });
  });

  it('Check if participation value is greater than 0', async () => {
    await frisby
      .post(`${url}/users`,
        {
          firstName: 'Joana',
          lastName: 'Pimentel',
          participation: -1
        })
      .expect('status', 400)
      // Change to 422 status before update portfolio
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.error).toBe('Participation must be greater than 0');
      });
  });

  it('Check if participation value is a number', async () => {
    await frisby
      .post(`${url}/users`,
        {
          firstName: 'Joana',
          lastName: 'Pimentel',
          participation: '10'
        })
      .expect('status', 400)
      // Change to 422 status before update portfolio
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.error).toBe('Participation must be a number');
      });
  });

  it('Check if participation value minor than 100', async () => {
    await frisby
      .post(`${url}/users`,
        {
          firstName: 'Joana',
          lastName: 'Pimentel',
          participation: 101
        })
      .expect('status', 400)
      // Change to 422 status before update portfolio
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);
        expect(result.error).toBe('Participation must be less than 100');
      });
  });
  
});
