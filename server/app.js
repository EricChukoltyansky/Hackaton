const express = require('express');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const morgan = require('morgan');
const namesRouter = require('./routes/names.routes.js');
const {
    ROUTES_API_PREFIX,
    ROUTES_SERVER_PREFIX,
} = require('./utils/constants');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(ROUTES_API_PREFIX, namesRouter);

module.exports = app;
