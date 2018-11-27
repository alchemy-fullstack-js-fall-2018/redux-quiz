import { NAME_CHANGE } from '../actions/name';

const initialState = {
  name: 'david'
};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case NAME_CHANGE:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
