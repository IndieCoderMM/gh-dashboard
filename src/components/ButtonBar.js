import React from 'react';
import { FaHome, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import S from './Styled';

const ButtonBar = () => {
  const copyDashboardLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
  };

  return (
    <S.ButtonContainer justify="flex-end" gap={2}>
      <button type="button" onClick={copyDashboardLink}>
        Copy Link <FaLink />{' '}
      </button>
      <Link to="/">
        <button type="button">
          Back to Home <FaHome />
        </button>
      </Link>
    </S.ButtonContainer>
  );
};

export default ButtonBar;
