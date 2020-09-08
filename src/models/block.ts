import { SHA256 } from 'crypto-js';

export class Block {

  private _index: number;
  private _hash: string;
  private _timestamp: number;
  private _previousHash: string;
  private _data: any;

  constructor(index: number, data: any, previousHash: string) {
    this.setTime();
    this.setIndex(index);
    this.setPreviousHash(previousHash);
    this.setData(data);
    this.createHash();
  }

  //#region VARIABLE GETTER FUNCTIONS

  get index(): number {
    return this._index;
  }

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

  private setIndex(index: number) {
    this._index = index;
  }

  private setTime() {
    this._timestamp = new Date().getTime();
  }

  private setPreviousHash(previousHash: string) {
    this._previousHash = previousHash;
  }

  private setData(data: any) {
    this._data = data;
  }

  private createHash() {
    debugger;
    const content = `${this.index}${this.previousHash}${this.timestamp}${JSON.stringify(this.data)}`;
    this._hash = SHA256(content).toString();
  }

  //#endregion

}