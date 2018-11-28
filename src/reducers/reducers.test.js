import greetingReducer from './greeting';
import nameReducer from './name';
import {
  UPDATE_GREETING_CHANGE,
  UPDATE_NAME_CHANGE
} from '../actions/controls';

describe('Reducers', () => {
  const initialState = {
    greeting: 'Hello',
    name: 'Joey'
  };

  it('Greeting Reducer handles the UPDATE_GREETING_CHANGE action', () => {
    const newState = greetingReducer(initialState, {
      type: UPDATE_GREETING_CHANGE,
      payload: 'Yo'
    });

    expect(newState.greeting).toEqual('Yo');
  });

  it('Name Reducer handles the UPDATE_NAME_CHANGE action', () => {
    const newState = nameReducer(initialState, {
      type: UPDATE_NAME_CHANGE,
      payload: 'Joe'
    });

    expect(newState.name).toEqual('Joe');
  });
});
