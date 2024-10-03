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
        font-family: "Roboto Slab", serif;
        font-size: 1.6rem;
        line-height: 1.5;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;