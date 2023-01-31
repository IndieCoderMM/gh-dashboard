import React from 'react';
import { useSelector } from 'react-redux';
import extractData from '../utils/extractData';
import RecentWork from './RecentWork';
import SkillVisualizer from './SkillVisualizer';
import S from './Styled';

const UserProfile = () => {
  const userData = useSelector((state) => state.github.data.user);
  const repoData = useSelector((state) => state.github.data.repo);
  const { avatar_url, login: username, name, bio, html_url } = userData;
  const { langs } = extractData(repoData);

  return (
    <S.UserCard>
      <S.ProfileFrame radius={100}>
        <img src={avatar_url} alt="profile-pic" />
      </S.ProfileFrame>
      <h2>{name}</h2>
      <h4>
        <a
          href={html_url}
          title="Go to GitHub Profile"
          target="_blank"
          rel="noreferrer"
        >
          {username}
        </a>
      </h4>
      <p>{bio}</p>
      <SkillVisualizer langs={langs} />
      <RecentWork recentRepo={repoData.slice(0, 5)} />
    </S.UserCard>
  );
};

export default UserProfile;
