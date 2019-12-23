import { LOGIN_USER, GET_CURRENT_USER, LOGOUT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case GET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
