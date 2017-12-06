var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//{useMongoClient: true}
var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel.js');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', function(req, res){
    res.send('Welcome to my webAPI, ooooo shiiiiiiiiiit.');
});

app.listen(port, function(){
    console.log('Gulp is running my app on PORT: ' + port);
});