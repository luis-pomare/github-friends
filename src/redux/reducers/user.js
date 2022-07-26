import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import storedUrl from '../url';

const { url } = storedUrl;

export const getUser = createAsyncThunk(
  'user/getUser',
  async (user = 'luis-pomare') => {
    let response = await fetch(url + user);
    response = await response.json();
    return response;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, { payload }) => payload,
  },
});

export default userSlice.reducer;
