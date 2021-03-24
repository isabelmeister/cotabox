import React from 'react';
import FormButton from '../Components/HeaderComponents/FormButton';
import FormInput from '../Components/HeaderComponents/FormInput';
import '../../node_modules/bulma/css/bulma.css';

function Header() {
  return (
    <header class="columns" style={{backgroundColor: '#29b6f6', paddingBottom: '60px'}}>
      <div class="column" /* style={{width: '70%'}} */>
      <FormInput />
      </div>
      <div class="column" >
      <FormButton />
      </div>
    </header>
  );
}

export default Header;
