const userModel = require('../model/userModel');
/* const createValidation = require('../validations/createValidation'); */

const createUser = async (firstName, lastName, participation) => {
  //verify maximus participation value
  const getParticipations = await userModel.getAll();
  const reducer = (acc, curr) => acc + curr;
  const participations = await getParticipations
    .map((item) => item.participation).reduce(reducer);

  if (participations + participation > 100) {
    return { isError: true , status: 400, message: 'participation must be a minor value' };
  }
  // first name validation
  if (!firstName) {
    return { isError: true , status: 400, message: 'firstName is required' };  
  }
  if (typeof firstName !== 'string') {
    return { isError: true , status: 400, message: 'firstName must be a string' };
  }
  if (firstName.length < 4) {
    return { isError: true , status: 400, message: 'firstName must have at least 4 characters' };
  }
  // last name validation
  if (!lastName) {
    return { isError: true , status: 400, message: 'lastName is required' };  
  }
  if (typeof lastName !== 'string') {
    return { isError: true , status: 400, message: 'lastName must be a string' };
  }
  if (lastName.length < 5) {
    return { isError: true , status: 400, message: 'lastName must have at least 5 characters' };
  }
  // user validation:
  const fullName = await userModel.getByFullName(firstName, lastName);
  if (fullName) {
    return { isError: true , status: 400, message: 'user already exists' };
  }
  // participation validation
  if (!participation) {
    return { isError: true , status: 400, message: 'participation is required' };
  }
  if (typeof participation !== 'number') {
    return { isError: true , status: 400, message: 'participation must be a number' };
  }
  if (participation > 100) {
    return { isError: true , status: 400, message: 'participation must be less than 100' };
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