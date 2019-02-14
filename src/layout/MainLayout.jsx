import React from 'react'
import { createGlobalStyle, ThemeProvider } from "styled-components"
import defaultTheme from '../themes/default'
import Header from '../components/Header'


const GlobalStyle = createGlobalStyle`
  body {
    color: red;
    margin:0;
    padding:0;
  }
  * {
      box-sizing:border-box;
  }
`


const MainLayout = ( { children } ) => {
    return (

        <ThemeProvider theme={ defaultTheme }>
            <React.Fragment>
                <GlobalStyle />
                <Header />
                <main>
                    { children }
                </main>

                <footer>

                </footer>
            </React.Fragment>
        </ThemeProvider>

    )
}

export default MainLayout
