import React from 'react';
import { useSelector } from 'react-redux';
import S from './Styled';
import UserProfile from './UserProfile';
import RepoViewer from './RepoViewer';
import extractData from '../utils/extractData';

const Dashboard = () => {
  const userData = useSelector((state) => state.github.data.user);
  const repoData = useSelector((state) => state.github.data.repo);
  const meta = extractData(repoData);

  return (
    <S.Dashboard>
      {userData ? <UserProfile data={userData} meta={meta} /> : null}
      {repoData ? <RepoViewer data={repoData} /> : null}
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
