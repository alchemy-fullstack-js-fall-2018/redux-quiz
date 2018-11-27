import reducer from '../index';
import { GREETING_CHANGE } from '../../actions/greeting';

describe('reducer', () => {

  const state = {
    greeting: 'qwerty'
  };

  test('returns an initialState, defaulting to Hello', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  test('handles a GREETING_CHANGE and updates greeting in state', () => {
    const newGreeting = 'Happy Birthday';
    const newState = reducer(state, {
      type: GREETING_CHANGE,
      payload: newGreeting
    });
    expect(newState).toEqual({ ...state, greeting: newGreeting });
  });

});
