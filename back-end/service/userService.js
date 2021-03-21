const userModel = require('../model/userModel');

const createUser = async (firstName, lastName, participation) => {
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
  if (participation === 0 || participation === '0') {
    return { isError: true , status: 400, message: 'participation must be greater than 0' };
  };
  if (!participation) {
    return { isError: true , status: 400, message: 'participation is required' };
  }
  if (participation > 100) {
    return { isError: true , status: 400, message: 'participation must be less than 100' };
  }
  /* if (typeof participation !== 'number') {
    return { isError: true , status: 400, message: 'participation must be a number' };
  } */
  //verify maximus participation value

  //VERIFICAR ESSA PARTE AQUI ABAIXO
  const getParticipations = await userModel.getAll();
  if (getParticipations.length > 0) {
    const reducer = (acc, curr) => acc + curr;
    const participations = await getParticipations.map((item) => item.participation).reduce(reducer);
    console.log(participations);
    /* if (participations > 100) {
      return { isError: true , status: 400, message: 'maximum participation reached, cannot create a new participant' };
    } */
    /* if (participation + participations > 100) {
      return { isError: true , status: 400, message: 'participation must be a minor value' };
    } */
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