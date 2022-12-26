import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    margin:0 auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  font-size: 100%;
  font-weight: 700;
}

  a {
    text-decoration: none;
  }


  input {
    outline: none;
  }
`;

export default GlobalStyle;
