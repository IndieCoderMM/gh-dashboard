import React from 'react';
import SearchForm from '../components/SearchForm';
import SuggestionBox from '../components/SuggestionBox';
import S from '../components/Styled';
import Footer from '../components/Footer';
import { BsGithub } from 'react-icons/bs';
import Logo from '../assets/logo.png';

const Home = () => {
  return (
    <>
      <S.Homepage>
        <header>
          <S.Row gap={0.25}>
            <img src={Logo} alt="Logo" width={40} height={40} />
            <h1>GitDash</h1>
          </S.Row>
          <a
            href="https://github.com/IndieCoderMM/gh-dashboard"
            target="_blank"
            rel="noreferrer"
            title="source code"
            className="primary-btn"
          >
            <BsGithub />
            GitHub
          </a>
        </header>
        <S.Hero>
          <h2>Visualize Your GitHub Contributions</h2>
          <p>
            Our platform transforms your GitHub data into a beautifully designed
            dashboard.
          </p>
        </S.Hero>
        <section>
          <SearchForm />
          <SuggestionBox />
        </section>
      </S.Homepage>
      <Footer />
    </>
  );
};

export default Home;
