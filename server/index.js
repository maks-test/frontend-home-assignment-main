import express from 'express';

import fs from 'fs';

const app = express();

const pathToUpperBarFile = new URL('./data/data.json', import.meta.url)
  .pathname;
const data = JSON.parse(fs.readFileSync(pathToUpperBarFile));

app.get('/api/v1/tree', (_, res) => {
  setTimeout(() => {
    res.header({
      'Access-Control-Allow-Origin': '*',
    });
    res.json(data);
  }, 300);
});

app.listen(3001, (_) => {
  console.log('API server running on localhost:3001');
});
