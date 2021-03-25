import React, { useContext, useEffect } from 'react';
import GeneralContext from '../../Context/GeneralContext';
import fetchAPI from '../../Services/fetchAPI';
import { Doughnut } from 'react-chartjs-2';

function HomeGraphic() {
  const { part, setPart, userName, setUserName, color, setColor } = useContext(GeneralContext);

  useEffect(() => {
    const getData = async () => {
      // Render all data from database to populate graphic
      const allData = await fetchAPI.getAll();
      // Find all the participation to populate the graphic
      const getParticipation = allData.map(user => user.participation);
      setPart(getParticipation);
      // Find and combine the user full name to populate the graphic
      const getUserName = allData.map(user => user.firstName + ' ' + user.lastName);
      setUserName(getUserName);
      // Find all the users colors to populate the graphic
      const getColor = allData.map((user) => user.color);
      setColor(getColor);
    };
    getData();
  }, []);


  // Graphic data construction
  const data = {
    labels: userName,
    datasets: [{
      label: userName,
      data: part,
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
    }]
  };
  // Graphic options construction
  const option = {
    legend: {
      position: 'right',
      display: true,
      align: 'center',
      fullWidth: false,
      reverse: true,
      labels:{
        fontSize: 15,
        fontColor: '#000',
      }
    },
    layout: {
      padding: {
        left: 250,
        right: 250,
        top: 0,
        bottom: 0,
      }
    },
    maintainAspectRatio: false,
    responsive: true
    /* cutoutPercentage: 50, */
  };

  return (
    <div style={{marginTop: '80px', marginRight: '160px', marginLeft: '-200px' }}>
      <Doughnut data={data} width={200} height={200} options={option}/>
    </div>
  );
};

export default HomeGraphic;
