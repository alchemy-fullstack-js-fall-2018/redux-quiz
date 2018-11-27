export const GREETING_CHANGE = 'GREETING_CHANGE';
export const changeGreeting = input => ({
  type: GREETING_CHANGE,
  payload: input
});

export const NAME_CHANGE = 'NAME_CHANGE';
export const changeName = input => ({
  type: NAME_CHANGE,
  payload: input
});
