import {BufferView} from './BufferView';
import {assert} from 'chai';
import {EOF} from './types';
import crypto = require('crypto');

describe('BufferView', () => {
  it('should support reads where the buffer is beyond view bounds', (done) => {
    const randBuf = crypto.randomBytes(32);
    const bv = new BufferView(randBuf);
    const buf = Buffer.alloc(50);

    bv.read(buf, (err, n) => {
      assert.equal(n, 32);
      assert.equal(err, EOF);
      assert.deepEqual(buf.slice(0, 32), randBuf);

      bv.read(buf, (err, n) => {
        assert.equal(n, 0);
        assert.equal(err, EOF);
        done();
      });
    });
  });

  it('should return EOF on subsequent reads beyond view bounds', (done) => {
    const randBuf = crypto.randomBytes(32);
    const bv = new BufferView(randBuf);
    const buf = Buffer.alloc(17);

    bv.read(buf, (err, n) => {
      assert.equal(n, 17);
      assert.isNull(err);
      assert.deepEqual(buf, randBuf.slice(0, 17));

      bv.read(buf, (err, n) => {
        assert.equal(n, 15);
        assert.equal(err, EOF);
        assert.deepEqual(buf.slice(0, 15), randBuf.slice(17, 32));
        done();
      });
    });
  });

  it('should not read anything if the buffer is zero length', (done) => {
    const bv = new BufferView(Buffer.alloc(1));
    bv.read(Buffer.alloc(0), (err, n) => {
      assert.equal(n, 0);
      assert.isNull(err);
      done();
    });
  });
});