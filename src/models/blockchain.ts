class Blockchain {

  chain: Block[];

  constructor() {

  }

  createChain() {
    this.chain = [
      this.createGenesisBlock()
    ];
  }

  createGenesisBlock(): Block {
    return new Block('data', null);
  }

}