import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const email = 'teste@teste.com';
const password = '123456';
const carteira = '/carteira';

describe('Testes na página de Login', () => {
  it('1) Testa se o usuário consegue clicar no botão ENTRAR e ser direcionado para a página de CARTEIRA', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
    userEvent.type(emailInput, email);

    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
    userEvent.type(passwordInput, password);

    const entrarBtn = screen.getByText(/Entrar/i);
    expect(entrarBtn).toBeInTheDocument();
    userEvent.click(entrarBtn);

    act(() => {
      history.push(carteira);
    });

    const { pathname } = history.location;
    expect(pathname).toBe(carteira);
  });
});
