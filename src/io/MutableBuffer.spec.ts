import {MutableBuffer} from './MutableBuffer';
import {assert} from 'chai';
import crypto = require('crypto');

describe('MutableBuffer', () => {
  it('should support writes', (done) => {
    const defaultBuf = crypto.randomBytes(32);
    const mb = new MutableBuffer(defaultBuf);
    assert.equal(mb.length(), 32);
    mb.write(Buffer.alloc(10), (err, n) => {
      assert.isNull(err);
      assert.equal(10, n);
      assert.equal(mb.length(), 42);
      assert.deepEqual(mb.bytes(), Buffer.concat([
        defaultBuf,
        Buffer.alloc(10),
      ]));
      done();
    });
  });

  it('should support resetting', (done) => {
    const defaultBuf = crypto.randomBytes(32);
    const mb = new MutableBuffer(defaultBuf);
    assert.equal(mb.length(), 32);
    mb.write(Buffer.alloc(10), (err, n) => {
      assert.isNull(err);
      assert.equal(10, n);
      mb.reset();
      assert.equal(mb.length(), 0);
      assert.deepEqual(mb.bytes(), Buffer.alloc(0));
      done();
    });
  });
});