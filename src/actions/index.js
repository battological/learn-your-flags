import * as types from '../constants/actionTypes';

export function nextFlag (attempts) {
  return {
    type: types.NEXT,
    attempts
  };
}

export function skipFlag (attempts) {
  return {
    type: types.SKIP,
    attempts
  };
}
