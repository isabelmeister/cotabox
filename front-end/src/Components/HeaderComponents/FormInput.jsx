import React, { useContext } from 'react';
import GeneralContext from '../../Context/GeneralContext';

function FormInput() {
  const { user, setUser } = useContext(GeneralContext);

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Participation"
        name="participation"
        value={user.participation}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormInput;
