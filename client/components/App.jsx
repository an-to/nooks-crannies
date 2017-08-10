import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Search from './Search'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Pegasus Booklist</h1>
      <Search />
    </div>
  </Router>
)

export default App
