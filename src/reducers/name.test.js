import reducer from './name';
import { NAME_CHANGE } from '../actions/name';

describe ('name reducer', () => {

  const state = 'Bob';

  it('returns an initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('updates the state with a new name', () => {
    const newState = reducer (state, {
      type: NAME_CHANGE,
      payload: 'Sandy'
    });
    expect(newState).toEqual('Sandy');
  });

});
