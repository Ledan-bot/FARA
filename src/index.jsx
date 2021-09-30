import React from 'react';
import { render } from 'react-dom';
import './assets/main.css'
import App from './app.jsx'

import { BrowserRouter as Router } from 'react-router-dom'

render (
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)


















// ReactDOM.render(<App />, document.getElementById('app'));