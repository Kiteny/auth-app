import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    error: null,
  },
  reducers: {
    error(state, { payload }) {
      state.error = payload;
    }
  }
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
export const appSelectors = {
  error: (state) => state.app.error,
}
