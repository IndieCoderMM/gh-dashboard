import React from 'react';
import SearchForm from '../components/SearchForm';
import SuggestionBox from '../components/SuggestionBox';
import S from '../components/Styled';

const Home = () => {
  return (
    <S.Homepage>
      <h1>GitHub Dashboard Generator</h1>
      <h3>Enter GitHub Username To Create A Dashboard</h3>
      <SearchForm />
      <SuggestionBox />
    </S.Homepage>
  );
};

export default Home;
