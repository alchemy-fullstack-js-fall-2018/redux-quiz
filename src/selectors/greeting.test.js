import { getGreeting } from './greeting';

describe('greeting selector', () => {
  const state = {
    greeting: 'hello',
    name: 'dolly'
  };
  it('gets the greeting from state', () => {
    expect(getGreeting(state)).toEqual('hello');
  });
});
