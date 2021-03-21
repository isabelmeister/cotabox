const options = (method, body = null) => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: body ? JSON.stringify(body) : undefined
});

const URL_BASE = 'http://localhost:3001/users'

const getAll = async () =>
  fetch(`${URL_BASE}`).then((res) => ({response: res.data}));
const create = async ({ firstName, lastName, participation }) => 
  fetch(`${URL_BASE}`, options('POST', { firstName, lastName, participation }))
  .then((res) => res.json());

  module.exports = { getAll, create };
