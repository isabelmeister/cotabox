const getUser = require('../../model/getUser');

const byFirstName = async (req, res) => {
  const { firstName } = req.body;

  const userFirstName = await getUser.getByFirstName(firstName);

  res.status(200).json({ userFirstName });
};

module.exports = {
  byFirstName,
};