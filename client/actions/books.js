import request from 'superagent'

import {
  RECEIVE_BOOKS
} from './index'

export const receiveBooks = (books) => {
  return {
    type: RECEIVE_BOOKS,
    books
  }
}

export function getBooks() {
  return (dispatch) => {
    request
      .get('api/books')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        let books = res.body
        dispatch(receiveBooks(books))
      })
  }
}

export function singleBook(id) {
  return (dispatch) => {
    request
      .get('api/books/' + id)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        let books = res.body
        dispatch(receiveBooks(books))
      })
  }
}
