import { createGlobalStyle } from 'styled-components';

import bgImage from 'presentation/assets/bg.jpg';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    font-family: 'Open Sans';
  }

  html {
    -ms-overflow-style: scrollbar;
  }

  #root,
  html,
  body {
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222;
    background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(32,0,3,1) 100%), url('${bgImage}');
    background-attachment: fixed;
    background-position: center center;
  }

  a,
  p,
  span,
  label,
  div,
  b,
  i,
  strong,
  ul,
  li,
  input,
  textarea,
  select,
  td,
  th,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6  {
    font-weight: 400;
  }

  b,
  strong {
    font-weight: 700;
  }

  input ,
  select {
    appearance: none;
  }

  ul {
    list-style: none;
  }
`;
