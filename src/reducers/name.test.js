import nameReducer from './name';
import { NAME_CHANGE } from '../actions/name';

describe('name reducer', () => {
  const initialState = {
    name: 'Hello'
  };

  it('handles the NAME CHANGE action', () => {
    const newState = nameReducer(initialState, {
      type: NAME_CHANGE,
      payload: 'Joe'
    });

    expect(newState.name).toEqual('Joe');
  });

  it('ignore actions it does not know about', () => {
    const newState = nameReducer(initialState, {
      type: 'MADE_UP_TYPE',
      payload: 'silly test'
    });

    expect(newState).toEqual(initialState);
  });
});
