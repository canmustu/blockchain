class Blockchain {

  private _chain: Block[] = [];

  constructor() {

  }

  get chain() {
    return this._chain;
  }

  createGenesisBlock(): Block {
    return new Block('data', null);
  }

  createBlock(data: any) {
    return new Block(data, null);
  }

  addGenesisBlock() {
    const genesisBlock = this.createGenesisBlock();
    this.addBlock(genesisBlock);
  }

  addBlock(block: Block) {
    this.chain.push(block);
  }

  getLatestBlock() {
    const lastIndex = this.chain.length - 1;
    return this.chain[lastIndex];
  }

}

module.exports = {
  Blockchain: Blockchain
};