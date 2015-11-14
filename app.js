//REQUIREMENTS
var express        = require('express');
var morgan         = require('morgan');
var path           = require('path');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');

//NEW EXPRESS APP
var app = express();

//REQUIRE ROUTES
var routes = require('./config/routes.js');

//DATABASE
var databaseUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/zodiac-app';
mongoose.connect(databaseUrl);

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//PORT
app.listen(process.env.PORT || 3000);
console.log("Express is listening to localhost:3000");


