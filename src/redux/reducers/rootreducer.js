import { combineReducers } from 'redux';
import friends from './friends';
import followers from './followers';

const reducer = combineReducers({
  friends,
  followers,
});

export default reducer;
