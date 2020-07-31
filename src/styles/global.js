import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background: #1B1D26;
    -webkit-font-smoothing: antialiased !important;
  }
`;
