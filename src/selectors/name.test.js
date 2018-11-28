import { getName } from './name';

describe('name selector', () => {
  const state = {
    name: {
      name: 'Layla'
    }
  };

  it('gets a name from state', () => {
    expect(getName(state)).toEqual('Layla');
  });
});
