import { POSTS_ACTIONS } from "./posts.actions";

const initialState = {
  isLoadingPosts: false,
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_ACTIONS.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case POSTS_ACTIONS.SET_IS_LOADING_FETCH_POSTS:
      return {
        ...state,
        isLoadingPosts: action.payload,
      };
    default:
      return state;
  }
};
