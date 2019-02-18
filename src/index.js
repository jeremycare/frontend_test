import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Demo } from './pages/Demo'
import { Popup } from './pages/Popup'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/popup" component={Popup} />
    </Switch>
  </Router>
)

render(<App />, document.getElementById('root'))
