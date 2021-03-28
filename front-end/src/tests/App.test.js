import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import GeneralProvider from '../Context/GeneralProvider';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Check the App behavior', () => {
  // PS: work in progress. I admit is harder than I remember, but I'm not giving up.

  /* it('Check the inputs and the click', () => {
    const history = createMemoryHistory();
    const { getByPlaceholderText, getByText, getAllByText } = render(
      <GeneralProvider history={ history }>
        <App />
      </GeneralProvider>
    )
    const firstNameInput = getByPlaceholderText('First name');
    const lastNameInput = getByPlaceholderText('Last name');
    const participationInput = getByPlaceholderText('Participation');
    const button = getByText(/SEND/);
    userEvent.type(firstNameInput, 'Joana');
    userEvent.type(lastNameInput, 'Pimentel');
    userEvent.type(participationInput, 10);
    // Problem to fireEvent into the button ?
    fireEvent.click(button);
    const firstName = getAllByText('Joana');
    const lastName = getAllByText('Pimentel');
    const participation = getAllByText('10');
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(participation).toBeInTheDocument();
  }) */
})