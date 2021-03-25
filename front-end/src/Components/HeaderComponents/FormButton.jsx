import React, { useContext, useEffect } from 'react';
import GeneralContext from '../../Context/GeneralContext';
import fetchAPI from '../../Services/fetchAPI';

function FormButton() {
  const { user, setUser, setUsers, setPart, setUserName, userColor, setUserColor, setColor } = useContext(GeneralContext);

  const randomColor = () => {
    const r = Math.round(Math.random() * 255, 1);
    const g = Math.round(Math.random() * 255, 1);
    const b = Math.round(Math.random() * 255, 1);
    setUserColor(`rgb(${r}, ${g}, ${b})`)
  };

  useEffect(()=> {
    randomColor();
  }, []);

  const handleClick = async e => {
    e.preventDefault();
    const { firstName, lastName, participation } = user;
    if (!firstName && !lastName && !participation) {
      return alert('Fill all the inputs');
    }
    randomColor();
    // Creating the new user in the database
    const register = await fetchAPI.create(firstName, lastName, Number(participation), userColor);
    if (register.message === 'created new user') {
      // If successfully created will get the data for render the table and the graphic
      const dataUsers = await fetchAPI.getAll();
      setUsers(dataUsers);
      const getParticipation = dataUsers.map(user => user.participation);
      setPart(getParticipation);
      const getUserName = dataUsers.map(user => user.firstName + ' ' + user.lastName);
      setUserName(getUserName);
      const getColor = dataUsers.map((user) => user.color);
      setColor(getColor)
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
