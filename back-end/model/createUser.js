const connection = require('./connection');

const create = async (firstName, lastName, percentage) => {
  const creation = await connection().then((db) => db.collection('users').insertOne({ firstName, lastName, percentage }));
  return creation;
};

module.exports = {
  create,
};