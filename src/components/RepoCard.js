import React from 'react';
import S from './Styled';
import { GoRepo } from 'react-icons/go';
import { BiRocket } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { TbLicense } from 'react-icons/tb';
import { MdOutlineUpdate } from 'react-icons/md';

const RepoCard = ({ repoData }) => {
  const {
    name,
    homepage,
    description,
    stargazers_count,
    html_url,
    language,
    license,
    pushed_at,
  } = repoData;
  return (
    <S.RepoCard>
      <header>
        <h4>{name}</h4>
        <a href={html_url} title="View Repo" target="_blank" rel="noreferrer">
          <GoRepo style={{ fontSize: '2em' }} />
        </a>
      </header>
      <S.Row>
        <S.Row>
          <FaStar style={{ color: 'gold', fontSize: '1.5em' }} />
          <p style={{ fontSize: '1.5em', fontWeight: 600 }}>
            {stargazers_count}
          </p>
        </S.Row>
        <S.Row>
          <MdOutlineUpdate style={{ fontSize: '1.3em' }} />
          <p>{new Date(pushed_at).toLocaleDateString()}</p>
        </S.Row>

        <S.Row>
          <TbLicense style={{ fontSize: '1.3em' }} />
          {license ? <p>{license.name}</p> : 'Unlicensed'}
        </S.Row>
      </S.Row>

      <p>{description}</p>
      <S.Row>
        <S.Tag>{language ? language : 'Plain'}</S.Tag>

        {homepage ? (
          <a href={homepage} target="_blank" rel="noreferrer">
            <BiRocket style={{ fontSize: '1.5em' }} />
          </a>
        ) : null}
      </S.Row>
    </S.RepoCard>
  );
};

export default RepoCard;
