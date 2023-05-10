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

const device = {
  mobile: `(max-width: 768px)`,
  desktop: `(min-width: 768px)`,
};

// Homepage & Search box

const Homepage = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #457fca;
  background: -webkit-linear-gradient(to right, #5691c8, #457fca);
  background: linear-gradient(to right, #5691c8, #457fca);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  & h1 {
    margin: 1rem 0;
    font-weight: 700;
    font-size: 3em;
  }

  & > p {
    font-size: 1.4rem;
  }
`;

const SearchForm = styled.form`
  padding: 1rem;
  @media ${device.desktop} {
    width: 60%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  border-radius: 20rem;
  padding: 0.5rem;

  & input {
    width: 90%;
    padding: 0.25rem 0 0 2rem;
    font-size: 1.5rem;
    font-family: 'Latos', sans-serif;
    border: none;
    background: none;
  }

  & input:focus {
    outline: none;
  }

  & input::placeholder {
    font-family: 'Latos', sans-serif;
    font-weight: 300;
    color: #ccc;
  }

  & button {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    font-size: 2em;
    background: none;
    background-color: ${theme.blue};
    border: none;
    color: #fff;
    transition: all 0.3s ease;
  }

  & button:not(:disabled):hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 8px #ccc;
  }
`;

const SuggestionBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  background-color: #fff;
  color: ${theme.indigo};
  padding: 2rem;
  border-radius: 20px;

  @media ${device.mobile} {
    padding: 1rem;
    width: 90%;
  }

  & img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
  }

  & a {
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;
    background-color: ${theme.blue};
    font-family: 'Lato', sans-serif;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s ease;
  }

  & a:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(100, 100, 100, 0.4);
  }
`;

// Dashboard

const Dashboard = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  margin: 1rem;

  @media ${device.mobile} {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
`;

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;

  @media ${device.mobile} {
    width: 100%;
  }

  & > h4 a {
    color: ${theme.orange};
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    transition: all 0.3s;
  }
  & > h4 a:hover {
    color: ${theme.blue};
  }
  & > p {
    text-align: center;
    line-height: 1.4;
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
    font-weight: 300;
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap}rem;
  padding: 0.5rem 2rem;
  --color: ${() => colors[Math.floor(Math.random() * colors.length)]};

  & button {
    padding: 1rem;
    background: #fff;
    border: solid 2px var(--color);
    color: var(--color);
    font-size: 1.5rem;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  & button:hover {
    background-color: var(--color);
    transform: translateY(-2px);
    color: #fff;
    box-shadow: 0 5px 10px rgba(100, 100, 100, 0.5);
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 0.3rem;
    margin-bottom: 1rem;

    & button,
    & a {
      width: 100%;
    }
  }
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

  & > li > svg {
    color: ${() => colors[Math.floor(Math.random() * colors.length)]};
  }

  & > li {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
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
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
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
  gap: ${(props) => props.gap || 0}rem;
  padding: 0 ${(props) => props.pad || 0}rem;
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-wrap: wrap;
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
  Homepage,
  SearchForm,
  SuggestionBox,
  FormGroup,
  ButtonContainer,
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
