import React, { useEffect } from 'react';
import S from '../components/Styled';
import UserProfile from '../components/UserProfile';
import RepoViewer from '../components/RepoViewer';
import StatsViewer from '../components/StatsViewer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../redux/github/github';
import ButtonBar from '../components/ButtonBar';

const Dashboard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.github.status);
  useEffect(() => {
    if (status !== 'success') dispatch(getUserData(params.username));
  }, [params, status, dispatch]);

  return (
    <S.Dashboard>
      <UserProfile />
      <S.Section>
        <StatsViewer />
        <RepoViewer />
        <ButtonBar />
      </S.Section>
    </S.Dashboard>
  );
};

export default Dashboard;
