var express = require('express')
var router = express.Router()

var booksDb = require('../db/books')

router.get('/', (req, res) => {
  console.log('api hit')
  let db = req.app.get('db')
  booksDb.getBooks(db)
    .then(books => {
      res.json(books)
    })
    .catch((err) => {
      res.status(500).json(err.message)
    })
})

module.exports = router
