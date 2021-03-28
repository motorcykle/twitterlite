import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    token: null
  },
  reducers: {
    setUser: (state, action) => state.user = action.payload,
    setToken: (state, action) => state.token = action.payload,
    removeToken: (state) => state.token = null,
    removeUser: state => state.user = null
  },
});

export const { setUser, setToken, removeToken, removeUser } = appSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectUser = state => state.app.user;
export const selectToken = state => state.app.token;

export default appSlice.reducer;
