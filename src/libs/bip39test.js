import {
    entropyToMnemonic,
    generateMnemonic,
    getDefaultWordlist,
    mnemonicToEntropy,
    mnemonicToSeed,
    mnemonicToSeedSync,
    setDefaultWordlist,
    validateMnemonic
} from 'bip39';

function Bip39Test() {
    return mnemonicToSeed('basket actual')
        .then(bytes => bytes.toString('hex'))
        .then((result) => {
            // this.mnemonic = result;
            console.log(result)
        });
}

export default Bip39Test;