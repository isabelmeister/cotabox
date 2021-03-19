const checkFirstName = async (firstName) => {
  if (!firstName) {
    return { isError: true , status: 400, message: 'firstName is required' };  
  }
  if (typeof firstName !== 'string') {
    return { isError: true , status: 400, message: 'firstName must be a string' };
  }
  if (firstName.length < 4) {
    return { isError: true , status: 400, message: 'firstName must have at least 4 characters' };
  }
};

const checkLastName = async (lastName) => {
  if (!lastName) {
    return { isError: true , status: 400, message: 'lastName is required' };  
  }
  if (typeof lastName !== 'string') {
    return { isError: true , status: 400, message: 'lastName must be a string' };
  }
  if (lastName.length < 5) {
    return { isError: true , status: 400, message: 'lastName must have at least 5 characters' };
  }
};

const checkParticipation = async (participation) => {
  if (!participation) {
    return { isError: true , status: 400, message: 'participation is required' };
  }
  if (typeof participation !== 'number') {
    return { isError: true , status: 400, message: 'participation must be a number' };
  }
  if (participation > 100) {
    return { isError: true , status: 400, message: 'participation must be less than 100' };
  }
};

module.exports = {
  checkFirstName,
  checkLastName,
  checkParticipation,
}