const axios = require('axios');

const URL_BASE = 'http://localhost:3001/users'

const create = async ({ firstName, lastName, participation }) => axios
  .post(`${URL_BASE}`, { firstName, lastName, participation })
  .then((response) => response.data);

const getAll = async () => axios
  .get(`${URL_BASE}`)
  .then((response) => response.data);

module.exports = {
  create,
  getAll,
};
