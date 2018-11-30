// export packages we need
const toExport = {
    bitcoin: require('bitcoinjs-lib'),
    bigi: require('bigi'),
    bip38: require('bip38'),
    wif: require('wif'),
    elliptic: require('elliptic'),
    randombytes: require('randombytes'),
    scrypt: require('scryptsy'),
    base58: require('base58'),
    bnjs: require('bn.js'),
    aes: require('browserify-aes'),
    Buffer: require('safe-buffer').Buffer
};
try {
    Object.assign(window, toExport);
} catch (e) {
    Object.assign(global, toExport);
}