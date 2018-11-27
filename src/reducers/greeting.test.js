import reducer from './greeting';
import { GREETING_CHANGE } from '../actions/controls';

describe('greeting change reducer', () => {

  const initialState = {
    greeting: 'Hello'
  };

  it('handles GREETING_CHANGE action', () => {
    const newState = reducer(initialState, { type: GREETING_CHANGE, payload: 'Yo!' });
    expect(newState.greeting).toEqual('Yo!');
  });

  it('returns default if it doesnt recognize action', () => {
    const newState = reducer(initialState, { type: 'NAME_CHANGER', payload: 'Yo!' });
    expect(newState.greeting).toEqual('Hello');
  });

});
