import React from 'react';
import { useSelector } from 'react-redux';
import { FaMapMarkerAlt, FaBuilding, FaGlobe } from 'react-icons/fa';
import extractData from '../utils/extractData';
import RecentWork from './RecentWork';
import SkillVisualizer from './SkillVisualizer';
import S from './Styled';

const UserProfile = () => {
  const userData = useSelector((state) => state.github.data.user);
  const repoData = useSelector((state) => state.github.data.repo);
  if (!userData || !repoData) return null;
  const {
    avatar_url,
    login: username,
    name,
    bio,
    html_url,
    location,
    company,
    blog,
  } = userData;
  const { langs } = extractData(repoData);

  return (
    <S.UserCard>
      <S.ProfileFrame radius={200}>
        <img src={avatar_url} alt="profile-pic" />
      </S.ProfileFrame>
      <h2>{name}</h2>
      <h4>
        <a
          href={html_url}
          title="View GitHub Profile"
          target="_blank"
          rel="noreferrer"
        >
          {username}
        </a>
      </h4>
      <p>{bio}</p>
      <SkillVisualizer langs={langs} />
      <S.ListContainer>
        {location ? (
          <li>
            <FaMapMarkerAlt /> {location}
          </li>
        ) : null}
        {company ? (
          <li>
            <FaBuilding /> {company}
          </li>
        ) : null}
        {blog ? (
          <li>
            <FaGlobe />
            <a
              href={'https://' + blog}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: '#2196f3' }}
            >
              Portfolio Website
            </a>
          </li>
        ) : null}
      </S.ListContainer>
      <RecentWork recentRepo={repoData.slice(0, 5)} />
    </S.UserCard>
  );
};

export default UserProfile;
