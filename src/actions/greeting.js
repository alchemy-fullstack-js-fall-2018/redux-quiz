export const GREETING_CHANGE = 'GREETING_CHANGE';
export const greetingChange = greeting => ({
  type: GREETING_CHANGE,
  payload: greeting
});
