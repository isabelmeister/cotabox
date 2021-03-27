import React, { useContext } from 'react';
import GeneralContext from '../../Context/GeneralContext';
import '../../../node_modules/bulma/css/bulma.css';

function FormInput() {
  const { user, setUser } = useContext(GeneralContext);

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  return (
    <div class="columns" style={{marginLeft: '420px', marginTop: '50px' , width: '100%'}}>
      <div class="column">
      <input
        class="input is-normal"
        type="text"
        placeholder="First name"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
        data-testid="input-first"
      />
      </div>
      <div class="column">
      <input
        class="input is-normal"
        type="text"
        placeholder="Last name"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
        data-testid="input-last"
      />
      </div>
      <div class="column">
      <input
        class="input is-normal"
        type="number"
        placeholder="Participation"
        name="participation"
        value={user.participation}
        onChange={handleChange}
        data-testid="input-participation"
      />
      </div>
    </div>
  );
}

export default FormInput;
