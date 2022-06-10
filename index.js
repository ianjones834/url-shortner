 const express = require('express');
const app = express();
const port = 3000;

const longUrls = [];

app.use(express.json());

app.get('/:id', (req, res) => {
  const longUrl = longUrls[req.params.id];
  res.redirect(longUrl);
});

app.post('/api/shorten', (req, res) => {
  longUrls.push(req.body.longUrl)
  const shortUrlId = longUrls.length - 1;

  res.send({
    shortUrl: `http://localhost:3000/${shortUrlId}`
  });
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});