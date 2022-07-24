import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as SunIcon } from "../../assets/sun.svg";
library.add(fas);

interface Props {
  toggleTheme: ToggleTheme;
}

const moonLookup: IconLookup = { prefix: "fas", iconName: "moon" };
const moonIconDefinition: IconDefinition = findIconDefinition(moonLookup);

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: end;
  padding: 1em;
  flex-direction: row;
  border-bottom: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.body};
`;

const Button = styled.button`
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  border: 1px solid ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.switchBackground};
  transition: border-color 0.25s, background-color 0.25s;
  cursor: pointer;
`;

const TranslateContainer = styled.span`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.body};
  transform: ${(props) =>
    props.theme.name === "dark" ? "translate(18px)" : undefined};
  transition: background-color 0.25s, transform 0.25s;
`;
const Span = styled.span`
  position: absolute;
  top: 0px;
  left: 3px;
  width: 12px;
  height: 12px;
  color: ${(props) => props.theme.switchIcon};

  .svg-inline--fa {
    height: 100%;
    vertical-align: unset;
  }
`;
const IconContainer = styled.span`
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
`;

const SunContainer = styled(Span)`
  opacity: ${(props) => (props.theme.name === "light" ? 1 : 0)};
`;
const MoonContainer = styled(Span)`
  opacity: ${(props) => (props.theme.name === "dark" ? 1 : 0)};
`;

const NavBar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Nav>
      <Button
        type="button"
        role="switch"
        aria-label="toggle dark mode"
        onClick={toggleTheme}
      >
        <TranslateContainer>
          <IconContainer>
            <SunContainer>
              <SunIcon></SunIcon>
            </SunContainer>
            <MoonContainer>
              <FontAwesomeIcon icon={moonIconDefinition} />
            </MoonContainer>
          </IconContainer>
        </TranslateContainer>
      </Button>
    </Nav>
  );
};

export default NavBar;
