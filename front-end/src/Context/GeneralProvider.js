import React, { useState } from 'react';
import GeneralContext from './GeneralContext';

function GeneralProvider({ children }) {
  const [user, setUser] = useState({firstName: '', lastName: '', participation: ''});
  const [users, setUsers] = useState([]);
  const [part, setPart] = useState([]);
  const [userName, setUserName] = useState([]);

  const context = {
    user,
    setUser,
    users,
    setUsers,
    part,
    setPart,
    userName,
    setUserName,
  };

  return (
    <GeneralContext.Provider value={context}>
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralProvider;
