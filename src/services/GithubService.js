import axios from 'axios';

const GITHUB_ACCESS_TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

const http = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `token ${GITHUB_ACCESS_TOKEN}`,
  },
});

const getUser = (username) => http.get(`/users/${username}`);

const getRepos = (username) =>
  http.get(`/users/${username}/repos`, {
    params: {
      per_page: 100,
      sort: 'pushed',
    },
  });

const GithubService = { getUser, getRepos };

export default GithubService;
