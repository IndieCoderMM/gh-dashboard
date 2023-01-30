import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData } from '../redux/github/github';
import S from './Styled';

const SearchForm = () => {
  const userRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = userRef.current.value.trim();
    if (username.length) {
      dispatch(getUserData(username));
    }
  };

  return (
    <S.SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by GitHub Username"
        ref={userRef}
      />
      <button type="submit">Search</button>
    </S.SearchForm>
  );
};

export default SearchForm;
