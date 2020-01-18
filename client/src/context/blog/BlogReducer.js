import { GET_BLOGS, GET_USER_SPECIFIFC_BLOG } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BLOGS:
      
      return {
        ...state,
        hasNextPage: action.payload.hasNextPage,
        hasPreviousPage: action.payload.hasPreviousPage,
        currentPage: action.payload.currentPage,
        nextPage: action.payload.nextPage,
        previousPage: action.payload.previousPage,
        ...state.blogs,
        blogs: action.payload.blogs
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
