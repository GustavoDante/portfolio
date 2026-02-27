import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['gray-800']};
    }

    body {
        background-color: ${(props) => props.theme['blue-900']};
        color: ${(props) => props.theme['gray-300']};
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

    button {
        cursor: pointer;
    }

    a {
        cursor: pointer;
    }

    strong, h1 {
        white-space: nowrap;
    }

    /* Scroll reveal animation */
    [data-reveal] {
        opacity: 0;
        transform: translateY(2rem);
        transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                    transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
    }

    [data-reveal].is-visible {
        opacity: 1;
        transform: translateY(0);
    }

    [data-reveal-delay='1'] { transition-delay: 0.1s; }
    [data-reveal-delay='2'] { transition-delay: 0.2s; }
    [data-reveal-delay='3'] { transition-delay: 0.3s; }
    [data-reveal-delay='4'] { transition-delay: 0.4s; }
    [data-reveal-delay='5'] { transition-delay: 0.5s; }
`
