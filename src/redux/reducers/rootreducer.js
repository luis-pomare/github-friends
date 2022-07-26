import { combineReducers } from 'redux';
import followers from './followers';
import followings from './followings';

const reducer = combineReducers({
  followers,
  followings,
});

export default reducer;
