import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from '../Pages/Home';
import GeneralProvider from '../Context/GeneralProvider';

describe('Checking the Home components', () => {

  test('Checking the table headers', () => {
    const {} = render(
      <MemoryRouter>
        <GeneralProvider>
          <Home />
        </GeneralProvider>
      </MemoryRouter>,
    );
    const headerTable = document.getElementsByTagName('th');
    expect(headerTable[0].innerHTML).toBe('');
    expect(headerTable[1].innerHTML).toBe('First name');
    expect(headerTable[2].innerHTML).toBe('Last name');
    expect(headerTable[3].innerHTML).toBe('Participation');
  });

  test('Checking the table headers attributes', () => {
    const {} = render(
      <MemoryRouter>
        <GeneralProvider>
          <Home />
        </GeneralProvider>
      </MemoryRouter>,
    );
    const headerTable = document.getElementsByTagName('th');
    expect(headerTable.length).toStrictEqual(4);
  });

});