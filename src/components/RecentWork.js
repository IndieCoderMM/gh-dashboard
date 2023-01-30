import React from 'react';
import S from './Styled';
import { RiGitRepositoryFill } from 'react-icons/ri';

const RecentWork = ({ recentRepo }) => {
  return (
    <S.ListContainer>
      <h3>Recent Works</h3>
      {recentRepo.map((repo) => (
        <S.RepoItem key={repo.id}>
          <a
            href={repo.html_url}
            title="View Repo"
            target="_blank"
            rel="noreferer"
          >
            <RiGitRepositoryFill />
          </a>
          <div>
            <h4>{repo.name}</h4>
            <p>{new Date(repo.pushed_at).toDateString()}</p>
          </div>
        </S.RepoItem>
      ))}
    </S.ListContainer>
  );
};

export default RecentWork;
