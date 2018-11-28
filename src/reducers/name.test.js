import reducer from './name';
import { NAME_CHANGE } from '../actions/controls';

describe('name change reducer', () => {

  const initialState = {
    name: ''
  };

  it('handles GREETING_CHANGE action', () => {
    const newState = reducer(initialState, { type: NAME_CHANGE, payload: 'Juan Pablo' });
    expect(newState.name).toEqual('Juan Pablo');
  });

  it('returns default if it doesnt recognize action', () => {
    const newState = reducer(initialState, { type: 'GREETING_CHANGER', payload: 'Juan Pable' });
    expect(newState.name).toEqual('');
  });
});
