import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import user from '../redux/reducers/user';
import { renderWithRouterAndRedux } from './helpers/renderWith';

const email = 'teste@teste.com';
const password = '123456';
const carteira = '/carteira';

describe('Testes na página de Wallet', () => {
  beforeEach(() => {
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
  it('1) Testa se o usuário consegue adicionar algum gasto.', () => {
    renderWithRouterAndRedux(<App />);
    const value = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');
    const currency = screen.getByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    const despesaLabel = screen.getByRole('button', { name: /Adicionar despesa/i });

    expect(value).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
    expect(despesaLabel).toBeInTheDocument();
  });

  it('2) Como estão as informações no Header antes de inputar os valores.', () => {
    renderWithRouterAndRedux(<App />);
    const headingh1 = screen.getByRole('heading', { name: /TrybeWallet/i, level: 1 });
    expect(headingh1).toBeDefined();

    const emailh5 = screen.getByRole('heading', { name: email });
    expect(emailh5).toBeDefined();

    const totalGastoh3 = screen.getByRole('heading', { name: /total gasto:/i });
    expect(totalGastoh3).toBeDefined();

    const total = screen.getByTestId('total-field');
    expect(total).toHaveTextContent(0.00);

    const moedaCorrente = screen.getByText(/moeda corrente:/i);
    expect(moedaCorrente).toBeDefined();

    const BRLh4 = screen.getByRole('heading', { name: /BRL/i });
    expect(BRLh4).toBeDefined();
  });

  it('3) Como estão as informações na TABLE depois de inputar os valores.', () => {
    renderWithRouterAndRedux(<App />);
    const value = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');
    const currency = screen.findByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    const despesaLabel = screen.getByRole('button', { name: /Adicionar despesa/i });
    const table = screen.getByRole('table');

    userEvent.type(value, 2);
    userEvent.type(description, 'mousse de chocolate');
    userEvent.type(currency, 'USD');
    userEvent.type(method, 'Dinheiro');
    userEvent.type(tag, 'Alimentação');
    userEvent.click(despesaLabel);

    expect(table).toBeVisible();

    // const total = screen.getByTestId('total-field');
    // expect(total).toHaveTextContent(Number(10.67).toFixed(2));
  });
});
