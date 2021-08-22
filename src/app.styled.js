import styled from "styled-components";
export const Icon = styled.i`
  color: rgba(0, 0, 0, 0.5);
`;
export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin: 0;
`;

export const GithubIcon = styled.i`
  font-size: 250px;
  display: block;
  margin-bottom: 40px;
  text-align: center;
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  display: block;
  padding: 8px 10px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(Icon)`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 8px;
`;

export const InputText = styled.input`
  border: none;
  color: #333;
  font-size: 14px;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
    color: #aaa;
  }
`;
export const Form = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SelectInputWrapper = styled(SearchInputWrapper)`
  padding: 4px 8px;
  max-width: 200px;
  justify-content: space-between;
  margin: 30px 20px 30px 0;
`;

export const Arrow = styled(Icon)`
  font-size: 14px;
`;

export const Select = styled.select`
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  color: #aaa;
  cursor: pointer;
  width: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 8px;
  &:focus {
    outline: none;
  }
  &::-ms-expand {
    display: none;
  }
`;

export const Reset = styled.input`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  font-weight: 700;
  font-size: 14px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.3s ease all;
  &:hover {
    border-color: rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.1);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 18px;
    margin: 0 0 10px 0;
  }
  p {
    margin: 0 0 40px 0;
    color: #aaa;
  }
`;

export const CardInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const CardInfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 20px;
  i {
    display: block;
    color: #aaa;
    margin-right: 5px;
  }
`;
