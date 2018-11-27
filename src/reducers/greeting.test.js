import greetingReducer from './greeting';
import { GREETING_CHANGE } from '../actions/greeting';

describe('greeting reducer', () => {

  const initialState = {
    greeting: 'hello'
  };

  it('handles a GREETING_CHANGE', () => {
    const newState = greetingReducer(initialState, {
      type: GREETING_CHANGE,
      payload: 'goodbye'
    });

    expect(newState.greeting).toEqual('goodbye');
  });

});
