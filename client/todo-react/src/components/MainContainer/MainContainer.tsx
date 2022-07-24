import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo256.png";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  max-width: 960px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h1``;
const LogoContainer = styled.div`
  padding: 2em;
  background-color: ${(props) => props.theme.switchBackground};
  border-radius: 10px;
`;

const Img = styled.img`
  width: 120px;
  transition: transform 0.7s ease-in-out;
  &:hover {
    transform: rotate(39deg);
  }
`;

const MainContainer: React.FC = ({ children }) => {
  return (
    <Main>
      <Header>
        <LogoContainer>
          <Img src={Logo} alt="logo" />
        </LogoContainer>
        <Heading>toDone</Heading>
      </Header>
      {children}
    </Main>
  );
};

export default MainContainer;
