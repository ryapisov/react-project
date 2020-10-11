import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from 'components/NavBar'
import { CurrentUserProvider } from 'contexts/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'

const App = () =>{
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)