import { UPDATE_GREETING } from '../actions/text';

const initialState = {
  greeting: 'hello'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_GREETING:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
}
