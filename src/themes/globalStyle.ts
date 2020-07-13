import { createGlobalStyle } from "styled-components";
import robotoWoff from "./fonts/roboto-v20-latin_cyrillic-regular.woff";
import robotoWoff2 from "./fonts/roboto-v20-latin_cyrillic-regular.woff2";

export const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${robotoWoff}) format('woff2'),
        url(${robotoWoff2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`;
