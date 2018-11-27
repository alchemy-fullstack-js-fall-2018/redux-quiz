import { NAME_CHANGE } from '../actions/name';

const initialState = {
  greeting: 'hello',
  name: 'stranger'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case NAME_CHANGE:
      return { ...state, name: payload };
    default: return state;
  }
}
