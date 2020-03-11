'use strict';

// -- Base depedencies
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000 || 8081;

// -- Express configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// -- Path
const indexPath = path.join('index.html');

// -- Endpoint
app.get('/', (req, res) => {
  res.status(200).sendFile(indexPath);
});

app.get('/hello', (req, res) => {
  res.status(418).send('Hello World');
});

// -- PORT Listen
app.listen(PORT, () => {
  console.log(`You have awaken Son of Anton, on ${PORT}`);
});
