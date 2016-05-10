import shuffle from 'knuth-shuffle-seeded';

import flagReducer from './flag';

import * as TYPES from '../constants/actionTypes';
import * as REGIONS from '../constants/regions';
import * as STAGES from '../constants/stages';
import flags from '../constants/flags';

/* const compressed = all
  .map((e, i) => worldUnique(i))
  .filter((e, i) => (toSave.length < all.length / 2) ? toSave.includes(i) : !toSave.includes(i) ); */

const defaultState = {
  seed: 1,
  index: 0,
  region: REGIONS.ALL,
  stack: flags,
  stage: STAGES.GUESSING,
  misspell: false
};

const appReducer = (state = defaultState, action) => {
  const reductions = {
    [TYPES.CREATE_STACK] () {
      const regions = action.regions.split(',');
      const { seed } = action;
      const filteredStack = flags.filter(flag => {
        const acceptable = [undefined, REGIONS.ALL, ...regions, ...flag.regions];
        const set = new Set(acceptable);
        return set.size !== acceptable.length;
      });
      const shuffledStack = shuffle(filteredStack, seed);

      return {
        ...state,
        stack: shuffledStack
      };
    },

    [TYPES.NEXT] () {
      const { index, stack } = state;
      const nextStage = (index >= stack.length - 1) ? STAGES.SUMMARY : STAGES.GUESSING;

      return {
        ...state,
        index: index + 1,
        stage: nextStage
      };
    },

    [TYPES.SKIP] () {
      const { index } = action;
      const { stack } = state;

      return {
        ...state,
        stack: [
          ...stack.slice(0, index),
          ...stack.slice(index + 1),
          stack[index]
        ]
      };
    },

    [TYPES.GIVE_UP] () {
      const { stack } = state;
      return {
        ...state,
        stack: stack.map((flag, index) => flagReducer(flag, index, action)),
        stage: STAGES.GIVE_UP
      };
    },

    [TYPES.WRONG_GUESS] () {
      const { stack } = state;
      const { editDistance } = action;
      return {
        ...state,
        misspell: editDistance <= 3,
        stack: stack.map((flag, index) => flagReducer(flag, index, action)),
      };
    },

    [TYPES.RIGHT_GUESS] () {
      const { stack } = state;
      return {
        ...state,
        misspell: false,
        stack: stack.map((flag, index) => flagReducer(flag, index, action)),
        stage: STAGES.SUCCESS
      };
    }
  };
  return reductions[action.type] !== undefined ? reductions[action.type]() : state;
};

export default appReducer;
