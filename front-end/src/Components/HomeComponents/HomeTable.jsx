import React, { useContext, useEffect } from 'react';
import GeneralContext from '../../Context/GeneralContext';
import fetchAPI from '../../Services/fetchAPI';

function HomeTable() {
  const { users, setUsers } = useContext(GeneralContext);

  useEffect(() => {
    const getallUsers = async () => {
      const dataUsers = await fetchAPI.getAll();
      return setUsers(dataUsers);
    };
    return getallUsers();
  }, []);
  
  const userNumber = prev => prev + 1;

  const mapUsers = users
    .sort((a, b) => a.participation - b.participation)
    .map((item, index) => (
      <tr key={index}>
        <td>{userNumber(index)}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.participation}</td>
      </tr>
    ));

  /* const filterPart = users.sort((item) => item.participation);
  console.log(filterPart); */

  return (
    <table>
      <thead>
        <th></th>
        <th>First name</th>
        <th>Last name</th>
        <th>Participation</th>
      </thead>
      <tbody>{mapUsers}</tbody>
    </table>
  );
}

export default HomeTable;
