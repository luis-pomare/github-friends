import { createSlice } from '@reduxjs/toolkit';

function extractAll(state) {
  const { followings, followers } = state;
  let conections = [...followers, ...followings];
  conections = conections.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id),
  );
  return conections;
}

const allSlice = createSlice({
  name: 'all',
  initialState: [],
  reducers: {
    getAll(state, { payload }) {
      return extractAll(payload);
    },
    clearAll() {
      return [];
    },
  },
});

export const { getAll, clearAll } = allSlice.actions;
export default allSlice.reducer;
