import React from 'react'
import GlobalStyle from 'global-styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import Services from 'pages/Services'
import ScrollToTop from 'ScrollToTop'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
