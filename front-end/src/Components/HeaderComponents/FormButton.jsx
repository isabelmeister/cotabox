import React, { useContext } from 'react';
import GeneralContext from '../../Context/GeneralContext';
import fetchAPI from '../../Services/fetchAPI';

function FormButton() {
  const { user, setUsers, part, setPart, userName, setUserName } = useContext(GeneralContext);

  const handleClick = async e => {
    e.preventDefault();
    const { firstName, lastName, participation } = user;
    const register = await fetchAPI.create(firstName, lastName, Number(participation));
    if (register.message === 'created new user') {
      const dataUsers = await fetchAPI.getAll();
      setUsers(dataUsers);
      const getParticipation = dataUsers.map(user => user.participation);
      setPart(...part, getParticipation);
      const getUserName = dataUsers.map(user => user.firstName + ' ' + user.lastName);
      setUserName(...userName, getUserName);
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
