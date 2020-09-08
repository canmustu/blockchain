import { Blockchain } from './models';

/* create genesis block */
const blockchain = new Blockchain();
blockchain.createBlock({ amount: 1 });
blockchain.createBlock({ amount: 2 });
