import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Pages/Header';
import App from '../App';
import GeneralProvider from '../Context/GeneralProvider';
import userEvent from '@testing-library/user-event';

describe('Check the Header components', () => {
  
  test('Check the inputs placeholder text', () => {
    const { queryByPlaceholderText } = render(
      <GeneralProvider>
        <Header />
      </GeneralProvider>
    );
    const firstNameInput = queryByPlaceholderText('First name');
    const lastNameInput = queryByPlaceholderText('Last name');
    const participationInput = queryByPlaceholderText('Participation');

    expect(firstNameInput.placeholder).toBe('First name');
    expect(lastNameInput.placeholder).toBe('Last name');
    expect(participationInput.placeholder).toBe('Participation');
  });

  test('Check if exists three inputs', () => {
    const { getByTestId } = render(
      <GeneralProvider>
        <Header />
      </GeneralProvider>
    );
    const firstInput = getByTestId('input-first');
    const secondInput = getByTestId('input-last');
    const thirdInput = getByTestId('input-participation');

    expect(firstInput.tagName).toBe('INPUT');
    expect(secondInput.tagName).toBe('INPUT');
    expect(thirdInput.tagName).toBe('INPUT');
    
    expect(firstInput).toBeInTheDocument();
    expect(secondInput).toBeInTheDocument();
    expect(thirdInput).toBeInTheDocument();
  });

  test('Check if the button exists', () => {
    const { getAllByRole } = render(
      <GeneralProvider>
        <Header />
      </GeneralProvider>
    );
    const quantityButtons = getAllByRole('button');
    
    expect(quantityButtons.length).toStrictEqual(1);
    expect(quantityButtons).toHaveLength(1);
    expect(quantityButtons[0]).toBeInTheDocument();
  });

  test('Check if the button text is "SEND"', () => {
    const { getAllByRole } = render(
      <GeneralProvider>
        <Header />
      </GeneralProvider>
    );
    const button = getAllByRole('button');
    
    expect(button[0].innerHTML).toEqual('SEND');
  });

  test('Check the inputs behavior', () => {
    const { queryByPlaceholderText } = render(
      <GeneralProvider>
        <App />
      </GeneralProvider>
    );
    const firstNameInput = queryByPlaceholderText('First name');
    const lastNameInput = queryByPlaceholderText('Last name');
    const participationInput = queryByPlaceholderText('Participation');
    userEvent.type(firstNameInput, 'Joana');
    userEvent.type(lastNameInput, 'Pimentel');
    userEvent.type(participationInput, '10');
    expect(firstNameInput).toHaveValue('Joana');
    expect(lastNameInput).toHaveValue('Pimentel');
    expect(participationInput).toHaveValue(10);
  });
});