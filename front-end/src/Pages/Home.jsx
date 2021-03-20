import React, { useState } from 'react';
import HomeContext from '../Context/HomeContext';
import HomeGraphic from '../Components/HomeComponents/HomeGraphic';
import HomeTable from '../Components/HomeComponents/HomeTable';

function Home() {
  const [users, setUsers] = useState([]);

  return (
    <HomeContext.Provider value={{ users }}>
      <h1>Data</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <HomeTable />
      <HomeGraphic />
    </HomeContext.Provider>
  )
}

export default Home;
