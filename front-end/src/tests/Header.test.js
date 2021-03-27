import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, userEvent } from '@testing-library/react';
import Header from '../Pages/Header';
import App from '../App';
import GeneralProvider from '../Context/GeneralProvider';

describe('Check the Header components', () => {
  
  test('checking the inputs placeholder values', () => {
    const { queryByPlaceholderText } = render(
      <MemoryRouter>
        <GeneralProvider>
          <Header />
        </GeneralProvider>
      </MemoryRouter>,
    );
    const firstNameInput = queryByPlaceholderText('First name');
    const lastNameInput = queryByPlaceholderText('Last name');
    const participationInput = queryByPlaceholderText('Participation');

    expect(firstNameInput.placeholder).toBe('First name');
    expect(lastNameInput.placeholder).toBe('Last name');
    expect(participationInput.placeholder).toBe('Participation');
    expect(firstNameInput.tagName).toBe('INPUT');
    expect(lastNameInput.tagName).toBe('INPUT');
    expect(participationInput.tagName).toBe('INPUT');
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(participationInput).toBeInTheDocument();
  });

  test('checking if exists three inputs', () => {
    const {} = render(
      <MemoryRouter>
        <GeneralProvider>
          <Header />
        </GeneralProvider>
      </MemoryRouter>,
    );
    const quantityInputs = document.getElementsByTagName('input');
    
    expect(quantityInputs.length).toStrictEqual(3);
  });

  test('Check if the button exists', () => {
    const { queryAllByRole } = render(
      <MemoryRouter>
        <GeneralProvider>
          <Header />
        </GeneralProvider>
      </MemoryRouter>,
    );
    const quantityButtons = queryAllByRole('button');
    
    expect(quantityButtons.length).toStrictEqual(1);
    expect(quantityButtons[0]).toBeInTheDocument();
  });

  test('Check the button text', () => {
    const { queryAllByRole } = render(
      <MemoryRouter>
        <GeneralProvider>
          <Header />
        </GeneralProvider>
      </MemoryRouter>,
    );
    const button = queryAllByRole('button');
    
    expect(button[0].innerHTML).toEqual('SEND');
  });

  test('Checking the button behavior', () => {
    const { queryByPlaceholderText, queryAllByRole, getByText } = render(
      <MemoryRouter>
        <GeneralProvider>
          <App />
        </GeneralProvider>
      </MemoryRouter>,
    );
    const firstNameInput = queryByPlaceholderText('First name');
    const lastNameInput = queryByPlaceholderText('Last name');
    const participationInput = queryByPlaceholderText('Participation');
    const button = queryAllByRole('button');
    fireEvent.change(firstNameInput, { target: { value: 'Joana' } });
    fireEvent.change(lastNameInput, { target: { value: 'Pimentel' } });
    fireEvent.change(participationInput, { target: { value: 10 } });
    fireEvent.click(button[0]);

    /* const firstName = getByText('Joana');
    expect(firstName).toBeInTheDocument(); */
  });

});