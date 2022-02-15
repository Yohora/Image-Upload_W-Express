
const express = require('express') 
const router = express.Router()  /** allows to create views through router */
const Article = require('../models/articleModel');
const mongoose = require('mongoose'); // for database


router.get('/new', (req, res, next) => {
  res.render('articles/new', {title: "Yohora | Create"})

}); 



router.post('/new', (req, res,) => {
  
})



module.exports = router;














