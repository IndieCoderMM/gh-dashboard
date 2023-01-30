const extractData = (repoData) => {
  const meta = {
    stars: 0,
    langs: [],
    repos: 0,
  };
  if (!repoData) return meta;
  meta.stars = repoData.reduce((s, r) => s + r.stargazers_count, 0);
  meta.repos = repoData.length;
  meta.langs = getMostUsedLang(repoData);
  return meta;
};

const getMostUsedLang = (repoData) => {
  const languages = {};
  repoData.forEach((repo) => {
    if (Object.keys(languages).includes(repo.language))
      languages[repo.language] += 1;
    else languages[repo.language] = 1;
  });
  const sortedKeys = [
    ...Object.keys(languages).sort((a, b) => languages[b] - languages[a]),
  ];
  const mostUsed = {};
  for (let i = 0; i < 3; i++) {
    mostUsed[sortedKeys[i]] = languages[sortedKeys[i]];
  }
  return mostUsed;
};

export default extractData;
