import React from 'react';
import SearchForm from '../components/SearchForm';
import SuggestionBox from '../components/SuggestionBox';
import S from '../components/Styled';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <S.Homepage>
      <h1>GitHub Dashboard Generator</h1>
      <p>
        Simply enter your GitHub username and our website will create a
        dashboard with overview of your GitHub activity.
      </p>
      <SearchForm />
      <SuggestionBox />
      <Footer />
    </S.Homepage>
  );
};

export default Home;
