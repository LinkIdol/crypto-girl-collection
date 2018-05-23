import web3 from '@/web3';
import { network } from '@/web3/config';

/**
 * Contract Template
 * @author: Frank Wei<frank@frankwei.xyz>
 * ================================
 *        WARNING!!!!
 * DON'T EDIT THIS CONTRACT UNLESS
 * YOU NEED TO CHANGE THE TEMPLATE
 * ================================
 * For Contract Template Usage,
 * Simple Import this contract
 * and Extends your contract class to this only exported Class
 */

export default class Contract {
  constructor() {
    this.contract = null;
    this.account = null;
  }

  // Things changes a lot in web3 v1.0 compared to v0.20
  async initialize({ abi, contractName }) {
    const accounts = await web3.eth.getAccounts();
    this.account = accounts[0];
    // Initialize Contract Object
    const networkId = await web3.eth.net.getId();
    const contractAddress = network[networkId][contractName];
    this.contract = new web3.eth.Contract(abi, contractAddress);
  }
}
