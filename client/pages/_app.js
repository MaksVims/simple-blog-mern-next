import '../styles/globals.css'
import {ThemeProvider} from "styled-components";

const theme = {
  colors: {
    primary: '#3260a1',
    secondary: '#eb5050',
    blue: '#67bfff',
    white: '#fefefe',
    lightBlue: '#eef5ff',
    lightgray: '#e5e5e5',
    dark: '#222222'
  },

  radius: {
    min: '10px',
    small: '10px',
    medium: '15px',
  },

  hover: {
    shadow: `2px 6px 8px rgba(148, 174, 213, 0.4)`
  }
}

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
