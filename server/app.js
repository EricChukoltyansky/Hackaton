const express = require('express');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const cors = require('cors');
const path = require('path');

const morgan = require('morgan');
const namesRouter = require('./routes/names.routes.js');
const { ROUTES_API_PREFIX } = require('./utils/constants');

const app = express();

const publicPath = path.join(__dirname, 'build');
app.use(cors());
app.use(express.static(publicPath));

app.use(morgan('dev'));
app.use(express.json());
app.use(ROUTES_API_PREFIX, namesRouter);

module.exports = app;


// commen
