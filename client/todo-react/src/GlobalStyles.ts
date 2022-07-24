import { createGlobalStyle } from "styled-components";

interface Props {
  theme: Theme;
}

export const GlobalStyles = createGlobalStyle<Props>`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    _height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: "Albert Sans", Helvetica, Arial, sans-serif;
    font-size: 16px;
    transition: all 0.50s linear;
  }
`;
