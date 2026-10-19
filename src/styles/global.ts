import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-padding-top: 80px;
    }

    @media (prefers-reduced-motion: no-preference) {
        html {
            scroll-behavior: smooth;
        }
    }

    :focus-visible {
        outline: 2px solid ${(props) => props.theme['green-300']};
        outline-offset: 3px;
    }

    body {
        background-color: ${(props) => props.theme.bg};
        color: ${(props) => props.theme.text};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    h1, h2, h3, h4 {
        font-family: 'Syne', 'Inter', sans-serif;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    [data-reveal] {
        opacity: 0;
        transform: translateY(16px);
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;
    }

    [data-reveal].is-visible {
        opacity: 1;
        transform: none;
    }

    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation: none !important;
            transition: none !important;
        }
    }
`
