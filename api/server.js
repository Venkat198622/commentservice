const express = require('express');
const bodyParser = require('body-parser');
const config  = require('./config/api.config');
const log    = require('./log');

// create express app
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
   
}).catch(err => {
    log.error('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to comments."});
});

require('./routes/comment.routes')(app);

// listen for requests
app.listen(config.serverPort, () => {
    log.info("Server is listening on port 3000");
});