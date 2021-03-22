import React from 'react';
import HomeGraphic from '../Components/HomeComponents/HomeGraphic';
import HomeTable from '../Components/HomeComponents/HomeTable';

function Home() {
  return (
    <div>
      <h1>Data</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <HomeTable />
      <HomeGraphic />
    </div>
  );
}

export default Home;
