import { NEXT } from '../constants/ActionTypes';

const initialState = {
  stack: [],
  seed: 0,
  index: 0
};

export default function flags (state = initialState, action) {
  if (action.type === NEXT) {
    return {
      ...state,
      index: state.index + 1
    };
  }
  return state;
}
