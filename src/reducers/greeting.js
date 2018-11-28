import { GREETING_CHANGE } from '../actions/greeting';

const initialState = {
  greeting: 'hello',
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case GREETING_CHANGE:
      return { ...state, greeting: payload };
    default: return state;
  }
}
