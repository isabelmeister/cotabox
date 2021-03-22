import React, { useContext } from 'react';
import GeneralContext from '../../Context/GeneralContext';
import fetchAPI from '../../Services/fetchAPI';

function FormButton() {
  const { user, setUsers } = useContext(GeneralContext);

  const handleClick = async e => {
    e.preventDefault();
    const { firstName, lastName, participation } = user;
    const register = await fetchAPI.create(firstName, lastName, Number(participation));
    console.log(register);
    if (register.message === 'created new user') {
      const dataUsers = await fetchAPI.getAll();
      setUsers(dataUsers);
    }
    if (register.error) {
      return alert(register.error)
    }
    return register;
  };

  return (
    <div>
      <button type="submit" onClick={handleClick}>
        SEND
      </button>
    </div>
  );
}

export default FormButton;
