import { getName } from './name';

describe ('greeting selector', () => {
  const state = {
    greeting: 'Howdy',
    name: 'Bob'
  };

  it('gets the name', () => {
    const result = getName(state);
    expect(result).toEqual('Bob');
  });

});
