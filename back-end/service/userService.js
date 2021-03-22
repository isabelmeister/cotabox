const userModel = require('../model/userModel');
const { checkName, checkParticipation } = require('../middlewares/validations');

const createUser = async (firstName, lastName, participation) => {

  const testName = await checkName(firstName, lastName);
  if (testName.isError) {
    return testName;
  }
  
  const testPart = await checkParticipation(participation);
  if (testPart.isError) {
    return testPart;
  }

  const getParticipations = await userModel.getAll();
  if (getParticipations.length > 0) {
    const reducer = (acc, curr) => acc + curr.participation;
    const participations = getParticipations.reduce(reducer, 0);
    if (participations === 100) {
      return { isError: true , status: 400, message: 'maximum participation reached, cannot create a new participant' };
    }
    if (participation + participations > 100) {
      return { isError: true , status: 400, message: 'participation must be a minor value' };
    }
  }

  return await userModel.create(firstName, lastName, participation);
};

const getAllUsers = async () => {
  const allUsers = await userModel.getAll();
  if (!allUsers) {
    return { isError: true , status: 400, message: 'Users not found' }; 
  }
  return allUsers;
};

/* const getAllParticipations = async () => {
  const allParticipations = await userModel.getAllParticipations();
  console.log(allParticipations);
  console.log(allParticipations.cmd.query);
  return allParticipations;
}; */

module.exports = {
  createUser,
  getAllUsers,
};