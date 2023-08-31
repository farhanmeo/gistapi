import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGists = createAsyncThunk('gists/fetchGists', async (username) => {
  if (username) {
    // Fetch gists by username
    const response = await fetch(`https://api.github.com/users/${username}/gists`);
    const data = await response.json();
    return data;
  } else {
    // Fetch all gists
    const response = await fetch('https://api.github.com/gists/public');
    const data = await response.json();
    return data;
  }
});
