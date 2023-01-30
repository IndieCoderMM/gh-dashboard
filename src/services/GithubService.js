import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getUser = (username) => http.get(`/users/${username}`);

const getRepos = (username) =>
  http.get(`/users/${username}/repos`, {
    params: { per_page: 100, sort: 'created: asc' },
  });

const GithubService = { getUser, getRepos };

export default GithubService;
