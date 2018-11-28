import { getGreeting, getName } from './controls';

describe('Controls Selector', () => {
  const state = {
    greeting: {
      greeting: 'Hello'
    },
    name: {
      name: 'Mr. Bubbles'
    }
  };

  it('gets the greeting from state', () => {
    expect(getGreeting(state)).toEqual('Hello');
  });

  it('gets the greeting from state', () => {
    expect(getName(state)).toEqual('Mr. Bubbles');
  });
});
