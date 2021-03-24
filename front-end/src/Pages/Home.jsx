import React from 'react';
import HomeGraphic from '../Components/HomeComponents/HomeGraphic';
import HomeTable from '../Components/HomeComponents/HomeTable';
import '../../node_modules/bulma/css/bulma.css';

function Home() {

  const firstDivStyle = {
    marginTop: '50px'
  };
  const h1Style = {
    color: 'black',
    fontSize: '30px',
    fontWeight: 'bold',
    paddingBottom: '15px',
  }
  const h2Style = {
    color: '#696969',
  }

  return (
    <div style={firstDivStyle}>
      <h1 style={h1Style}>DATA</h1>
      <h2 style={h2Style}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <div className="columns">
        <div className="column">
        <HomeTable />
        </div>
        <div className="column">
        <HomeGraphic />
        </div>
      </div>
    </div>
  );
}

export default Home;
