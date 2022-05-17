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

function Bip39BuildCredential(email) {
    const mnemonic = generateMnemonic();
    const syncedMnemonic = mnemonicToSeedSync(mnemonic, email).toString('hex');
    return new Promise((resolve, reject) => {
        resolve({
            mnemonic,
            syncedMnemonic
        });
    });
}

export default Bip39BuildCredential;