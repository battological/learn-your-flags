import _ from 'lodash';

import * as types from '../constants/actionTypes';
import flags from '../constants/flags';
import flagLogic from './flag';

const defaultState = {
  seed: 0,
  index: 0,
  stack: _.shuffle(flags).slice(0, 5)
};
const appLogic = (state = defaultState, action) => { // state is the full app state
  if (action.type === types.SEED) {
    const seededStack = _.shuffle(flags); // todo: make this seeded shuffle
    return {
      ...state,
      seed: action.seed,
      stack: seededStack
    };
  }
  if (action.type === types.NEXT) {
    return {
      ...state,
      index: state.index + 1,
      stack: state.stack.map((f, i) => flagLogic(f, i, action))
    };
  }
  if (action.type === types.SKIP) {
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
  if (action.type === types.GIVE_UP) {
    return {
      ...state,
      index: state.index + 1,
      stack: state.stack.map((f, i) => flagLogic(f, i, action))
    };
  }
  if (action.type === types.WRONG_GUESS) {
    return {
      ...state,
      stack: state.stack.map((f, i) => flagLogic(f, i, action))
    };
  }

  return state;
};

export default appLogic;
