import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillPeopleFill, BsFillStarFill } from 'react-icons/bs';
import { RiUserFollowFill, RiGitRepositoryFill } from 'react-icons/ri';
import extractData from '../utils/extractData';
import S from './Styled';

const StatsViewer = () => {
  const userData = useSelector((state) => state.github.data.user);
  const repoData = useSelector((state) => state.github.data.repo);
  if (!userData || !repoData) return null;
  const { following, followers } = userData;
  const { stars, repos } = extractData(repoData);
  return (
    <S.Row gap={1} pad={2}>
      <S.StatsCard colorIndex={0}>
        <RiGitRepositoryFill />
        <div>
          <p>Repos</p>
          <span>{repos}</span>
        </div>
      </S.StatsCard>
      <S.StatsCard colorIndex={3}>
        <BsFillStarFill />
        <div>
          <p>Stars</p>
          <span>{stars}</span>
        </div>
      </S.StatsCard>
      <S.StatsCard colorIndex={4}>
        <BsFillPeopleFill />
        <div>
          <p>Followers</p>
          <span>{followers}</span>
        </div>
      </S.StatsCard>
      <S.StatsCard colorIndex={1}>
        <RiUserFollowFill />
        <div>
          <p>Following</p>
          <span>{following}</span>
        </div>
      </S.StatsCard>
    </S.Row>
  );
};

export default StatsViewer;
