import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../redux/github/github';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import S from './Styled';

const SearchForm = () => {
  const userRef = useRef();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.github.data.user);

  const search = () => {
    const username = userRef.current.value.trim();
    if (username.length) {
      dispatch(getUserData(username));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <S.SearchForm onSubmit={handleSubmit}>
      <p>Simply enter your GitHub username below.</p>
      <S.FormGroup>
        <input
          type="text"
          placeholder="GitHub username goes here"
          ref={userRef}
          onChange={search}
          autoFocus
        />
        {userData ? (
          <Link to={'/dashboard/'.concat(userData.login)}>
            <button type="submit">
              <FiSearch />
            </button>
          </Link>
        ) : (
          <button type="submit" disabled>
            <FiSearch />
          </button>
        )}
      </S.FormGroup>
    </S.SearchForm>
  );
};

export default SearchForm;
