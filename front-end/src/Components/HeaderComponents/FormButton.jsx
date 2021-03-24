import React, { useContext } from 'react';
import GeneralContext from '../../Context/GeneralContext';
import fetchAPI from '../../Services/fetchAPI';

function FormButton() {
  const { user, setUser, setUsers, setPart, setUserName } = useContext(GeneralContext);

  const handleClick = async e => {
    e.preventDefault();
    const { firstName, lastName, participation } = user;
    if (!firstName && !lastName && !participation) {
      return alert('Fill all the inputs');
    }
    const register = await fetchAPI.create(firstName, lastName, Number(participation));
    if (register.message === 'created new user') {
      const dataUsers = await fetchAPI.getAll();
      setUsers(dataUsers);
      const getParticipation = dataUsers.map(user => user.participation);
      setPart(getParticipation);
      const getUserName = dataUsers.map(user => user.firstName + ' ' + user.lastName);
      setUserName(getUserName);
    }
    if (register.error) {
      return alert(register.error);
    }
    setUser({ firstName: '', lastName: '', participation: '' });
    return register;
  };

  const style = {
    paddingLeft: '30px',
    paddingRight: '50px',
    paddingTop: '15px',
    paddingBottom: '15px',
    marginTop: '55px',
    border: '3px, solid, white',
    backgroundColor: '#29b6f6',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px'
  };

  return (
    <div>
      <button
        class="button is-normal"
        style={style}
        type="submit"
        onClick={handleClick}
      >
        SEND
      </button>
    </div>
  );
}

export default FormButton;
