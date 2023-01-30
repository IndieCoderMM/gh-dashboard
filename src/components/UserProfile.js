import React from 'react';

const UserProfile = ({ data, meta }) => {
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
    <div>
      <img src={avatar_url} width={80} height={80} alt="profile-pic" />
      <h2>
        <a href={html_url} target="_blank" rel="noreferrer">
          {username}
        </a>
      </h2>
      <h4>{name}</h4>
      <h3>
        <p>
          Followers: <span>{followers}</span>
        </p>
        <p>
          Following: <span>{following}</span>
        </p>
        <p>
          Stars: <span>{stars}</span>
        </p>
        <p>
          Repos: <span>{repos}</span>
        </p>
        <p>
          Languages:
          {langs.map((l) => {
            return l !== 'null' ? <span key={l}>{l}; </span> : null;
          })}
        </p>
      </h3>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;
