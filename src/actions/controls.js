export const UPDATE_GREETING_CHANGE = 'UPDATE_GREETING_CHANGE';
export const updateGreetingChange = greeting => ({
  type: UPDATE_GREETING_CHANGE,
  payload: greeting
});

export const UPDATE_NAME_CHANGE = 'UPDATE_NAME_CHANGE';
export const updateNameChange = name => ({
  type: UPDATE_NAME_CHANGE,
  payload: name
});
