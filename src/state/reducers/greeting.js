import { GREETING_CHANGE } from '../actions/greeting';

const initialState = 'Hello';

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GREETING_CHANGE:
      return payload;
    default:
      return state;
  }
}
