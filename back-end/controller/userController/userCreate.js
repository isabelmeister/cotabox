const createUser = require('../../model/createUser');

const create = async (req, res) => {
  const {firstName, lastName, percentage } = req.body;

  const created = await createUser.create(firstName, lastName, percentage);

  res.status(201).json({ user: { _id: created.insertedId, firstName, lastName, percentage }});
};

module.exports = {
  create,
};