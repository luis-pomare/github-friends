import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import storedUrl from '../url';

const { url, followersUrl } = storedUrl;

export const getFollowers = createAsyncThunk(
  'followers/getFollowers',
  async (user) => {
    let response = await fetch(url + user + followersUrl);
    response = await response.json();
    return response;
  },
);

const followersSlice = createSlice({
  name: 'followers',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getFollowers.fulfilled]: (state, { payload }) => payload,
  },
});

// export const { getFriends } = friendSlice.actions;
export default followersSlice.reducer;
