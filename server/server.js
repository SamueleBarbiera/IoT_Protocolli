const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 9000;
const app = express();

require('dotenv').config();
require("./db/mongodb.js")();
app.use(cors());
app.use(express.json());
app.set('view engine', 'html');
app.use('/', require('./routes/drones'));
app.listen(port);
console.log(`Listening On http://localhost:${port}/drones`);

module.exports = app;
