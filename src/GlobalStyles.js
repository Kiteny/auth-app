import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  *, *::after, *::before {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }

  button {
    padding: 0;
    margin: 0;

    background: none;
    border: none;
    
    cursor: pointer;
  }

  ul, ol {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;
