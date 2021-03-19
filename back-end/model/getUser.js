const connection = require('./connection');

const getAll = async () => {
  const allUsers = await connection().then((db) => db.collection('users').find().toArray());
  return allUsers;
};

const getByFirstName = async (firstName) => {
  const getFirstName = await connection().then((db) => db.collection('users').findOne({ firstName }));
  return getFirstName;
};

const getByLastName = async (lastName) => {
  const getLastName = await connection().then((db) => db.collection('users').findOne({ lastName }));
  return getLastName;
};

module.exports = {
  getAll,
  getByFirstName,
  getByLastName,
};