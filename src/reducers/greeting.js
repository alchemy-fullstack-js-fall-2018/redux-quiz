import { GREETING_CHANGE } from '../actions/text';

const initialState = {
  greeting: 'My name is...'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case GREETING_CHANGE:
      return { ...state, greeting: payload };
    default:
      return state;
  }
}
