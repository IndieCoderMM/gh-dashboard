import React, { useEffect } from 'react';
import S from '../components/Styled';
import UserProfile from '../components/UserProfile';
import RepoViewer from '../components/RepoViewer';
import StatsViewer from '../components/StatsViewer';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../redux/github/github';
import { FaHome, FaLink } from 'react-icons/fa';

const Dashboard = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.github.status);
  useEffect(() => {
    if (status !== 'success') dispatch(getUserData(params.username));
  }, [params, status, dispatch]);

  const copyDashboardLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
  };
  return (
    <S.Dashboard>
      <UserProfile />
      <S.Section>
        <StatsViewer />
        <RepoViewer />
        <S.ButtonContainer justify="flex-end" gap={2}>
          <Link to="/">
            <button type="button">
              Back to Home <FaHome />
            </button>
          </Link>
          <button type="button" onClick={copyDashboardLink}>
            Copy Link <FaLink />{' '}
          </button>
        </S.ButtonContainer>
      </S.Section>
    </S.Dashboard>
  );
};

// {
//   avatar_url: 'https://avatars.githubusercontent.com/u/72640048?v=4';
//   bio: 'Full-stack developer who dabbles in game dev on the side. Always seeking new opportunities to apply my skills. Stack: Node, React, Python, Django, Bootstrap';
//   blog: 'indiecodermm.github.io/hthant-portfolio/';
//   company: '@microverseinc ';
//   created_at: '2020-10-10T03:53:02Z';
//   email: null;
//   events_url: 'https://api.github.com/users/IndieCoderMM/events{/privacy}';
//   followers: 32;
//   followers_url: 'https://api.github.com/users/IndieCoderMM/followers';
//   following: 41;
//   following_url: 'https://api.github.com/users/IndieCoderMM/following{/other_user}';
//   gists_url: 'https://api.github.com/users/IndieCoderMM/gists{/gist_id}';
//   gravatar_id: '';
//   hireable: null;
//   html_url: 'https://github.com/IndieCoderMM';
//   id: 72640048;
//   location: 'Myanmar';
//   login: 'IndieCoderMM';
//   name: 'Hein Thant';
//   node_id: 'MDQ6VXNlcjcyNjQwMDQ4';
//   organizations_url: 'https://api.github.com/users/IndieCoderMM/orgs';
//   public_gists: 0;
//   public_repos: 47;
//   received_events_url: 'https://api.github.com/users/IndieCoderMM/received_events';
//   repos_url: 'https://api.github.com/users/IndieCoderMM/repos';
//   site_admin: false;
//   starred_url: 'https://api.github.com/users/IndieCoderMM/starred{/owner}{/repo}';
//   subscriptions_url: 'https://api.github.com/users/IndieCoderMM/subscriptions';
//   twitter_username: null;
//   type: 'User';
//   updated_at: '2023-01-26T13:21:59Z';
//   url: 'https://api.github.com/users/IndieCoderMM';
// }

export default Dashboard;
