import { combineReducers } from 'redux';
import followers from './followers';
import followings from './followings';
import all from './all';

const reducer = combineReducers({
  followers,
  followings,
  all,
});

export default reducer;
