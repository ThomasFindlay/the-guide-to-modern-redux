import { createStore, combineReducers, applyMiddleware } from "redux";
import { postsReducer } from "./posts.reducer";
import thunk from "redux-thunk";

const appReducers = combineReducers({
  posts: postsReducer,
});

export const store = createStore(appReducers, applyMiddleware(thunk));
