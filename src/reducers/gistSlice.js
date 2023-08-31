import { createSlice } from '@reduxjs/toolkit';
import { fetchGists } from '../actions/gistActions';

const initialState = {
  gists: [],
  loading: false,
};

const gistSlice = createSlice({
  name: 'gists',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGists.pending, state => {
        state.loading = true;
      })
      .addCase(fetchGists.fulfilled, (state, action) => {
        state.gists = action.payload;
        state.loading = false;
      })
      .addCase(fetchGists.rejected, state => {
        state.loading = false;
      });
  },
});

export default gistSlice.reducer;
