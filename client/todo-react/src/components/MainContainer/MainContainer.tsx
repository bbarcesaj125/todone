import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Header = styled.header``;
const Heading = styled.h1``;

const MainContainer: React.FC = ({ children }) => {
  return (
    <Main>
      <Header>
        <Heading>toDone</Heading>
      </Header>
      {children}
    </Main>
  );
};

export default MainContainer;
