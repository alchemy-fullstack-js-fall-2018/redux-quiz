import reducer from './greeting';
import { GREETING_CHANGE } from '../actions/greeting';

describe ('greeting reducer', () => {

  const state = 'Greetings';

  it('returns an initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('updates the state with a new greeting', () => {
    const newState = reducer (state, {
      type: GREETING_CHANGE,
      payload: 'Howdy'
    });
    expect(newState).toEqual('Howdy');
  });

});
