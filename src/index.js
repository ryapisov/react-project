import React from 'react'
import ReactDOM from 'react-dom'
import Routes from 'routes'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () =>{
  return (
    <div>
      <h3>Hooks</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

ReactDOM.render( 
  <React.StrictMode >
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)