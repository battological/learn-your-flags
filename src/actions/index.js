import * as types from '../constants/actionTypes';

export function createStack (continent) {
  return {
    type: types.CREATE_STACK,
    continent
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

export function changeContinent (continent) {
  return {
    type: types.CHANGE_CONTINENT,
    continent
  };
}

export function locationChange (location) {
  return {
    type: types.LOCATION_CHANGE,
    location
  };
}
