import { combineReducers } from '@reduxjs/toolkit';
import { reducer as postsReducer } from 'src/redux/slices/posts';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
