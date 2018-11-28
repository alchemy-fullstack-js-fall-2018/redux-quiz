import reducer from './greeting';
import { GREETING_CHANGE } from '../actions/greeting';

describe('greeting reducer', () => {
  const state = {
    greeting: 'hello',
    name: 'stranger'
  };

  it('handles a GREETING_CHANGE action', () => {
    const newState = reducer(state, {
      type: GREETING_CHANGE,
      payload: 'whatup'
    });
    expect(newState).toEqual({
      greeting: 'whatup',
      name: 'stranger'
    });
  });
});
