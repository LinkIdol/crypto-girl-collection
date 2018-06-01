export const network = {
  1: {
    default: true, // It will be used when no metaMask
    name: 'Main Ethereum Network',
    contract: '0xd0792ac0de7ef31197c5f452b21a34389ecc725f',
    convert: '0x0297fdbcb9c2023bc05ad44c9f6e69b0ae6261ce',
    luckyPackage: '0x8b481c5af4734501ea8b6a0c3502e001dd883d3d',
    rpc: 'https://mainnet.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  2: {
    name: 'Morden Test Network',
    contract: '',
  },
  3: {
    name: 'Ropsten Test Network',
    contract: '0xD62ccC23C5e1Db41C017913303bdB09e570284f6',
    convert: '0xE3F437609E97246734aa6A550E407E14dB2f53b1',
    luckyPackage: '0xDC060a83C8A81a029676e85DEe8c0D090b52F2dD',
    DecentralizedExchangeHotPotato: '0x4a11d94715194d602f9ec570e446e33bf9e41fed',
    rpc: 'https://ropsten.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  4: {
    name: 'Rinkeby Test Network',
    contract: '',
    rpc: 'https://rinkeby.infura.io/lTETGFVyQX99UKQ98BN4',
  },
  42: {
    name: 'Kovan Test Network',
    linkidol: '0x39f8a3ff4e5097e57c777857697836079a51dc1d',
    IdolDraw: '0xc6d6d2c0eb7d64467ad02efc54496cdfc2fe55d6',
    // convert: '0xb55edc9c72d56447d6d1ea2476bcb42e74df16cf',
    // DecentralizedExchangeHotPotato: '0xac7e1a3263e06329eee8ac5b45f3ac2223119779',
    rpc: 'https://kovan.infura.io/lTETGFVyQX99UKQ98BN4',
  },
};

export const defaultNetwork = Object.values(network).find(net => net.default);

