const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


// set template engine
app.set('view engine', 'pug');


// require lib modules
const runConsoleMsg = require('./lib/consoleMsg.js');

// middleware for parsing http payloads
app.use(express.urlencoded());


// static server 
app.use('/static', express.static('public'));


// import and use routes
const routes = require('./routes/routes.js');
app.use('/', routes);


// run http server
app.listen(port, runConsoleMsg(8000, 500));





