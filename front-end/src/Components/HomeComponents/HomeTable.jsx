import React, { useContext } from 'react';
import HomeContext from '../../Context/HomeContext';

function HomeTable() {
  const { users } = useContext(HomeContext)

  const userNumber = (prev) => prev + 1;

  return (
    <div>
      <tr>
        <th></th>
        <th>First name</th>
        <th>Last name</th>
        <th>Participation</th>
      </tr>
      {users.map((item, index) => (
        <tr key={index}>
          <td>{userNumber(index)}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.participation}</td>
        </tr>
      ))}
    </div>
  )
}

export default HomeTable;
