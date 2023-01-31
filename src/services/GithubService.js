import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const getUser = (username) =>
  http.get(`/users/${username}`, {
    params: {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
    },
  });

const getRepos = (username) =>
  http.get(`/users/${username}/repos`, {
    params: {
      per_page: 100,
      sort: 'pushed',
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
    },
  });

const GithubService = { getUser, getRepos };

export default GithubService;
