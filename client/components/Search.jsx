import React from 'react'
import {connect} from 'react-redux'
import { doSearch } from '../actions/searchResult'

function getKeywords() {
  let keyword = document.getElementById('searchkeyword').value
  return keyword.split(' ')
}


function Search({books, dispatch }) {
  return (
    <div className='search'>
      <input id='searchkeyword' type='text' placeholder='Search' name='keyword' />
      <button onClick={() => doSearch(books, getKeywords(), dispatch) } ><i className="fa fa-search fa-3x" aria-hidden="true"></i></button>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Search)
