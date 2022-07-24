import { createSlice } from '@reduxjs/toolkit';

const friendSlice = createSlice({
  name: 'friends',
  initialState: [],
  reducers: {
    getFriends(state, action) {
      return action.payload;
    },
  },
});

export const { getFriends } = friendSlice.actions;
export default friendSlice.reducer;
