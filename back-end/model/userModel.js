const connection = require('./connection');

const create = async (firstName, lastName, participation) => {
  const creation = await connection().then((db) => db.collection('users').insertOne({ firstName, lastName, participation }));
  return creation.ops[0];
};

const getAll = async () => {
  const allUsers = await connection().then((db) => db.collection('users').find().toArray());
  return allUsers;
};

const getByFullName = async (firstName, lastName) => {
  const getFirstName = await connection().then((db) => db.collection('users').findOne({ firstName, lastName }));
  return getFirstName;
};

module.exports = {
  create,
  getAll,
  getByFullName,
};