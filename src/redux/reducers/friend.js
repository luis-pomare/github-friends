import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import storedUrl from '../url';

const { url } = storedUrl;

export const getFriend = createAsyncThunk(
  'friend/getFriend',
  async (friend) => {
    let response = await fetch(url + friend);
    response = await response.json();
    return response;
  },
);

const friendSlice = createSlice({
  name: 'friend',
  initialState: {},
  reducers: {},
  extraReducers: {
    [getFriend.fulfilled]: (state, { payload }) => payload,
  },
});

export default friendSlice.reducer;
