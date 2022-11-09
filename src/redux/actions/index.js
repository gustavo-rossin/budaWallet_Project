// Coloque aqui suas actions

export const VALID_EMAIL = 'VALID_EMAIL';

export function addEmail(payload) {
  return ({
    type: VALID_EMAIL,
    payload,
  });
}
