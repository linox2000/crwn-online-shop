import { USER_ACTIION_TYPES } from "./user.type";

const INITIAL_VALUE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
