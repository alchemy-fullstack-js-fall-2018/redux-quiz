import { getGreeting } from './greeting';

describe ('greeting selector', () => {
  const state = {
    greeting: 'Howdy',
    name: 'Bob'
  };

  it('gets the greeting', () => {
    const result = getGreeting(state);
    expect(result).toEqual('Howdy');
  });

});
