import styled from 'styled-components';

const theme = {
  indigo: '#4320a0',
  green: '#4caf50',
  pink: '#e91e63',
  blue: '#2196f3',
  purple: '#7755a6',
  orange: '#ff9800',
};

const colors = Object.values(theme);

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem 2rem;
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
  & > h4 a {
    color: ${theme.purple};
    text-decoration: none;
    transition: all 0.3s;
  }
  & > h4 a:hover {
    color: ${theme.blue};
  }
  & > p {
    text-align: center;
    margin: 1rem 0;
  }
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
    index === 0 ? theme.blue : index === 1 ? theme.pink : theme.green};
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
  padding: 1rem 0;
  width: 100%;
  & h3 {
    margin-bottom: 1rem;
  }
`;

const StatsCard = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => colors[props.colorIndex]};
  color: #fff;
  padding: 2rem;
  border-radius: 10px;

  & > svg {
    font-size: 4em;
    color: #fff;
    padding: 0.25rem;
    border: solid 1px #fff;
    border-radius: 8px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  & > div > span {
    font-size: 2rem;
    font-weight: 500;
  }
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

const RepoCard = styled.li`
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(150, 150, 150, 0.4);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & header {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }

  & a {
    transition: all 0.3s ease;
  }

  & a:hover {
    transform: scale(1.1);
  }

  & svg {
    color: ${() => colors[Math.floor(Math.random() * colors.length)]};
  }

  & > p {
    flex: 1;
    margin-bottom: 0.5rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.gap || 0}rem;
  padding: 0 ${(props) => props.pad || 0}rem;
`;

const Tag = styled.span`
  background-color: #8080ff;
  width: fit-content;
  color: #fff;
  border-radius: 25rem;
  padding: 0.25rem 0.5rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.pad || 0}rem;
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
  Row,
  Tag,
  Section,
  StatsCard,
};

export default S;
