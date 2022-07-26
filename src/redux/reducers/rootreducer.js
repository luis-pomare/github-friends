import { combineReducers } from 'redux';
import followers from './followers';
import followings from './followings';
import all from './all';
import user from './user';

const reducer = combineReducers({
  followers,
  followings,
  all,
  user,
});

export default reducer;
