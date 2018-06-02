import Promise from 'bluebird';
import Cookie from 'js-cookie';
import web3 from '@/web3';
import * as config from './web3/config';
import request from 'superagent';
import timeout from 'timeout-then';
import linkidolABI from './contract/abi/linkidol.json';
import IdolDrawABI from './contract/abi/IdolDraw.json';

// Sometimes, web3.version.network might be undefined,
// as a workaround, use defaultNetwork in that case.
var network = config.defaultNetwork;
var linkidolContract = new web3.eth.Contract(linkidolABI,network.linkidol);
var IdolDrawContract = new web3.eth.Contract(IdolDrawABI,network.IdolDraw);
web3.eth.net.getId().then(function (result) {
    network = config.network[result];
    linkidolContract = new web3.eth.Contract(linkidolABI,network.linkidol);
    IdolDrawContract = new web3.eth.Contract(IdolDrawABI,network.IdolDraw);
});

let store = [];
let isInit = false;


export const init = async () => {
  await request
    .get('https://api.leancloud.cn/1.1/classes/ad')
    .set(config.leanCloudKey)
    .type('json')
    .accept('json')
    .then((response) => {
      if (response.body && response.body.results) {
        store = response.body.results;
      }
      isInit = true;
    });
};

init().then();

export const getMe = async () => {
  if (!window.web3) {
    throw Error('NO_METAMASK');
  }
  const me = {};
  me.address = (await Promise.promisify(web3.eth.getAccounts)())[0];

  if (me.address) {
    me.balance = await Promise.promisify(web3.eth.getBalance)(me.address);
    return me;
  }
  throw Error('METAMASK_LOCKED');
};

export const getLeftCardsCount = async () => {
  // await Promise.promisify(IdolDrawContract.setContractAddr)("0x39f8a3ff4e5097e57c777857697836079a51dc1d");
  // await Promise.promisify(linkidolContract.addAdmin)("0xc6d6d2c0eb7d64467ad02efc54496cdfc2fe55d6");

  // const ids = await Promise.promisify(linkidolContract.totalSupply)();
  // return ids.c[0];
  const ids = await linkidolContract.methods.totalSupply().call();
  return ids;
}

// export const drawCard = referrer => new Promise((resolve, reject) => {
export const drawCard = async (referrer) => {
  const address = (await Promise.promisify(web3.eth.getAccounts)())[0];
  const res = await IdolDrawContract.methods.buy(referrer).send({
    from:address,
    value: 1000000000000000,
    gas: 100000
  });
  return res;
  // (err, result) => (err ? reject(err) : resolve(result)));
};

export const getMyCards = async () => {
  if (!window.web3) {
    throw Error('NO_METAMASK');
  }
  const me = {};
  me.address = (await Promise.promisify(web3.eth.getAccounts)())[0];

  // const ids = await Promise.promisify(linkidolContract.tokensOf)(me.address)
  const ids = await linkidolContract.methods.tokensOf(me.address).call();
  const luckyTokens = await Promise.all(ids.map(id => getCardsType(id)));
  // console.log(luckyTokens)
  return luckyTokens;
}
export const getCardsType = async (id) => {
  const idnum = id;
  const item = {};
  item.id = Number(idnum);
  // const typenum = await Promise.promisify(IdolDrawContract.typesOf)(idnum);
  const typenum = await IdolDrawContract.methods.typesOf(idnum).call();
  item.type = typenum;
  // item.approved = await isApproved(id);
  // console.log(item)
  // return item;
  return typenum;
};
