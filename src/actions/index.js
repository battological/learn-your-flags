import * as types from '../constants/actionTypes';
import { ALL } from '../constants/regions';

export function saveURL (currentURL) {
  return {
    type: types.SAVE_STACK,
    currentURL
  };
}

export function restoreSavedStack (restore) {
  return {
    type: types.RESTORE_SAVED_STACK,
    restore
  };
}

export function createStack (regions = ALL, seed = 12345) {
  return {
    type: types.CREATE_STACK,
    regions,
    seed
  };
}

export function next (index) {
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

export function wrongGuess (index, guess, editDistance) {
  return {
    type: types.WRONG_GUESS,
    index,
    guess,
    editDistance
  };
}

export function rightGuess (index) {
  return {
    type: types.RIGHT_GUESS,
    index
  };
}

export function changeregion (region) {
  return {
    type: types.CHANGE_region,
    region
  };
}

export function locationChange (location) {
  return {
    type: types.LOCATION_CHANGE,
    location
  };
}
