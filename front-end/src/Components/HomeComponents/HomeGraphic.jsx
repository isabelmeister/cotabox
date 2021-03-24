import React, { useContext, useEffect } from 'react';
import GeneralContext from '../../Context/GeneralContext';
import fetchAPI from '../../Services/fetchAPI';
import { Doughnut } from 'react-chartjs-2';

function HomeGraphic() {
  const { part, setPart, userName, setUserName } = useContext(GeneralContext);

  useEffect(() => {
    const getData = async () => {
      const allData = await fetchAPI.getAll();
      const getParticipation = allData.map(user => user.participation);
      setPart(getParticipation);
      const getUserName = allData.map(user => user.firstName + ' ' + user.lastName);
      setUserName(getUserName);
    };
    getData();
  }, []);

  const data = {
    labels: userName,
    datasets: [{
      label: userName,
      data: part,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
      ],
      borderWidth: 1,
    }]
  };
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
    /* cutoutPercentage: 50, */
  };

  return (
    <div style={{marginTop: '80px', marginRight: '160px', marginLeft: '-200px' }}>
      <Doughnut data={data} width={200} height={200} options={option}/>
    </div>
  );
};

export default HomeGraphic;
