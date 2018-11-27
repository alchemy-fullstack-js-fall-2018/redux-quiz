import { NAME_CHANGE } from '../actions/name';

const initialState = '';

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case NAME_CHANGE:
      return payload;
    default:
      return state;
  }
}
