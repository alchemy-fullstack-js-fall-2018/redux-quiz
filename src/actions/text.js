export const UPDATE_GREETING = 'UPDATE_GREETING';
export const updateGreeting = greeting => ({
  type: UPDATE_GREETING,
  payload: greeting
});

export const UPDATE_NAME = 'UPDATE_NAME';
export const updateName = name => ({
  type: UPDATE_NAME,
  payload: name
});
