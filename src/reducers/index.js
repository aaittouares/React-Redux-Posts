import { combineReducers } from 'redux';
import {reducer as ReducerForm} from 'redux-form';
import ReducerPosts from './reducer-posts';
import ReducerActivePost from './reducer-active-post';

const rootReducer = combineReducers({
  activePost: ReducerActivePost,
  posts: ReducerPosts,
  form: ReducerForm
});

export default rootReducer;
