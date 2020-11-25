import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from '../features/user'
import { appReducer } from './_appSlice_';

export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});
