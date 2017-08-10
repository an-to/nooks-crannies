import {
  combineReducers
} from 'redux'

import books from './books'
import waiting from './waiting'
import searchResult from './searchResult'

export default combineReducers({
  books,
  waiting,
  searchResult
})