import styled from 'styled-components';

const theme = {
  indigo: '#4320a0',
  green: '#4caf50',
  pink: '#e91e63',
  blue: '#2196f3',
  purple: '#7f56d9',
  orange: '#ff9800',
};

const colors = Object.values(theme);

const device = {
  mobile: `(max-width: 768px)`,
  desktop: `(min-width: 768px)`,
};

// Homepage & Search box

const Homepage = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f9fafb;
  padding: 1rem;

  & > header {
    width: 100%;
    margin: 0 auto 1rem;
    border-radius: 999px;
    background-color: #1b152b;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  }

  & > header h1 {
    font-weight: 700;
    font-size: 1.5rem;
  }

  @media ${device.desktop} {
    padding: 1rem 10rem;

    & > header {
      width: 90%;
      padding: 0.5rem 1.5rem;
    }

    & > header h1 {
      font-size: 2rem;
    }
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;

  & h2 {
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1.1em;
    margin-bottom: 1rem;
  }

  & p {
    color: #7a7d9c;
    font-size: 1.2rem;
  }

  @media ${device.desktop} {
    padding: 1rem 3rem;
    width: 90%;

    & h2 {
      font-size: 3rem;
    }
  }
`;

const SearchForm = styled.form`
  margin: 1rem auto;
  width: 100%;

  & p {
    text-align: center;
    color: #7a7d9c;
    margin-bottom: 1rem;
  }

  @media ${device.desktop} {
    max-width: 600px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  border: solid 1px #ccc;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16),
    0px 2px 5px 0px rgba(103, 110, 118, 0.08);
  padding: 0.75rem 1rem;

  & input {
    flex: 1;
    height: 100%;
    font-size: 1.2rem;
    font-family: 'Latos', sans-serif;
    border: none;
    background: none;
  }

  & input:focus {
    outline: none;
  }

  & input::placeholder {
    font-family: 'Latos', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #ccc;
  }

  & button {
    flex-shrink: 0;
    width: 1.5em;
    height: 1.5em;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    background: transparent;
    border: solid 1px #ccc;
    color: ${theme.purple};
    transition: all 0.3s ease;
  }

  & button:not(:disabled):hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 8px -5px #ccc5;
    cursor: pointer;
  }

  @media ${device.desktop} {
    & input {
      font-size: 1.3rem;
    }

    & input::placeholder {
      font-size: 1.3rem;
    }
  }
`;

const SuggestionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  color: ${theme.purple};
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.06),
    0px 4px 8px -2px rgba(16, 24, 40, 0.1);

  & img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
  }

  & h2 {
    font-weight: 700;
  }

  & a {
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;
    background-color: ${theme.purple};
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

const Footer = styled.footer`
  margin-top: auto;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
  }

  & a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
  }

  & a:hover {
    text-decoration: underline;
  }

  @media ${device.desktop} {
    padding: 4rem;

    & > div {
      flex-direction: row;
    }
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
  Hero,
  SearchForm,
  SuggestionBox,
  FormGroup,
  ButtonContainer,
  Footer,
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
