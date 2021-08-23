import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Data from "./data.json";
import {
  Form,
  GithubIcon,
  SearchInputWrapper,
  SearchIcon,
  InputText,
  SelectInputWrapper,
  Select,
  Arrow,
  Reset,
} from "./app.styled";
import Header from "./Components/Header";
import ResultCard from "./Components/ResultCard";
function App() {
  const [repositories, setRepo] = useState([]);
  const [search, setSearch] = useState("react");
  const data = Data.items;
  console.log(data);
  useEffect(() => {
    axios
      .get(`https://api.github.com/search/repositories?q=${search}`) //
      .then((res) => {
        setRepo(res.items);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    console.log(search);
    console.log(repositories);
  };

  return (
    <>
      <Header></Header>
      <Container fluid>
        <Row>
          <Col lg="12">
            <GithubIcon className="fab fa-github" />
            <SearchInputWrapper>
              <SearchIcon className="fas fa-search" onClick={handleClick} />
              <InputText
                type="text"
                placeholder="Search For Github repositories"
                value={search}
                onChange={handleChange}
              />
            </SearchInputWrapper>
          </Col>
          <Col lg="12">
            <Form>
              <SelectInputWrapper>
                <Select name="sort" id="sort">
                  <option value="sortBy">Sort by</option>
                  <option value="stars">Stars</option>
                  <option value="forks">Forks</option>
                </Select>
                <Arrow className="fas fa-chevron-down" />
              </SelectInputWrapper>
              <SelectInputWrapper>
                <Select name="order" id="order">
                  <option value="orderBy">Order by</option>
                  <option value="asc">Ascending</option>
                  <option value="des">Descending</option>
                </Select>
                <Arrow className="fas fa-chevron-down" />
              </SelectInputWrapper>
              <Reset type="reset" value="Reset" />
            </Form>
          </Col>
          {data.map((repo) => (
            <Col key={repo.id} lg="2">
              <ResultCard
                name={repo.name}
                description={repo.description}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
