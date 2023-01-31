import React from 'react';
import { useSelector } from 'react-redux';
import RepoCard from './RepoCard';
import S from './Styled';

const RepoViewer = () => {
  const repoData = useSelector((state) => state.github.data.repo);
  if (!repoData) return null;
  const popularRepos = [...repoData];
  popularRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  return (
    <S.Section pad={0.5}>
      <h2 style={{ marginLeft: '1rem' }}>Popular Projects</h2>
      <S.RepoContainer>
        {popularRepos.slice(0, 4).map((repo) => (
          <RepoCard key={repo.id} repoData={repo} />
        ))}
      </S.RepoContainer>
    </S.Section>
  );
};

export default RepoViewer;
