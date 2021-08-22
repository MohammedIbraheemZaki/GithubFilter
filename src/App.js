import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Container, Row, Col } from "styled-bootstrap-grid";
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
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.github.com/search/repositories?q=10/${search}`)
      .then((res) => {
        setRepo(res.data);
      })
      .catch((err) => console.log(err));
  });
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    console.log(search);
  };

  return (
    <>
      <Header></Header>
      <Container>
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
          <Col lg="3">
            <ResultCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
