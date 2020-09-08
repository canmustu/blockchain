import express from 'express';

import { Blockchain, Block } from './models';

const BlockController = require('./controllers/block.controller');

// const app = express();
// const port = 3000;

/* start api */
// app.listen(port, () => {
//   console.log('---------------------------------------------------');
//   console.log(`Server is listening on port ${port}!`);
//   console.log('---------------------------------------------------');
// });

/* set controllers */
// BlockController(app);

/* create genesis block */
const blockchain = new Blockchain();
blockchain.createBlock({ amount: 1 });
blockchain.createBlock({ amount: 2 });
