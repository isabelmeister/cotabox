import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Pages/Home';
import GeneralProvider from '../Context/GeneralProvider';

describe('Checking the Home components', () => {

  it('Checking the table headers', () => {
    const { queryAllByRole } = render(
      <GeneralProvider>
        <Home />
      </GeneralProvider>
    );
    const headerTable = queryAllByRole('table');
    const headerTableChild = queryAllByRole('table')[0].firstChild;
    const headerTableChildTag = headerTableChild.firstChild;
    expect(headerTable[0].tagName).toBe('TABLE')
    expect(headerTable[0]).toBeInTheDocument()
    expect(headerTableChild.tagName).toBe('THEAD')
    expect(headerTableChild).toBeInTheDocument()
    expect(headerTableChildTag.tagName).toBe('TH');
    expect(headerTableChildTag).toBeInTheDocument();
    expect(headerTableChildTag.innerHTML).toBe('');
    expect(headerTableChildTag.nextSibling.innerHTML).toBe('First name');
    expect(headerTableChildTag.nextSibling).toBeInTheDocument();
    expect(headerTableChildTag.nextSibling.nextSibling.innerHTML).toBe('Last name');
    expect(headerTableChildTag.nextSibling.nextSibling).toBeInTheDocument();
    expect(headerTableChildTag.nextSibling.nextSibling.nextSibling.innerHTML).toBe('Participation');
    expect(headerTableChildTag.nextSibling.nextSibling.nextSibling).toBeInTheDocument();
  });

  it('Check the Text in Home page', () => {
    const { getByText } = render(
      <GeneralProvider>
        <Home />
      </GeneralProvider>
    )
    const getTitle = getByText('DATA');
    const getSubTitle = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    expect(getTitle).toBeInTheDocument();
    expect(getTitle.tagName).toBe('H1');
    expect(getSubTitle).toBeInTheDocument();
    expect(getSubTitle.tagName).toBe('H2');
  })

});