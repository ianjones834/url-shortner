const express = require('express');
const { Pool } = require('pg');
const getLongUrlId = require('./shortid-generator')

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: '5432'
});


app.use(express.json());

app.get('/:id', async (req, res) => {

  const sql = 'select long_url from long_url where id = $1';
  const params = [req.params.id];

  const client = await pool.connect();
  const longUrl = (await client.query(sql, params)).rows[0].long_url;
  await client.release();

  res.redirect(longUrl);
});

app.post('/api/shorten', async (req, res) => {

  const client = await pool.connect();
  const longUrlCounter = (await client.query("select nextval ('long_url_counter')")).rows[0].nextval;

  const longUrlId = getLongUrlId(longUrlCounter);

  const sql = 'insert into long_url(id, long_url) values ($1, $2)';
  const params =[longUrlId, req.body.longUrl];

  await client.query(sql, params);
  await client.release();

  res.send({
    shortUrl: `http://localhost:${port}/${longUrlId}`
  });
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});