import React, { useContext } from 'react';
import HeaderContext from '../../Context/HeaderContext';

function FormInput() {
  const {
    user,
    handleChange
  } = useContext(HeaderContext);

  return (
    <div>
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        value={ user.firstName }
        onChange={ handleChange }
      />
      <input
        type="text"
        placeholder="Last name"
        name="LastName"
        value={ user.lastName }
        onChange={ handleChange }
      />
      <input
        type="number"
        placeholder="Participation"
        name="participation"
        value={ user.participation }
        onChange={ handleChange }
      />
    </div>
  );
};

export default FormInput;
