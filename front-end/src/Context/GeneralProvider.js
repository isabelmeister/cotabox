import React, { useState } from 'react';
import GeneralContext from './GeneralContext';

function GeneralProvider({ children }) {
  const [user, setUser] = useState({firstName: '', lastName: '', participation: ''});
  const [users, setUsers] = useState([]);

  const context = {
    user,
    setUser,
    users,
    setUsers,
  };

  return (
    <GeneralContext.Provider value={context}>
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralProvider;
