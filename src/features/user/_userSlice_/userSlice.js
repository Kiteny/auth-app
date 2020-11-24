import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import userApi from "../../../api/userApi";

const signUp = createAsyncThunk(
  'user/signUp',
  async (payload, { rejectWithValue }) => {
    try {
      await userApi.signUp(payload);
    } catch (e) {
      if (e.isAxiosError && e.response.status === 400) {
        return rejectWithValue(e.response.data);
      }

      throw e;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    isSignIn: !!userApi.getRefreshToken(),
    status: 'idle',
    error: null,
  },
  reducers: {
    resetStatus(state) {
      state.status = 'idle';
    }
  },
  extraReducers: {
    [signUp.pending](state) {
      state.status = 'loading';
      state.error = null;
    },
    [signUp.fulfilled](state) {
      state.status = 'success';
    },
    [signUp.rejected](state, action) {
      const { error, payload } = action;

      state.status = 'failure';
      
      if (error.message === 'Rejected') {
        state.error = payload;
      } else {
        unwrapResult(action);
      }
    },
  }
});

export const userReducer = userSlice.reducer;
export const userActions = {
  /**
   * @param {{
   *  email: string, 
   *  password: string, 
   *  phone: string, 
   *  name: string, 
   *  surname: string
   * }} data
   */
  signUp: (data) => signUp(data),
  ...userSlice.actions,
};
export const userSelectors = {
  status: (state) => state.user.status,
}