import { NAME_CHANGE, changeName } from '../name';

describe('name action', () => {

  test('changes name', () => {
    const name = 'asdf';
    const action = changeName(name);
    expect(action.type).toEqual(NAME_CHANGE);
    expect(action.payload).toEqual(name);
  });
});
