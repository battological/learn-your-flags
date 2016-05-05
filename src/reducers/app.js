import _ from 'lodash';

import * as types from '../constants/actionTypes';
import * as continents from '../constants/continents';
import flags from '../constants/flags';
import flagLogic from './flag';

const defaultState = {
  seed: 0,
  index: 0,
  continent: continents.ALL,
  stack: _.shuffle(flags)
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
  if (action.type === types.CHANGE_CONTINENT) {
    return {
      ...state,
      continent: action.continent,
      stack: state.stack.filter(flag => flag.continent === action.continent)
    };
  }
  if (action.type === types.LOCATION_CHANGE) {
    if (_.has(continents, action.location)) {
      return {
        ...state,
        continent: action.location,
        stack: state.stack.filter(flag => flag.continent === action.location)
      };
    }
    return {
      ...state
    };
  }

  return state;
};

export default appLogic;
