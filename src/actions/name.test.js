import { NAME_CHANGE, changeName } from './name';

describe('name actions', () => {
  const newName = 'frances';

  it('creates an action to change the name', () => {
    expect(changeName(newName)).toEqual({
      type: NAME_CHANGE,
      payload: 'frances'
    });
  });
});
