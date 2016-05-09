// import _ from 'lodash';

import * as types from '../constants/actionTypes';
import * as continents from '../constants/continents';
import flags from '../constants/flags';
import flagLogic from './flag';

const defaultState = {
  seed: 0,
  index: 0,
  continent: continents.ALL,
  stack: flags
};
const appLogic = (state = defaultState, action) => { // state is the full app state
  if (action.type === types.CREATE_STACK) {
    const newStack = flags.filter(flag => (
      action.continent === undefined
      || action.continent === continents.ALL
      || flag.continent === action.continent
    ));
    return {
      ...state,
      stack: newStack
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
  if (action.type === types.CHANGE_CONTINENT) {
    return {
      ...state,
      continent: action.continent,
      stack: state.stack.filter(flag => flag.continent === action.continent)
    };
  }

  return state;
};

export default appLogic;
