import { UPDATE_GREETING } from '../actions/GREETING_CHANGE';

const initialState = {
  greeting: 'Hello'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_GREETING:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
}
