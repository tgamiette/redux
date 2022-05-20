import {createGlobalStyle} from "styled-components";

export const basicTheme = {
    body: "#fff",
    fontColor: "#000",
    bgDiv: "#f1eeee",
};

export const darkTheme = {
    body: "#363030",
    fontColor: "#868282",
    bgDiv: "#585555",
};


export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
  }

  h1, h2, h3, h4, h5, h6, p, small, li, a {
    color: ${props => props.theme.fontColor};
  }

  .col-sm {
    background-color: ${props => props.theme.bgDiv}
  }

  nav, textarea, input {
    background-color: ${props => props.theme.bgNav};
  }

  a, button {
    color: ${props => props.theme.fontColor};
  }
`;