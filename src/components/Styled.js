import styled from 'styled-components';

const theme = {
  indigo: '#4320a0',
  lime: '#90c243',
  purple: '#7755a6',
  orange: '#ff9800',
};

const colors = Object.values(theme);

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const SearchForm = styled.form`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  gap: 1rem;

  & input {
    flex: 1;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-family: cursive;
  }

  & button {
    padding: 0.5rem 1rem;
    font-family: cursive;
    font-size: 1.2rem;
    background-color: goldenrod;
  }
`;

const Dashboard = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  margin: 1rem;
`;

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
`;

const ProfileFrame = styled.div`
  width: ${(props) => props.radius}px;
  height: ${(props) => props.radius}px;
  border-radius: 50%;
  border: solid 5px ${theme.indigo};
  overflow: hidden;

  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: solid 2px #fff;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 0.5rem;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ProgressCircle = styled.div`
  --progress: ${(props) => props.percent};
  --primary: ${({ index }) =>
    index === 0 ? theme.orange : index === 1 ? theme.lime : theme.purple};
  --gray: #e8e8e8;
  width: ${(props) => props.radius}px;
  height: ${(props) => props.radius}px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(
      closest-side,
      white 80%,
      transparent 0 99.9%,
      white 0
    ),
    conic-gradient(var(--primary) calc(var(--progress) * 1%), var(--gray) 0);
`;

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  border-top: solid 1px #ccc;
`;

const RepoItem = styled.li`
  font-size: 2rem;
  padding: 0.25rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  & a {
    color: ${() => colors[Math.floor(Math.random() * colors.length)]};
    transition: all 0.3s;
  }
  & a:hover {
    transform: scale(1.1);
  }
  & div {
    font-size: 0.9rem;
  }
`;

const RepoContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  background-color: aliceblue;
`;

const RepoCard = styled.li`
  padding: 0.5rem 1rem;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(150, 150, 150, 0.4);
  display: flex;
  flex-direction: column;

  & > ul {
    flex: 1;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
  }

  & ul > li {
    background-color: lightblue;
    border-radius: 2px;
    padding: 0.25rem;
  }
`;

const S = {
  PageHeader,
  SearchForm,
  Dashboard,
  UserCard,
  ProfileFrame,
  SkillContainer,
  ProgressCircle,
  ListContainer,
  RepoItem,
  RepoContainer,
  RepoCard,
};

export default S;
