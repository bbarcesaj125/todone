import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryDark: string;
      primaryLight: string;
      primaryHover: string;
    };
  }
}
