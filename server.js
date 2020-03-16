'use strict';

// -- Base depedencies
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000 || 8080;

// -- Express configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// -- Path
const indexPath = path.join('index.html');

// -- Cors Middleware

// -- Endpoint
app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );

  res.status(200).sendFile(indexPath);
});

app.get('/hello', (req, res) => {
  res.status(418).send('Hello World');
});

// -- PORT Listen
app.listen(PORT, () => {
  console.log(`You have awaken Son of Anton, on ${PORT}`);
});
