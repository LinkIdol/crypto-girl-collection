import web3 from '@/web3';
import { BigNumber } from 'bignumber.js';

/* eslint-disable import/prefer-default-export */

export const toReadablePrice = (fromPrice, fromUnit = 'wei') => {
  fromPrice = `${fromPrice}`;
  console.log(fromPrice);
  const priceInWei = web3.utils.toWei(fromPrice, fromUnit);
  let price;
  let unit;

  if (BigNumber(priceInWei).isLessThan(BigNumber('10000000000000'))) {
    price = priceInWei;
    unit = 'Wei';
  } else {
    price = web3.utils.fromWei(priceInWei, 'ether');
    unit = 'ETH';
  }
  return { price, unit };
};
