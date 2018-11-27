import { NAME_CHANGE, nameChange } from './name';


describe('greeting actions', () => {
  it('can create a greeting change action', () => {
    const action = nameChange('frank');

    expect(action).toEqual({
      type: NAME_CHANGE,
      payload: 'frank'
    });
  });
});
