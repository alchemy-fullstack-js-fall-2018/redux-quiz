export const GREETING_CHANGE = 'GREETING_CHANGE';
export const changeGreeting = greeting => ({
  type: GREETING_CHANGE,
  payload: greeting
});
