import { Block } from './block';

export class Blockchain {

  /* main chain */
  private _chain: Block[] = [];

  constructor() {
    this.createGenesisBlock();
  }

  private createGenesisBlock() {
    this.createBlock("Genesis Block");
  }

  private addBlockToChain(block: Block) {
    this.chain.push(block);
    console.log(block);
  }

  createBlock(data: any) {
    debugger;
    /* get last block of the chain */
    const lastBlock = this.lastBlock;
    /* get last block index of the chain */
    const newBlockIndex = lastBlock?.index + 1 || 0;
    const previousHash = lastBlock?.hash || '';
    /* create new block */
    const newBlock = new Block(newBlockIndex, data, previousHash);
    /* add new block to the chain */
    this.addBlockToChain(newBlock);
  }

  get chain() {
    return this._chain;
  }

  get lastBlock() {
    const lastIndex = this.lastBlockIndex;
    return this.chain[lastIndex];
  }

  get lastBlockIndex() {
    return this.chain.length - 1;
  }

}