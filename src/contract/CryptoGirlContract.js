// import web3 from '@/web3';
// import { BigNumber } from 'bignumber.js';
import cardsData from '@/cards/cards.json';
import abi from './abi/CryptoGirl.json';
import Contract from './ContractTemplate';


// This is very Object Oriented Programming to use ES6 Classes
export default class CryptoGirlContract extends Contract {
  async initialize() {
    // const contractName = 'CryptoGirl';
    const contractName = 'contract';
    await super.initialize({ abi, contractName });
    return this;
  }

  get methods() {
    return this.contract.methods;
  }

  // TODO: more function coming up
  async getTotal() {
    const total = await this.contract.methods.totalSupply().call();
    return total;
  }

  async getItemIds(offset, limit) {
    let ids = await this.contract.methods.itemsForSaleLimit(offset, limit).call();
    console.log(ids);
    ids = ids.map(id => Number(id));
    ids.sort((a, b) => a - b);
    return Array.from(new Set(ids));
  }

  async getItemsOf(address) {
    const { contract } = this;
    let ids = await contract.methods.tokensOf(address).call();
    console.log(ids);
    ids = ids.map(id => Number(id));
    ids.sort((a, b) => a - b);
    return ids;
    // return Array.from(new Set(ids));
  }


  async getItem(id) {
    const exist = await this.contract.methods.tokenExists(id).call();
    if (!exist) return null;
    const card = cardsData[id] || {};
    let item = {
      id,
      name: card.name,
      nickname: card.nickname,
    };
    const data = await this.contract.methods.allOf(id).call();
    const { _owner, _price, _nextPrice } = data;
    item = Object.assign(item, { owner: _owner, price: _price, nextPrice: _nextPrice });
    return item;
  }

  async buyItem(id, price) {
    // Price should be converted to wei
    const msg = { value: price, from: this.account };
    this.contract.buy(id).send(msg);
  }
}
