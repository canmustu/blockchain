class Block {

  private _hash: string;
  private _timestamp: number;
  private _previousHash: string;
  private _data: any;

  constructor(data: any, previousHash: string) {
    this.setTime();
    this.setPreviousHash(previousHash);
    this.setData(data);
  }

  //#region VARIABLE GETTER FUNCTIONS

  get hash(): string {
    return this._hash;
  }

  get timestamp(): number {
    return this._timestamp;
  }

  get previousHash(): string {
    return this._previousHash;
  }

  get data(): any {
    return this._data;
  }

  //#endregion

  //#region VARIABLE SETTER FUNCTIONS

  setTime() {
    this._timestamp = new Date().getTime();
  }

  setPreviousHash(previousHash: string) {
    this._previousHash = previousHash;
  }

  setData(data: any) {
    this._data = data;
  }

  //#endregion

}

module.exports = {
  Block: Block
};