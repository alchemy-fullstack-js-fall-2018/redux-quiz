import nameReducer from './name';
import { NAME_CHANGE } from '../actions/name';

describe('greeting reducer', () => {

  const initialState = {
    name: 'hello'
  };

  it('handles a GREETING_CHANGE', () => {
    const newState = nameReducer(initialState, {
      type: NAME_CHANGE,
      payload: 'doris'
    });

    expect(newState.name).toEqual('doris');
  });

});
