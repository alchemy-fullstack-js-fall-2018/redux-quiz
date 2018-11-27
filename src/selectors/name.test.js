import { getName } from './name';


describe('name selector', () => {
  const state = {
    name: {
      name: 'james'
    }
  };

  it('gets a name from state', () => {
    expect(getName(state)).toEqual('james');
  });

});
