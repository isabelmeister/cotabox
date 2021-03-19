const getUser = require('../../model/getUser');

const byLastName = async (req, res) => {
  const { lastName } = req.body;

  const userLastName = await getUser.getByLastName(lastName);

  res.status(200).json({ userLastName });
};

module.exports = {
  byLastName,
};