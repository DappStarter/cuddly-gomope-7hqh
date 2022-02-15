require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name recipe sad pupil idea civil army gaze'; 
let testAccounts = [
"0x6cabb9b09a37b39a82ac600c7ac8398adbfd559dd86940313150ec22038eefa4",
"0x13f0e05beaf4f2e1fa04165e0ced00024c31defa7dbaab53f5927573373a3c6c",
"0xe19d97164f163cb01c07f284fcbb8ae258bb736105666ec4f4e245a11356fa90",
"0xe3672537c1177b55a3a5ae7024b1c9aaa740782264074abfc2261005466e08ad",
"0x04e45acb6b6478873e02d70d49b33b209794be7f5fe2dbc3febd25e96631a496",
"0x592776bb53d610f3356cf56c06093231ddb15cd97977487d6305b219fc672272",
"0x7650cfe84a90088371dcb9070bdd7551292c557ff53e39eaaa07e37ae3489eab",
"0x8e0a8e4802672324de7f3e226422043139e8b299898aec7552151d104ead0655",
"0xac84c4c9020c99896f4ff6c848a13687157511bd5772a2765a82b197c047ca4f",
"0x7b63c8a1d6317b2bb46f6bf42e015298a7d54c2c0f1f2cfcb6aff3405e6c3dc0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

