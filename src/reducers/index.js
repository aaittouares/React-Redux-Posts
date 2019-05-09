import { combineReducers } from 'redux';
import ReducerPosts from './reducer-posts';
import ReducerActivePost from './reducer-active-post';

const rootReducer = combineReducers({
  activePost: ReducerActivePost,
  posts: ReducerPosts
});

export default rootReducer;
