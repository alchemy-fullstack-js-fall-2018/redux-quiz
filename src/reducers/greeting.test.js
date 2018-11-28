import greetingReducer from './greeting';
import { GREETING_CHANGE } from '../actions/greeting';

describe('greeting reducer', () => {
  const initialState = {
    greeting: 'Hello'
  };

  it('handles the GREETING CHANGE action', () => {
    const newState = greetingReducer(initialState, {
      type: GREETING_CHANGE,
      payload: 'Bye'
    });

    expect(newState.greeting).toEqual('Bye');
  });

  it('ignore actions it does not know about', () => {
    const newState = greetingReducer(initialState, {
      type: 'MADE_UP_TYPE',
      payload: 'silly test'
    });

    expect(newState).toEqual(initialState);
  });
});
