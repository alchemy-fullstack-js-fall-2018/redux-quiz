import { UPDATE_GREETING_CHANGE } from '../actions/controls';

const initialState = {
  greeting: 'Hello'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_GREETING_CHANGE:
      return { ...state, greeting: payload };
    default:
      return state;
  }
}
