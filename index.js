const express = require('express'); // allows server creation
const app = express();
const expressLayouts = require('express-ejs-layouts'); // allows default layout for server side views.
const mongoose = require('mongoose'); // for database
const articleRouter = require('./routes/articles')

app.use(expressLayouts) // allows for mainLayouts/partials/EJS
app.use(express.static('public')); // allows for dynamic pathing into static files

 
// View Engine configuration
app.set('view engine', 'ejs') // Looks in view folder for templates to tender, enables static files.
app.set('views', './public/views');
app.set('layout', './layouts/mainLayout')

 
// Routing functions 
app.use('/', articleRouter) /** allows the use of a routerFile which lends well to ergonomic 
and modular code*/  



const PORT = 5000;
app.listen(PORT, () => console.log(`Live on port ${PORT}`));

















































// app.get('/', (req, res, next) => {
//   const articles = [{
//   title: 'Title',
//   snippet: 'lorem ipsum dolor sit amet, consectetur adipiscing',
//   createdAt: Date.now(),
// }]
// res.render('home', {article: articles})
// });