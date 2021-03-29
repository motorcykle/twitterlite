import { createSlice } from '@reduxjs/toolkit';
import Axios from '../Axios';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    token: null
  },
  reducers: {
    setUser: (state, action) => {state.user = action.payload},
    setToken: (state, action) => {state.token = action.payload},
    removeToken: (state) => {state.token = null},
    removeUser: state => {state.user = null},
  },
});

export const { setUser, setToken, removeToken, removeUser } = appSlice.actions;

export const login = userData => async dispatch => {
  try {
    const loginRes = await Axios.post('/api/users/login', userData);
    dispatch(setUser(loginRes.data.user))
    dispatch(setToken(loginRes.data.token))
  } catch (error) {
    console.error(error);
  }
};

export const followUser = username => async (dispatch, getState) => {
  try {
    await Axios.patch(`/api/users/follow/following/${getState().app.user.username}`, {
      username
    });
    await Axios.patch(`/api/users/follow/followers/${username}`, {
      username: getState().app.user.username
    });
  } catch (error) {
    console.error(error)
  }
};

export const selectUser = state => state.app.user;
export const selectToken = state => state.app.token;

export default appSlice.reducer;
