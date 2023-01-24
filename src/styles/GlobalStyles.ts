import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', sans-serif;
        height: 100vh;
    }
    html {
        background-color: var(--surface-primary);
    }
    button {
        cursor: pointer;
    }
    #root {
        height: 100%;
    }
`;
