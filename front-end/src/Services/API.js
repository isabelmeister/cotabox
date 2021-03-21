const axios = require('axios');

const URL_BASE = 'http://localhost:3001/users'

const create = async ({ firstName, lastName, participation }) => axios
  .post(`${URL_BASE}`, { firstName, lastName, participation })
  .then((res) => ({ response: res.data }))
  .catch((err) => ({status: err.status, message: err.message}));

const getAll = async () => axios
  .get(`${URL_BASE}`)
  .then((res) => ({response: res.data}))
  .catch((err) => ({status: err.status, message: err.message}))

module.exports = {
  create,
  getAll,
};
