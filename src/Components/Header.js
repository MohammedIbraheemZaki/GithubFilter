import React from "react";
import { MainHeader, Title } from "../app.styled";
const Header = (props) => {
  return (
    <MainHeader>
      <Title>Github Search App</Title>
      {props.children}
    </MainHeader>
  );
};

export default Header;
