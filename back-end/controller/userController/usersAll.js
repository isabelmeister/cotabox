const getUser = require('../../model/getUser');

const getAllUsers = async (req, res) => {
  const users = await getUser.getAll();
  res.status(200).json({ users });
};

module.exports = {
  getAllUsers,
};