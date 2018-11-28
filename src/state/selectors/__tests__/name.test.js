import { getName } from '../name';

describe('name selector', () => {
  const state = {
    name: 'john doe',
    greeting: 'generic greeting'
  };

  test('gets name from state', () => {
    const name = getName(state);
    const expected = 'john doe';
    expect(name).toEqual(expected);
  });
});
