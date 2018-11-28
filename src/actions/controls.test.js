import { NAME_CHANGE, GREETING_CHANGE, changeGreeting, changeName } from './controls';

describe('actions', () => {
  it('creates a namechange action', () => {
    const action = changeName('Ryan');
    expect(action).toEqual({
      type: NAME_CHANGE,
      payload: 'Ryan'
    });
  });

  it('creates a greeting change action', () => {
    const action = changeGreeting('Yo!');
    expect(action).toEqual({
      type: GREETING_CHANGE,
      payload: 'Yo!'
    });
  });
});
