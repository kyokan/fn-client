import {sealHash} from './hash';
import { assert } from 'chai';

describe('sealHash', () => {
  it('should calculate the correct hash', function () {
    const date = new Date(0);
    const zeroHash = Buffer.alloc(32);
    const h = sealHash('testname', date, zeroHash);
    assert.equal(h.toString('hex'), '694802db0f9b9b72725cf9c108b7a496bf20e1bdcc4d7feb9c42b8df1a08823b');
  });
});
