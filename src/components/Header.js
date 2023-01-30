import React from 'react';
import S from './Styled';
import SearchForm from './SearchForm';

const Header = () => {
  return (
    <S.PageHeader>
      <h1>GhDash</h1>
      <SearchForm />
    </S.PageHeader>
  );
};

export default Header;
