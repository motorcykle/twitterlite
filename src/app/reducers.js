import { combineReducers } from 'redux';
import appReducer from '../features/appSlice';
import tweetReducer from '../features/tweetSlice';

const rootReducer = combineReducers({
  app: appReducer,
  tweet: tweetReducer
})

export default rootReducer;