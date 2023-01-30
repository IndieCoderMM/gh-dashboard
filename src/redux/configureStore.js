import { configureStore } from '@reduxjs/toolkit';
import githubReducer from './github/github';

export default configureStore({
  reducer: {
    github: githubReducer,
  },
});
