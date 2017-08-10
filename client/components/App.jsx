import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import BookList from './BookList'


const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Pegasus Booklist</h1>
      <Route exact path='/' component={BookList}/>

    </div>
  </Router>
)

export default App
