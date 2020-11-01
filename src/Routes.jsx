import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Home from './Components/home'



const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arvo;
  }
  
  body, h1, ul {
    margin: 0;
    padding: 0;
  }
`

const Routes = () => {
  return (
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Switch>
              <Route path="/"><Home /></Route>
            </Switch>
        </BrowserRouter>
    </>
  )
}

export default Routes