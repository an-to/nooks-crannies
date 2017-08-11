import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import BookList from './BookList'

import {connect} from 'react-redux'
import Search from './Search'
import BooksFound from './BooksFound'
import {getBooks} from '../actions/books'



class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(getBooks())
  }

  render() {
    return (
      <Router>
        <div className='app-container'>
          <h1>Pegasus Books</h1>
          <Search />
          <Route path='/' component={BooksFound}/>
          <Route exact path='/' component={BookList}/>
        </div>
      </Router>

    )
  }
}



export default connect()(App)
