import { createAsyncThunk, createSlice, unwrapResult } from "@reduxjs/toolkit";
import userApi from "../../../api/userApi";
import { appActions } from '../../../app';

const signUp = createAsyncThunk(
  'user/signUp',
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      await userApi.signUp(payload);
    } catch (e) {
      if (e.isAxiosError && e.response.status === 400) {
        return rejectWithValue(e.response.data);
      }

      dispatch(appActions.error(e.message))
      throw e;
    }
  }
);

const signIn = createAsyncThunk(
  'user/signIn',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const response = await userApi.signIn(email, password);
      const { data } = response;

      userApi.setAccessToken(data.access);
      userApi.setRefreshToken(data.refresh);
      userApi.setСlientId(data.client_id);
    } catch (e) {
      if (e.isAxiosError && e.response.status === 401) {
        return rejectWithValue(e.response.data);
      }
      dispatch(appActions.error(e.message))
      throw e;
    }
  }
);

const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { dispatch }) => {
    try {
      const response = await userApi.fetchUserProfile(() => {
        dispatch(logout());
      });
      return response.data;
    } catch (e) {
      dispatch(appActions.error(e.message))
      throw e;
    }
  }
);

const logout = createAsyncThunk(
  'user/logout',
  () => {
    userApi.setAccessToken('');
    userApi.setRefreshToken('');
    userApi.setСlientId('');
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
      state.errors = null;
    },
  },
  extraReducers: {
    // SignUp
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

    // SignIn
    [signIn.pending](state) {
      state.status = 'loading';
      state.errors = null;
    },
    [signIn.fulfilled](state) {
      state.status = 'success';
      state.isSignIn = true;
    },
    [signIn.rejected](state, action) {
      const { error, payload } = action;

      state.status = 'failure';

      if (error.message === 'Rejected') {
        state.errors = payload;
      } else {
        unwrapResult(action);
      }
    },

    // fetchProfile
    [fetchProfile.pending](state) {
      state.status = 'loading';
      state.errors = null;
    },
    [fetchProfile.fulfilled](state, { payload }) {
      state.status = 'success';
      state.userData = payload;
    },
    [fetchProfile.rejected](state, action) { 
      unwrapResult(action);
    },
    
    //logout
    [logout.fulfilled](state) {
      state.isSignIn = false;
      state.userData = null;
    }
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
   * @param {string} email,
   * @param {string} password,
   */
  signIn: (email, password) => signIn({ email, password }),
  logout,
  fetchProfile,
  ...userSlice.actions,
};
export const userSelectors = {
  status: (state) => state.user.status,
  errors: (state) => state.user.errors,
  isSignIn: (state) => state.user.isSignIn,
  userData: (state) => state.user.userData,
}
