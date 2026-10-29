import { createGlobalStyle } from 'styled-components'
// createGlobalStyle: 전역 스타일 지정

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--app-bg);
    color: var(--app-text);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, select, textarea {
    font: inherit;
  }
`
export default GlobalStyle