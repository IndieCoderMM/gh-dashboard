import React from 'react';
import S from './Styled';
import { FaReact } from 'react-icons/fa';
import { BsPersonCircle, BsGithub } from 'react-icons/bs';

const Footer = () => {
  const footerStyle = {
    padding: '2rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    gap: '1rem',
    width: '100%',
  };
  const iconStyle = { fontSize: '2em', color: '#fff' };
  return (
    <footer style={footerStyle}>
      <S.Row gap={2}>
        <a
          href="https://github.com/IndieCoderMM/gh-dashboard"
          target="_blank"
          rel="noreferrer"
          title="source code"
        >
          <FaReact style={iconStyle} />
        </a>
        <a
          href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
          target="_blank"
          rel="noreferrer"
          title="API Doc"
        >
          <BsGithub style={iconStyle} />
        </a>
        <a
          href="https://github.com/IndieCoderMM"
          target="_blank"
          rel="noreferrer"
          title="author"
        >
          <BsPersonCircle style={iconStyle} />
        </a>
      </S.Row>
      <p>
        Copyright &copy; {new Date().getFullYear()} Github Dashboard Generator
      </p>
    </footer>
  );
};

export default Footer;
