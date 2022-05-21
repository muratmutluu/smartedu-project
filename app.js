const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});
//app.get("/", (req, res) => {});
//app.get("/", (req, res) => {});

const port = 3000;

app.listen(port, () => {
  console.log(`App started on ${port}.`);
});
