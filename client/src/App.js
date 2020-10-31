import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppProvider } from './AppContext'
import Home from './Home'
import Diet from './Diet'
import DietComplete from './DietComplete'
import './App.css'

const App = () => {

  return (
    <AppProvider>
      <div className="App">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/diet/complete" component={DietComplete} />
                <Route exact path="/diet/:id" component={Diet} />
              </Switch>
            </Router>
      </div>
    </AppProvider>
  )
}
export default App
