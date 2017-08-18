var express = require('express')
var router = express.Router()

var booksDb = require('../db/books')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  booksDb.getBooks(db)
    .then(books => {
      res.json(books)
    })
    .catch((err) => {
      res.status(500).json(err.message)
    })
})

router.get('/:id', (req, res) =>{
  let db = req.app.get('db')
  booksDb.singleBook(req.params.id, db)
    .then(books => {
      res.sendstatus(204)
    })
    .catch((err) => {
      res.status(500).json(err.message)
    })

});



module.exports = router
