import * as types from '../constants/actionTypes';

export function seed (stackSeed) {
  return {
    type: types.SEED,
    seed: stackSeed
  };
}

export function successful (index) {
  return {
    type: types.NEXT,
    index
  };
}

export function skip (index) {
  return {
    type: types.SKIP,
    index
  };
}

export function giveUp (index) {
  return {
    type: types.GIVE_UP,
    index
  };
}

export function wrongGuess (index, guess) {
  return {
    type: types.WRONG_GUESS,
    index,
    guess
  };
}
