// Coloque aqui suas actions

export const USER_EMAIL = 'USER_EMAIL';

export function userWallet(payload) {
  return {
    type: USER_EMAIL,
    payload,
  };
}
