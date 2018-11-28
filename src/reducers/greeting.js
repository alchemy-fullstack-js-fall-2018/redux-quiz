import { GREETING_CHANGE } from '../actions/controls';

const initialState = {
  greeting: 'Hello'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GREETING_CHANGE:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
}
