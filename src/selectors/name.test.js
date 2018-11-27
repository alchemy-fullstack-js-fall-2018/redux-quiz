import { getName } from './name';

describe('name selector', () => {
  const state = {
    greeting: 'hello',
    name: 'dolly'
  };
  it('gets the greeting from state', () => {
    expect(getName(state)).toEqual('dolly');
  });
});
