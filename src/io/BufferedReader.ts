import {EOF, IOCallback, Reader} from './types';

/**
 * Reads data from an underlying [[Reader]] into a
 * buffer of size `bufSize` bytes. Calls to the read
 * method may make multiple calls to the underlying
 * [[Reader]].
 */
export class BufferedReader implements Reader {
  private readonly r: Reader;

  private readonly bufSize: number;

  private buf: Buffer = Buffer.alloc(0);

  private off: number = 0;

  private eof: boolean = false;

  /**
   * Constructs a new [[BufferedReader]].
   *
   * @param r - The underlying [[Reader]].
   * @param bufSize - The size of the internal buffer.
   */
  constructor (r: Reader, bufSize: number = 16384) {
    this.r = r;
    this.bufSize = bufSize;
  }

  read = (buf: Buffer, cb: IOCallback): void => {
    if (this.eof && this.off === this.buf.length) {
      return cb(EOF, 0);
    }

    // base case: buffer is empty, so fill it
    if (this.buf.length === 0) {
      const internalBuf = Buffer.alloc(this.bufSize);
      this.r.read(internalBuf, (err, n) => {
        if (err && err !== EOF) {
          return cb(err, n);
        }
        if (err === EOF) {
          this.eof = true;
        }
        this.buf = internalBuf.slice(0, n);
        this.off = 0;
        this.read(buf, cb);
      });
      return;
    }

    // edge case: large read > bufSize
    if (buf.length > this.bufSize) {
      if (this.eof) {
        this.buf.copy(buf, 0, this.off);
        const read = this.buf.length - this.off;
        this.off = this.buf.length;
        return cb(EOF, read);
      }

      const remaining = this.buf.slice(this.off);
      remaining.copy(buf);
      this.r.read(buf.slice(remaining.length), (err, n) => {
        if (err && err !== EOF) {
          return cb(err, remaining.length + n);
        }
        if (err === EOF) {
          this.eof = true;
        }

        this.buf = Buffer.alloc(0);
        this.off = 0;
        cb(err, remaining.length + n);
      });
      return;
    }

    // edge case: boundary read
    if (this.off + buf.length > this.buf.length) {
      if (this.eof) {
        this.buf.copy(buf, 0, this.off);
        const read = this.buf.length - this.off;
        this.off = this.buf.length;
        return cb(EOF, read);
      }

      const remaining = this.buf.slice(this.off);
      const additional = Buffer.alloc(this.bufSize);
      this.r.read(additional, (err, n) => {
        if (err && err !== EOF) {
          return cb(err, n);
        }
        if (err === EOF) {
          this.eof = true;
        }
        const remainingRead = remaining.copy(buf);
        const additionalRead = additional.copy(buf, remaining.length, 0, n);
        this.buf = additional.slice(additionalRead);
        this.off = 0;
        cb(err, remainingRead + additionalRead);
      });
      return;
    }

    // base case: buffer read
    this.off += this.buf.copy(buf, 0, this.off);
    cb(null, buf.length);
  };
}