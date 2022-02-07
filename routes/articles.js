const express = require('express') 
const router = express.Router()  /** allows to create views through router */


router.get('/', (req, res) => {
    const articles = [{
    image: '/images/pepe.jpg',
    title: 'Title',
    snippet: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    createdAt: Date(),
  }]
  res.render('home', {articles: articles})
});

router.get('/post', (req, res, next) => {
  res.render('post', {title: "Yohora | Create"})
}); 

module.exports = router;
