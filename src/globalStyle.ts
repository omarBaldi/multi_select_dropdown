import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    html,
    body {
        font-family: 'Lato', sans-serif;
        background-color: #222;
        color: white;
    }

    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default GlobalStyle;
