import {sealAndSign} from './signatures';
import {assert} from 'chai';
import SECP256k1Signer from './signer';

describe('sealAndSign', () => {
  it('should calculate the correct signature', function () {
    const signer = SECP256k1Signer.fromHexPrivateKey('86d4da79175bf6984ef62676a20069d35527c45ccc398d46b7fdb9b0783cccf7');
    const sig = sealAndSign(signer, 'testname', new Date(0), Buffer.alloc(32));
    assert.equal(sig.toString('hex'), '1cdb0e3aa14a5489cc1bfcf25843d6747cb9412d6200c35b69dd5fb9cb133ebc7c339ea9d5bb0cce8a9b20e84642757d9a2bc82e9e0a777a9641dd05fb9e5e4836');
  });
});
