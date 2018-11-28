import reducer from '../index';
import { NAME_CHANGE } from '../../actions/name';

describe('reducer', () => {

  const state = {
    name: '',
    greeting: 'Hello'
  };

  test('returns an initialState, defaulting to nothing', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  test('handles a NAME_CHANGE and updates name in state', () => {
    const newName = 'John Jingleheimerschmidt';
    const newState = reducer(state, {
      type: NAME_CHANGE,
      payload: newName
    });
    expect(newState).toEqual({ ...state, name: newName });
  });

});
