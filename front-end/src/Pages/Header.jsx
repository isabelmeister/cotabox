import React, { useState } from 'react';
import FormButton from '../Components/HeaderComponents/FormButton';
import FormInput from '../Components/HeaderComponents/FormInput';
import HeaderContext from '../Context/HeaderContext';
import API from '../Services/API';

function Header() {
  const [user, setUser] = useState({firstName: '', lastName: '', participation: 0});

  const handleChange = ({ target }) => {
    setUser({...user, [target.name]: target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { firstName, lastName, participation } = user;
    const register = await API.create(firstName, lastName, participation);
    // create a paste and a new file called API for requirements
    // make here the connection with the create API from back-end
    // on clicking the button you have to create a new user on DB.
  };

  return (
    <HeaderContext.Provider value={ {
      user,
      handleChange,
      handleClick,
    } }
    >
      <FormInput />
      <FormButton />
    </HeaderContext.Provider>
  );
};

export default Header;
