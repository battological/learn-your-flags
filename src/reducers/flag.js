import * as types from '../constants/actionTypes';

const flagLogic = (flag = {}, action) => { // state refers to the individual flag
  if (action.type === types.NEXT) {
    if (flag.index !== action.index) return flag;

    return {
      ...flag,
      success: true
    };
  }
  if (action.type === types.GIVE_UP) {
    if (flag.index !== action.index) return flag;

    return {
      ...flag,
      success: false
    };
  }
  if (action.type === types.WRONG_GUESS) {
    if (flag.index !== action.index) return flag;

    const attempts = flag.attempts || [];
    return {
      ...flag,
      attempts: [
        ...attempts,
        action.guess
      ]
    };
  }

  return flag;
};

export default flagLogic;
