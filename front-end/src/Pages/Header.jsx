import React, { useState } from 'react';
import FormButton from '../Components/HeaderComponents/FormButton';
import FormInput from '../Components/HeaderComponents/FormInput';
import HeaderContext from '../Context/HeaderContext';

function Header() {
  const [user, setUser] = useState({firstName: '', lastName: '', participation: 0});

  return (
    <HeaderContext.Provider value={ {
      user,
      setUser,
    } }
    >
      <FormInput />
      <FormButton />
    </HeaderContext.Provider>
  );
};

export default Header;
