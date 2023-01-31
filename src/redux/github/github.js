import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GithubService from '../../services/GithubService';

export const getUserData = createAsyncThunk('github/get', async (username) => {
  try {
    const userRes = await GithubService.getUser(username);
    const userData = await userRes.data;
    const repoRes = await GithubService.getRepos(username);
    const repoData = await repoRes.data;
    return { user: userData, repo: repoData };
  } catch (err) {
    console.log(err);
    return err.message;
  }
});

const initialState = {
  status: 'idle',
  data: {},
  error: '',
};

const gitSlice = createSlice({
  name: 'github',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getUserData.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'success';
        console.log(action.payload);
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export default gitSlice.reducer;
