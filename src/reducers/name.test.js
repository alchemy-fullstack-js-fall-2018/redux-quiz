import reducer from './name'
import { NAME_CHANGE } from '../actions/name';

describe('name reducer', () => {
  const state = {
    greeting: 'hello',
    name: 'stranger'
  };

  it('handles a NAME_CHANGE action', () => {
    const newState = reducer(state, {
      type: NAME_CHANGE,
      payload: 'buddy'
    });
    expect(newState).toEqual({
      greeting: 'hello',
      name: 'buddy'
    });
  });
});
