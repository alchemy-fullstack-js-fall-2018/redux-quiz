import { getGreeting } from './greeting';


describe('greeting selector', () => {
  const state = {
    greeting: {
      greeting: 'hi'
    }
  };

  it('gets a greeting from state', () => {
    expect(getGreeting(state)).toEqual('hi');
  });

});
