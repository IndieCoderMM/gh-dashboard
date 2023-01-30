import React from 'react';
import RecentWork from './RecentWork';
import SkillVisualizer from './SkillVisualizer';
import S from './Styled';

const UserProfile = ({ data, meta, recentRepo }) => {
  const {
    avatar_url,
    login: username,
    name,
    bio,
    followers,
    following,
    html_url,
  } = data;
  const { stars, repos, langs } = meta;

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
      <RecentWork recentRepo={recentRepo} />
    </S.UserCard>
  );
};

export default UserProfile;
