import express from 'express';

import * as BlockController from './controllers/block.controller';

const app = express();
const port = 3000;

// BlockController(app);

app.listen(port, () => {
  console.log('---------------------------------------------------');
  console.log(`Server is listening on port ${port}!`);
  console.log('---------------------------------------------------');
});