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

const signIn = createAsyncThunk(
  'user/signIn',
  async ({email, password}, { rejectWithValue }) => {
    try {
      await userApi.signIn(email, password);
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
    errors: null,
  },
  reducers: {
    resetStatus(state) {
      state.status = 'idle';
    }
  },
  extraReducers: {
    [signUp.pending](state) {
      state.status = 'loading';
      state.errors = null;
    },
    [signUp.fulfilled](state) {
      state.status = 'success';
    },
    [signUp.rejected](state, action) {
      const { error, payload } = action;

      state.status = 'failure';

      if (error.message === 'Rejected') {
        state.errors = payload;
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
  /**
   * @param {string} email
   * @param {password} email
   */
  signIn: (email, password) => signIn({ email, password }),
  ...userSlice.actions,
};
export const userSelectors = {
  status: (state) => state.user.status,
  errors: (state) => state.user.errors,
}