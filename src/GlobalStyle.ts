import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* transition */
    --transition:all .3s;
 
    /* font-size */
    --text-base: 1.4rem;
    --text-md: 2rem;
    --text-lg: 4.8rem;
    --text-xl: 6rem;


    /* font-weight */
    --font-normal:500;
    --font-bold: 700;

    /* colors */
    --color-red: #e62429; 
    --color-black: #151515;
    --color-white: #FFFFFF;
    --color-gray-100: #dddddd;
    --color-gray-200: #cecece;
    --color-gray-300: #bebebe;
    --color-gray-800: #525252;
    --color-gray-900: #373737;

    /* refer to root CSS variables */
    --color-text-light: var(--color-white);
    --color-text-dark: var(--color-black);
    --color-bg: var(--color-gray-100);
    --color-primary: var(--color-red);
    --color-skeleton-bg: var(--color-gray-200);
    --color-skeleton-highlight-bg: var(--color-gray-300);
    --color-skeleton-dark-bg: var(--color-gray-900);
    --color-skeleton-highlight-dark-bg: var(--color-gray-800);
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
    font-weight: var(--font-normal);
    line-height: 1.5;
    background-color: var(--color-bg);
  }

  body{
    height: 100%;
    font-family: Roboto, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
    background-color: var(--color-bg);
    font-size: var(--text-base);
  }

  img {
    max-width: 100%;
    display: block;
  } 
`;
