import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import S from './Styled';

const SuggestionBox = () => {
  const userData = useSelector((state) => state.github.data.user);

  return (
    <>
      {userData ? (
        <S.SuggestionBox>
          <S.Row gap={1.5}>
            <img src={userData.avatar_url} alt="profile-pic" />
            <div>
              <h2>{userData.name}</h2>
              <h3>{userData.login}</h3>
            </div>
          </S.Row>
          <S.Row justify="space-between">
            <div style={{ textAlign: 'center' }}>
              <p>Followers</p>
              <span style={{ fontWeight: 600 }}>{userData.followers}</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p>Following</p>
              <span style={{ fontWeight: 600 }}>{userData.following}</span>
            </div>
            <Link
              to={'/dashboard/'.concat(userData.login)}
              className="primary-btn"
            >
              View
            </Link>
          </S.Row>
        </S.SuggestionBox>
      ) : null}
    </>
  );
};

export default SuggestionBox;
