// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
let comments = [];

// Create a route that returns comments array
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route that adds a comment to the comments array
app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.status(201).send();
});

// Start web server
app.listen(port, () => {
  console.log(`Web server is listening on http://localhost:${port}`);
});