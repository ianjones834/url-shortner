const express = require('express');
const getShortIds = require('./shortid-generator')

const app = express();
const port = 3000;

const shortIds = getShortIds();
const longUrls = {};

app.use(express.json());

app.get('/:id', (req, res) => {
  const longUrl = longUrls[req.params.id];
  res.redirect(longUrl);
});

app.post('/api/shorten', (req, res) => {
  const shortUrlId = shortIds.pop();
  longUrls[shortUrlId] = req.body.longUrl;

  res.send({
    shortUrl: `http://localhost:${port}/${shortUrlId}`
  });
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});