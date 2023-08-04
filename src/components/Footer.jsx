import React from 'react';
import S from './Styled';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <S.Row gap={0.25}>
          <img src={Logo} alt="Logo" width={40} height={40} />
          <h2>GitDash</h2>
        </S.Row>
        <S.Row gap={1}>
          <a
            href="https://github.com/IndieCoderMM"
            target="_blank"
            rel="noreferrer"
          >
            Author
          </a>
          <a
            href="https://github.com/IndieCoderMM/gh-dashboard"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
          <a
            href="https://www.linkedin.com/in/hthantoo/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn
          </a>
        </S.Row>
      </div>
      <hr />
      <S.Row justify="space-between">
        <p>&copy; {new Date().getFullYear()} GitDash. All rights reserved.</p>
        <p>10,528 profiles generated</p>
      </S.Row>
    </S.Footer>
  );
};

export default Footer;
