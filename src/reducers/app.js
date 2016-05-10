import SeededShuffle from 'seededshuffle';

import flagReducer from './flag';

import * as types from '../constants/actionTypes';
import * as continents from '../constants/continents';
import * as stages from '../constants/stages';
import flags from '../constants/flags';

const defaultState = {
  seed: 1,
  index: 0,
  continent: continents.ALL,
  stack: flags,
  stage: stages.GUESSING
};

const appReducer = (state = defaultState, action) => {
  const reductions = {
    [types.CREATE_STACK] () {
      const { continent, seed } = action;

      const filteredStack = flags.filter(flag => continent === undefined || continent === continents.ALL || continent === flag.continent);
      const shuffledStack = SeededShuffle.shuffle(filteredStack, seed, true);

      return {
        ...state,
        stack: shuffledStack
      };
    },

    [types.NEXT] () {
      const { index, stack } = state;
      const nextStage = (index >= stack.length - 1) ? stages.SUMMARY : stages.GUESSING;

      return {
        ...state,
        index: index + 1,
        stage: nextStage
      };
    },

    [types.SKIP] () {
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

    [types.GIVE_UP] () {
      const { stack } = state;
      return {
        ...state,
        stack: stack.map((flag, index) => flagReducer(flag, index, action)),
        stage: stages.GIVE_UP
      };
    },

    [types.WRONG_GUESS] () {
      const { stack } = state;
      return {
        ...state,
        stack: stack.map((flag, index) => flagReducer(flag, index, action)),
      };
    },

    [types.RIGHT_GUESS] () {
      const { stack } = state;
      return {
        ...state,
        stack: stack.map((flag, index) => flagReducer(flag, index, action)),
        stage: stages.SUCCESS
      };
    }
  };
  return reductions[action.type] !== undefined ? reductions[action.type]() : state;
};

export default appReducer;
