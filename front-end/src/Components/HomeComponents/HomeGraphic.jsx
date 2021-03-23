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
      setPart(...part, getParticipation);
      const getUserName = allData.map(user => user.firstName + ' ' + user.lastName);
      setUserName(...userName, getUserName);
    };
    getData();
  }, []);

  const data = {
    labels: userName,
    datasets: [{
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
      borderWidth: 1
    }]
  };

  return <Doughnut data={data} width={100} height={100} options={{ maintainAspectRatio: false }}/>
};

export default HomeGraphic;
