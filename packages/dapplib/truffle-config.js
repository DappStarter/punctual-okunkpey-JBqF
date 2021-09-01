require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember uniform install infant swing slender'; 
let testAccounts = [
"0x4700db5fd9d4fa45fe69c2b24226711d6c3ea2be9676130c9e8f49ccbbc36146",
"0x9d46dfab32f1a27b60072028769df9aecc7f5fcd30eba2662590aa504125a432",
"0xbe30d70f46478cb0307aaa442cd92563eaec5076df16ccf3fc49c589e9369726",
"0x5a10d41cf000b31e5fca2ed0b458a231e05e6cd6ef9b80ad7217932438f8ccf9",
"0x1416ab7ae200a00c499fb41993aaa6ed0f0e03df4eaca0b34a13e088f7cb848d",
"0xddf7c4c2ea173b0742272676ab4cc89d02d2ffca5304a525d13d4a67c9856070",
"0x0aa453ce7a45ac1f1648c5d8adb9a03678ff6b4945f480cf3c57955232aea76e",
"0xde1ca658142b9de9cb8d34b81aa7bb2cf8adb37153abe7d4a9a91357c0592813",
"0xdc919c671b1860cfc612fcba402513311b3ec81eebf25964d2a90db5083bd11b",
"0x487dd47270a92890078c2a69ce7ed4a3c6e3232a2334d44830adf5022cf22416"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


