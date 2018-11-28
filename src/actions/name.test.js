import {
  NAME_CHANGE,
  changeName
} from './name';

describe('name actions', () => {
  it('can create a change name action', () => {
    const action = changeName('Sam');

    expect(action).toEqual({
      type: NAME_CHANGE,
      payload: 'Sam'
    });
  });

});
