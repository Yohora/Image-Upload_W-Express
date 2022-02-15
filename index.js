
const express = require('express'); // allows server creation
const app = express(); 

const expressLayouts = require('express-ejs-layouts'); // allows default layout for server side views.
const mongoose = require('mongoose'); // for database

const articleRouter = require('./routes/articles'); // Get router path


// // // create mongo connection
// mongoURI = 'mongodb+srv://YohoraP:Hybrid1990@cluster0.3sv0t.mongodb.net/blogs?retryWrites=true&w=majority'
// const connect = mongoose.createConnection(mongoURI, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true,
// });


// Setting up middleware
app.use(express.urlencoded({ extended: false})) // middleware, call between req & response
app.use(expressLayouts) // allows for mainLayouts/partials/EJS
app.use(express.static('public')); // allows for dynamic pathing into static files

// View Engine configuration
app.set('view engine', 'ejs') // Looks in view folder for templates to tender, enables static files.
app.set('views', './public/views');
app.set('layout', './layouts/mainLayout')


// Routing functions 
app.use('/articles', articleRouter) /** allows the use of a routerFile which lends well to ergonomic  and modular code*/  


// Main Page Render
app.get('/', (req, res) => {
  const articles = [{
    image: '/images/pepe.jpg',
    title: 'Yohora Test Article',
    snippet: 'lorem ipsum do lor sit amet, consectetur adipiscing',
    createdAt: new Date().toLocaleDateString(),
  },
  {
 
    image: '/images/pepe.jpg',
    title: 'Yohora Test Article 2',
    snippet: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    createdAt: new Date().toLocaleDateString(),


  }]
  res.render('articles/home', {articles: articles})

});



const PORT = 5000;
app.listen(PORT, (
  ) => console.log(`Live on port ${PORT}`));

















































  