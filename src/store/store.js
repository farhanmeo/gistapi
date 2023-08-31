import { configureStore } from '@reduxjs/toolkit';
import gistReducer from '../reducers/gistSlice'; 

const store = configureStore({
  reducer: {
    gists: gistReducer,
  },
});

export default store;
