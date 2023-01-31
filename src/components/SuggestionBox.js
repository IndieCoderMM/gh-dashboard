import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SuggestionBox = () => {
  const userData = useSelector((state) => state.github.data.user);

  return (
    <>
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <h3>{userData.login}</h3>
          <Link to={'/dashboard/'.concat(userData.login)}>Go to Dashboard</Link>
        </div>
      ) : null}
    </>
  );
};

export default SuggestionBox;
