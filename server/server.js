// Importing required modules
const cors = require('cors');
const express = require('express');

const port = process.env.PORT || 9000;
const app = express();

require('dotenv').config();
require("./helpers/db/mongodb.js")();
app.use(cors());
app.use(express.json());
app.set('view engine', 'html');
app.use(express.static(__dirname + '/views/'));
app.use('/api', require('./routes/api'));
app.listen(port);
console.log(`Listening On http://localhost:${port}`);

module.exports = app;
