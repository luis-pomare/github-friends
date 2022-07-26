import { createSlice } from '@reduxjs/toolkit';

const allSlice = createSlice({
  name: 'all',
  initialState: [],
  reducers: {
    getAll(state, { payload }) {
      return payload.followers;
    },
  },
});

export const { getAll } = allSlice.actions;
export default allSlice.reducer;
