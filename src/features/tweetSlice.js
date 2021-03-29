import { createSlice } from '@reduxjs/toolkit';
import Axios from '../Axios';

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState: {
    hometweets: [],
    tweets: []
  },
  reducers: {
    setHomeTweets: (state, action) => {state.hometweets = action.payload},
    setTweets: (state, action) => {state.tweets = action.payload},
    removeHomeTweets: (state) => {state.hometweets = []},
    removeTweets: state => {state.tweets = []}
  },
});

export const { setHomeTweets, setTweets, removeHomeTweets, removeTweets } = tweetSlice.actions;

export const createTweet = tweetData => async (dispatch, getState) => {
  try {
    const { name, username, _id, profileImage } = getState().app.user;
    await Axios.post(`/api/tweets/create`, {
      user: { name, username, _id, profileImage },
      text: tweetData.text,
      tweetType: tweetData.type || {type: 'normal', data: {}}
    }, {
      headers: { authorization: `Bearer ${getState().app.token}` }
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchHometweets = () => async (dispatch, getState) => {
  try {
    const hometweetsRes = await Promise.all(getState().app.user.following?.map( async username => {
      return await Axios.get(`/api/tweets/all/${username}`, { headers: { 'authorization': `Bearer ${getState().app.token}`}})
    }))
    let hometweets = [];
    hometweetsRes.forEach(user => hometweets = [...hometweets, ...user.data]);
    dispatch(setHomeTweets(hometweets));
  } catch (error) {
    console.error(error)
  }
};

export const fetchTweets = (username) => async (dispatch, getState) => {
  try {
    const tweetsRes = await Axios.get(`/api/tweets/all/${username}`, {
      headers: { authorization: `Bearer ${getState().app.token}` }
    });
    dispatch(setTweets(tweetsRes.data))
  } catch (error) {
    console.error(error)
  }
};

export const likeOrRetweet = ({ type, tweet }) => async (dispatch, getState) => {
  try {
    await Axios.patch(`/api/tweets/inc/${tweet._id}/${type}`, {
      username: getState().app.user.username,
    }, {
      headers: { authorization: `Bearer ${getState().app.token}` }
    });
    if (type === 'retweeters') dispatch(createTweet({ text: tweet.text, type: {type: 'retweet', data: { originalTweet: { user: tweet.user, _id: tweet._id } }} }))
    
  } catch (error) {
    console.error(error)
  }
};

export const unlikeOrUnRetweet = ({ type, tweet }) => async (dispatch, getState) => {
  try {
    await Axios.patch(`/api/tweets/dec/${tweet._id}/${type}`, {
      username: getState().app.user.username,
    }, {
      headers: { authorization: `Bearer ${getState().app.token}` }
    });
    if (type === 'retweeters') {
      await Axios.delete(`/api/tweets/deleteretweet/${tweet._id}/${getState().app.user._id}`, {
        headers: { authorization: `Bearer ${getState().app.token}` }
      })
    }
    
  } catch (error) {
    console.error(error)
  }
};


// export const likeOrRetweet = ({ type, tweet }) => {
//   return async (dispatch, getState) => {
//     try { // HERE WE ARE BROSKI!!!!!!!!!!
//       await axios.patch(`/tweets/inc/${tweet._id}/${type}`, {
//         username: getState().userSlice.user.username,
//       }, {
//         headers: { authorization: `Bearer ${getState().userSlice.token}` }
//       });
//       if (type === 'retweet') dispatch(createTweet({ text: tweet.text, type: 'retweet' }))
//       dispatch(fetchHometweets())
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

export const selectHomeTweets = state => state.tweet.hometweets;
export const selectTweets = state => state.tweet.tweets;

export default tweetSlice.reducer;
