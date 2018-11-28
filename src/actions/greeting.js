export const GREETING_CHANGE = 'GREETING_CHANGE';
export const greetingChange = updateGreeting => ({
  type: GREETING_CHANGE,
  payload: updateGreeting
});
