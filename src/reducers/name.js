import { UPDATE_NAME } from '../actions/text';

const initialState = {
  name: 'hello'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

