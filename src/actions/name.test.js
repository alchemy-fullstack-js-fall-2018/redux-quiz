import { NAME_CHANGE, nameChange } from './name';

describe('name actions', () => {
  it('can change the name', () => {
    const action = nameChange('Jim');

    expect(action).toEqual({
      type: NAME_CHANGE,
      payload: 'Jim'
    });
  });
});
