import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from 'components/NavBar'
import { CurrentUserProvider } from 'contexts/currentUser'

const App = () =>{
  return (
    <CurrentUserProvider>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </CurrentUserProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)