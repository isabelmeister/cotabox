import React from 'react';
import { render } from '@testing-library/react';
import GeneralProvider from '../Context/GeneralProvider';
import userEvent from '@testing-library/user-event';
import App from '../App';

// PS: work in progress. I admit is harder than I remember, but I'm not giving up.
describe('Check the App behavior', () => {

  it('Check the inputs and the click', () => {
    const { getByPlaceholderText, getByText } = render(
      <GeneralProvider>
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
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(participationInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    // Problem to fireEvent the button ?
    /* fireEvent.click(button);
    const firstName = getByText('Joana');
    const lastName = getByText('Pimentel');
    const participation = getByText('10');
    expect(firstName.tagName).toBe('TD');
    expect(lastName.tagName).toBe('TD');
    expect(participation.tagName).toBe('TD'); */
  })
})