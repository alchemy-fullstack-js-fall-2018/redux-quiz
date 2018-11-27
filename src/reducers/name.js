import { UPDATE_NAME } from '../actions/NAME_CHANGE';

const initialState = {
  name: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
