import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust:100%;
    -ms-text-size-adjust:100%;
    height: 100%;
    width: 100%;
  }

  .app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
    font-size: 10px;
    font-family: Helvetica, Arial, sans-serif;

    h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 0;
      font-weight: normal;
      color: inherit;
    }
  }

  a {
    text-decoration: none;
  }


  :focus {
    outline: none;
  }
`;
