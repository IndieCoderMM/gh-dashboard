import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getUserData } from '../redux/github/github';
import { FiSearch } from 'react-icons/fi';
import S from './Styled';

const SearchForm = () => {
  const userRef = useRef();
  const dispatch = useDispatch();

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
      <S.FormGroup>
        <input
          type="text"
          placeholder="Type to Search"
          ref={userRef}
          onChange={search}
          autoFocus
        />
        <button type="submit">
          <FiSearch />
        </button>
      </S.FormGroup>
    </S.SearchForm>
  );
};

export default SearchForm;
