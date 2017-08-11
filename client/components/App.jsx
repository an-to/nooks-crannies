import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import BookList from './BookList'

import { connect } from 'react-redux'
import Search from './Search'
import BooksFound from './BooksFound'
import { getBooks } from '../actions/books'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getBooks())
  }

  render() {
    return (
      <Router>
        <div className='app-container'>
          <div className='header'>
            <i class="fa fa-book" aria-hidden="true"></i>
            <h1 className='title'>Pegasus Books</h1>
            <Search />
          </div>
          <Route exact path='/' component={BookList} />
          <Route path='/' component={BooksFound} />
        </div>
      </Router>

    )
  }
}



export default connect()(App)
