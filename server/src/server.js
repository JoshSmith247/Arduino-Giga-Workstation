const express = require('express');
const app = express();
const port = 80;

app.get('/search', (req, res) => {
  res.send('Connection established to server!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});