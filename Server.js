const express = require('express');
const db = require('./db');
const cors = require('cors');
require('dotenv').config('./.env');

const { requestInfo } = require('./middlewares');

const routes = require('./Routes');

const path = require('path');

const App = express();
App.use(cors());
App.use(express.static('public'));

App.use(requestInfo);

App.use(express.json());
App.use('/api', routes);
App.use('/images', express.static(path.join(__dirname, 'public/images')));
App.use('/video', express.static(path.join(__dirname, 'public/videos')));

App.listen(8889, () => {
  console.log('App is running is successfully');
});
