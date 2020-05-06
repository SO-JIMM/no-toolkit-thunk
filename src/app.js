import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import PatientsPage from './pages/patients.page'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="page-container">
          <Switch>
            <Route exact path="/" component={PatientsPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
