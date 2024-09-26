import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 50%;
    }

    body {
        font-family: 'Inter', 'SVN-Poppins', Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;
    }
`;

export default GlobalStyles;