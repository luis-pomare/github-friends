import { createSlice } from '@reduxjs/toolkit';

function extractAll(state) {
  const { followings, followers } = state;
  const conections = [...followers, ...followings];
  return conections;
}

const allSlice = createSlice({
  name: 'all',
  initialState: [],
  reducers: {
    getAll(state, { payload }) {
      return extractAll(payload);
    },
  },
});

export const { getAll } = allSlice.actions;
export default allSlice.reducer;
