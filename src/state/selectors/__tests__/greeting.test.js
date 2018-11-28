import { getGreeting } from '../greeting';

describe('greeting selector', () => {
  const state = {
    name: 'john doe',
    greeting: 'generic greeting'
  };

  test('gets name from state', () => {
    const greeting = getGreeting(state);
    const expected = 'generic greeting';
    expect(greeting).toEqual(expected);
  });
});
