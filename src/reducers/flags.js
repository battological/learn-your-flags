import _ from 'lodash';

import { NEXT, SEED, SKIP, GIVE_UP } from '../constants/actionTypes';
import flags from '../constants/flags';

const initialState = {
  stack: flags,
  seed: 0,
  index: 0
};

export default function flagsReducer (state = initialState, action) {
  if (action.type === SEED) {
    return {
      ...state,
      seed: action.seed,
      stack: _.shuffle(state.stack) // todo: seeded shuffle
    };
  }
  if (action.type === NEXT) {
    const flag = {
      ...state.stack[action.index],
      success: true
    };
    return {
      ...state,
      index: state.index + 1,
      stack: [
        ...state.stack.slice(0, action.index),
        flag,
        ...state.stack.slice(action.index + 1)
      ]
    };
  }
  if (action.type === SKIP) {
    return {
      ...state,
      stack: [
        ...state.stack.slice(0, action.index),
        ...state.stack.slice(action.index + 1),
        state.stack[action.index]
      ]
    };
  }
  if (action.type === GIVE_UP) {
    const flag = {
      ...state.stack[action.index],
      success: false
    };
    return {
      ...state,
      index: state.index + 1,
      stack: [
        ...state.stack.slice(0, action.index),
        flag,
        ...state.stack.slice(action.index + 1)
      ]
    };
  }
  return state;
}
