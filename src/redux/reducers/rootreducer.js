import { combineReducers } from 'redux';
import followers from './followers';
import followings from './followings';
import all from './all';
import user from './user';
import friend from './friend';
import filter from './filter';

const reducer = combineReducers({
  followers,
  followings,
  all,
  user,
  friend,
  filter,
});

export default reducer;
