import cardsData from './cards.json';

/* eslint-disable import/prefer-default-export */

export const network = {
  1: {
    default: true, // It will be used when no metaMask
    name: 'Main Ethereum Network',
    IdolDraw: '0x62EF40Ff5EB3547E76316caF8b2F2C9820F1f978',
    linkidol: '0x39f8a3fF4E5097e57c777857697836079A51dc1d',
    rpc: 'https://mainnet.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  2: {
    name: 'Morden Test Network',
    contract: '',
  },
  3: {
    default: true, // It will be used when no metaMask
    name: 'Ropsten Test Network',
    IdolDraw: '0x62EF40Ff5EB3547E76316caF8b2F2C9820F1f978',
    linkidol: '0x39f8a3fF4E5097e57c777857697836079A51dc1d',    
    rpc: 'https://ropsten.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  4: {
    name: 'Rinkeby Test Network',
    IdolDraw: '0x62EF40Ff5EB3547E76316caF8b2F2C9820F1f978',
    linkidol: '0x39f8a3fF4E5097e57c777857697836079A51dc1d',
    rpc: 'https://rinkeby.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  42: {
    name: 'Kovan Test Network',
    IdolDraw: '0x62EF40Ff5EB3547E76316caF8b2F2C9820F1f978',
    linkidol: '0x39f8a3fF4E5097e57c777857697836079A51dc1d',    
    rpc: 'https://kovan.infura.io/lTETGFVyQX99UKQ98BN4',
  },
};

export const defaultNetwork = Object.values(network).find(net => net.default);

export const cards = cardsData;

export const i18n = [
  {
    langDisplay: '中文',
    locale: 'zh',
    aliases: ['zh', 'zh-cn', 'zh-hk', 'zh-sg', 'zh-tw'],
  },
  {
    langDisplay: 'English',
    locale: 'en',
    aliases: ['en', 'en-us', 'en-au', 'en-bz', 'en-ca', 'en-ie', 'en-jm', 'en-nz', 'en-ph', 'en-za', 'en-tt', 'en-gb', 'en-zw'],
  },
  {
    langDisplay: '日本語',
    locale: 'jp',
    aliases: ['jp', 'ja', 'ja-jp'],
  },
];
