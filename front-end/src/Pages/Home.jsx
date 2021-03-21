import React, { useEffect, useState } from 'react';
import HomeContext from '../Context/HomeContext';
import HomeGraphic from '../Components/HomeComponents/HomeGraphic';
import HomeTable from '../Components/HomeComponents/HomeTable';
import fetchAPI from '../Services/fetchAPI';

function Home() {
  useEffect(() => {
    const dataUsers = await fetchAPI.getAll();
  }, []);

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
