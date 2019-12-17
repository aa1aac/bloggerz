import { GET_BLOGS, GET_USER_SPECIFIFC_BLOG } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        ...state.blogs,
        blogs: action.payload
      };
    case GET_USER_SPECIFIFC_BLOG:
      return {
        ...state,
        ...state.userSpecific,
        userSpecific: action.payload
      };
    default:
      return state;
  }
};
