import _ from 'lodash';

import { NEXT, SEED, SKIP, GIVE_UP, WRONG_GUESS } from '../constants/actionTypes';
import flags from '../constants/flags';

const flag = (state = {}, action) => { // state refers to the individual flag
  if (action.type === NEXT) {
    if (state.index !== action.index) return state;

    return {
      ...state,
      success: true
    };
  }
  if (action.type === GIVE_UP) {
    if (state.index !== action.index) return state;

    return {
      ...state,
      success: false
    };
  }
  if (action.type === WRONG_GUESS) {
    if (state.index !== action.index) return state;

    const attempts = state.attempts || [];
    return {
      ...state,
      attempts: [
        ...attempts,
        action.guess
      ]
    };
  }

  return state;
};

const stack = (state = {
  seed: 0,
  index: 0,
  stack: flags.slice(0, 5).map((f, index) => ({ ...f, index }))
}, action) => { // state is the full app state
  if (action.type === SEED) {
    const seededStack = _.shuffle(flags); // todo: make this seeded shuffle
    return {
      ...state,
      seed: action.seed,
      stack: seededStack
    };
  }
  if (action.type === NEXT) {
    return {
      ...state,
      index: state.index + 1,
      stack: state.stack.map(f => flag(f, action))
    };
  }
  if (action.type === SKIP) {
    const i = action.index;
    return {
      ...state,
      stack: [
        ...state.stack.slice(0, i),
        ...state.stack.slice(i + 1),
        state.stack[i]
      ]
    };
  }
  if (action.type === GIVE_UP) {
    return {
      ...state,
      stack: state.stack.map(f => flag(f, action))
    };
  }
  if (action.type === WRONG_GUESS) {
    return {
      ...state,
      stack: state.stack.map(f => flag(f, action))
    };
  }

  return state;
};

export default stack;
