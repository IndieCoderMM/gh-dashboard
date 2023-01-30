import React from 'react';
import RepoCard from './RepoCard';
import S from './Styled';

const RepoViewer = ({ data }) => {
  const recentRepos = data.slice(0, 3);
  const popularRepos = [...data];
  popularRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
  return (
    <>
      <h2>Recent Works</h2>
      <S.RepoContainer>
        {recentRepos.map((repo) => (
          <RepoCard key={repo.id} repoData={repo} />
        ))}
      </S.RepoContainer>
      <hr />
      <h2>Popular Works</h2>
      <S.RepoContainer>
        {popularRepos.slice(0, 3).map((repo) => (
          <RepoCard key={repo.id} repoData={repo} />
        ))}
      </S.RepoContainer>
    </>
  );
};

//     {allow_forking
// :
// true
// archive_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/{archive_format}{/ref}"
// archived
// :
// false
// assignees_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/assignees{/user}"
// blobs_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/git/blobs{/sha}"
// branches_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/branches{/branch}"
// clone_url
// :
// "https://github.com/IndieCoderMM/tappy-plane.git"
// collaborators_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/collaborators{/collaborator}"
// comments_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/comments{/number}"
// commits_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/commits{/sha}"
// compare_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/compare/{base}...{head}"
// contents_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/contents/{+path}"
// contributors_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/contributors"
// created_at
// :
// "2023-01-22T12:00:30Z"
// default_branch
// :
// "main"
// deployments_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/deployments"
// description
// :
// "Mobile-first game inspired by FlappyBird. Created using ReactJS and Leaderboard API"
// disabled
// :
// false
// downloads_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/downloads"
// events_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/events"
// fork
// :
// false
// forks
// :
// 0
// forks_count
// :
// 0
// forks_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/forks"
// full_name
// :
// "IndieCoderMM/tappy-plane"
// git_commits_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/git/commits{/sha}"
// git_refs_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/git/refs{/sha}"
// git_tags_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/git/tags{/sha}"
// git_url
// :
// "git://github.com/IndieCoderMM/tappy-plane.git"
// has_discussions
// :
// false
// has_downloads
// :
// true
// has_issues
// :
// true
// has_pages
// :
// false
// has_projects
// :
// true
// has_wiki
// :
// true
// homepage
// :
// "https://tappy-plane.onrender.com"
// hooks_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/hooks"
// html_url
// :
// "https://github.com/IndieCoderMM/tappy-plane"
// id
// :
// 591934100
// is_template
// :
// false
// issue_comment_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/issues/comments{/number}"
// issue_events_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/issues/events{/number}"
// issues_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/issues{/number}"
// keys_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/keys{/key_id}"
// labels_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/labels{/name}"
// language
// :
// "JavaScript"
// languages_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/languages"
// license
// :
// {key: 'mit', name: 'MIT License', spdx_id: 'MIT', url: 'https://api.github.com/licenses/mit', node_id: 'MDc6TGljZW5zZTEz'}
// merges_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/merges"
// milestones_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/milestones{/number}"
// mirror_url
// :
// null
// name
// :
// "tappy-plane"
// node_id
// :
// "R_kgDOI0gylA"
// notifications_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/notifications{?since,all,participating}"
// open_issues
// :
// 1
// open_issues_count
// :
// 1
// owner
// :
// {login: 'IndieCoderMM', id: 72640048, node_id: 'MDQ6VXNlcjcyNjQwMDQ4', avatar_url: 'https://avatars.githubusercontent.com/u/72640048?v=4', gravatar_id: '', …}
// private
// :
// false
// pulls_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/pulls{/number}"
// pushed_at
// :
// "2023-01-29T06:37:30Z"
// releases_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/releases{/id}"
// size
// :
// 805
// ssh_url
// :
// "git@github.com:IndieCoderMM/tappy-plane.git"
// stargazers_count
// :
// 0
// stargazers_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/stargazers"
// statuses_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/statuses/{sha}"
// subscribers_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/subscribers"
// subscription_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/subscription"
// svn_url
// :
// "https://github.com/IndieCoderMM/tappy-plane"
// tags_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/tags"
// teams_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/teams"
// topics
// :
// (3) ['flappy-bird', 'leaderboard', 'react']
// trees_url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane/git/trees{/sha}"
// updated_at
// :
// "2023-01-25T16:17:47Z"
// url
// :
// "https://api.github.com/repos/IndieCoderMM/tappy-plane"
// visibility
// :
// "public"
// watchers
// :
// 0
// watchers_count
// :
// 0
// web_commit_signoff_required
// :
// false
// }

export default RepoViewer;
