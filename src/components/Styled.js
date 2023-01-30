import styled from 'styled-components';

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
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 1rem 2rem;
  margin: 1rem;
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

const S = { PageHeader, SearchForm, Dashboard, RepoContainer, RepoCard };

export default S;
