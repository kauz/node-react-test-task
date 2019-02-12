let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');


let app = express();
let options = require('./knexfile').development;
let knex = require('knex')(options);

app.use(cors({origin: 'http://localhost:3001'}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('./controllers')(app ,knex);

module.exports = app;
