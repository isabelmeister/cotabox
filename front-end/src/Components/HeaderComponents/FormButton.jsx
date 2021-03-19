import React, { useContext } from 'react';
import HeaderContext from '../../Context/HeaderContext';

function FormButton() {
  const { handleClick } = useContext(HeaderContext);
  return (
    <div>
      <button
        type="submit"
        onClick={ handleClick }
      >
        SEND
      </button>
    </div>
  );
};

export default FormButton;
