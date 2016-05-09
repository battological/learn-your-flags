import * as types from '../constants/actionTypes';

const flagLogic = (flag = {}, index, action) => { // state refers to the individual flag
  if (action.type === types.RIGHT_GUESS) {
    if (index !== action.index) return flag;

    return {
      ...flag,
      success: true
    };
  }
  if (action.type === types.GIVE_UP) {
    if (index !== action.index) return flag;

    return {
      ...flag,
      success: false
    };
  }
  if (action.type === types.WRONG_GUESS) {
    if (index !== action.index) return flag;

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
