import { createGlobalStyle } from "styled-components";
interface ThemeProps {
  readonly isActive: boolean;
}

export const GlobalStyles = createGlobalStyle<ThemeProps>`
  body {
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${(props) =>
      props.isActive
        ? props.theme.colors.primaryLight
        : props.theme.colors.primaryDark};
    _height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;
