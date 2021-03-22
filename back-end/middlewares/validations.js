const userModel = require('../model/userModel');

const checkName = async (firstName, lastName) => {
  if (!firstName) {
    return { isError: true , status: 400, message: 'First name is required' };  
  }
  if (typeof firstName !== 'string') {
    return { isError: true , status: 400, message: 'First name must be a string' };
  }
  if (firstName.length < 4) {
    return { isError: true , status: 400, message: 'First name must have at least 4 characters' };
  }
  if (!lastName) {
    return { isError: true , status: 400, message: 'Last name is required' };  
  }
  if (typeof lastName !== 'string') {
    return { isError: true , status: 400, message: 'Last name must be a string' };
  }
  if (lastName.length < 5) {
    return { isError: true , status: 400, message: 'Last name must have at least 5 characters' };
  }
  const fullName = await userModel.getByFullName(firstName, lastName);
  if (fullName) {
    return { isError: true , status: 400, message: 'User already exists' };
  }
  return {isError: false};
};

const checkParticipation = (participation) => {
  if (!participation) {
    return { isError: true , status: 400, message: 'Participation is required' };
  }
  if (participation <= 0) {
    return { isError: true , status: 400, message: 'Participation must be greater than 0' };
  }
  if (typeof participation !== 'number') {
    return { isError: true , status: 400, message: 'Participation must be a number' };
  }
  if (participation > 100) {
    return { isError: true , status: 400, message: 'Participation must be less than 100' };
  }
  return {isError: false};
}

module.exports = {
  checkName,
  checkParticipation,
};