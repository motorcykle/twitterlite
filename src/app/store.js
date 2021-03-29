import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import tweetReducer from '../features/tweetSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    tweet: tweetReducer
  },
});
