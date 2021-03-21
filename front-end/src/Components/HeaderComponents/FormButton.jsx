import React, { useContext } from 'react';
import HeaderContext from '../../Context/HeaderContext';
import fetchAPI from '../../Services/fetchAPI';;

function FormButton() {
  const { user } = useContext(HeaderContext);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(user);
    const { firstName, lastName, participation } = user;
    const register = await fetchAPI.create(firstName, lastName, participation);
    console.log(register)
    return register;
    // create a paste and a new file called API for requirements
    // make here the connection with the create API from back-end
    // on clicking the button you have to create a new user on DB.
  };
  return (
    <div>
      <button
        type="submit"
        onClick={ handleClick }
      >
        SEND
      </button>
    </div>
  );
};

export default FormButton;
