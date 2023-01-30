import React from 'react';
import S from './Styled';

const RepoCard = ({ repoData }) => {
  const { id, name, homepage, description, stargazers_count, topics } =
    repoData;
  return (
    <S.RepoCard key={id}>
      <h3>
        {name}
        <span> ⭐ {stargazers_count}</span>
      </h3>
      <h4>
        <a href={homepage} target="_blank" rel="noreferrer">
          Live Demo 🚀
        </a>
      </h4>
      <p>{description}</p>

      <ul>
        {topics.map((t) => (
          <li key={t + id}>{t}</li>
        ))}
      </ul>
    </S.RepoCard>
  );
};

export default RepoCard;
