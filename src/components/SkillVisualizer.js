import React from 'react';
import S from './Styled';

const SkillVisualizer = ({ langs }) => {
  const total = Object.values(langs).reduce((s, i) => s + i, 0);

  return (
    <S.SkillContainer>
      {Object.keys(langs).map((k, i) => (
        <div key={k}>
          <S.ProgressCircle
            index={i}
            percent={(langs[k] / total) * 100}
            radius={60}
          >
            {((langs[k] / total) * 100).toFixed(0)}%
          </S.ProgressCircle>
          <p>{k}</p>
        </div>
      ))}
    </S.SkillContainer>
  );
};

export default SkillVisualizer;
