import Promise from 'bluebird';
import web3 from '@/web3';
import * as config from './web3/config';
import linkidolABI from './contract/abi/linkidol.json';
import IdolDrawABI from './contract/abi/IdolDraw.json';

// Sometimes, web3.version.network might be undefined,
// as a workaround, use defaultNetwork in that case.
let network = config.defaultNetwork;
let linkidolContract = new web3.eth.Contract(linkidolABI, network.linkidol);
let IdolDrawContract = new web3.eth.Contract(IdolDrawABI, network.IdolDraw);
web3.eth.net.getId().then((result) => {
  network = config.network[result];
  linkidolContract = new web3.eth.Contract(linkidolABI, network.linkidol);
  IdolDrawContract = new web3.eth.Contract(IdolDrawABI, network.IdolDraw);
});

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
  const ids = await linkidolContract.methods.totalSupply().call();
  return ids;
};

// export const drawCard = referrer => new Promise((resolve, reject) => {
export const drawCard = async (referrer) => {
  const address = (await Promise.promisify(web3.eth.getAccounts)())[0];
  const res = await IdolDrawContract.methods.buy(referrer).send({
    from: address,
    value: 1000000000000000,
    gas: 100000,
  });
  return res;
  // (err, result) => (err ? reject(err) : resolve(result)));
};

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
};

export const getNetwork = async () => {
  // const getId = () =>
  const netId = await web3.eth.net.getId();
  return config.network[netId];
};
