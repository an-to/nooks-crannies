import {
  UPDATE_SEARCHRESULT
} from './index'


export const doSearch = (books, keywords, dispatch) => {
  let searchResult = books.filter((book) => {
console.log(book);
    let isFound = keywords.map((keyword) => {
        return (book.title.includes(keyword) ||
          book.author.first_name.includes(keyword) ||
          book.author.last_name.includes(keyword) ||
          book.genre.includes(keyword))
      })
      .reduce((isFound, searches) => {
        return isFound |= searches
      }, false)

    return isFound && book
  })

  dispatch(setSearchResult(searchResult))
}

export const setSearchResult = (foundBooks) => {
  return {
    type: UPDATE_SEARCHRESULT,
    foundBooks
  }
}
