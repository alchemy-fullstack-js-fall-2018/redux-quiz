import { UPDATE_NAME_CHANGE } from '../actions/controls';

const initialState = {
  name: 'Please Enter a Name'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_NAME_CHANGE:
      return { ...state, name: payload };
    default:
      return state;
  }
}
