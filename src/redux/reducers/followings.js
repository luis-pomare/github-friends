import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import storedUrl from '../url';

const { url, followingUrl } = storedUrl;

export const getFollowings = createAsyncThunk(
  'followings/getFollowings',
  async (user = 'luis-pomare') => {
    let response = await fetch(url + user + followingUrl);
    response = await response.json();
    return response;
  },
);

const followingsSlice = createSlice({
  name: 'followings',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getFollowings.fulfilled]: (state, { payload }) => payload,
  },
});

export default followingsSlice.reducer;
