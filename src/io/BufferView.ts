import {IOCallback, Reader} from './types';
import {EOF} from './types';

/**
 * BufferView turns a Buffer into a Reader.
 */
export class BufferView implements Reader {
  private buf: Buffer;

  private off: number = 0;

  constructor (buf: Buffer) {
    this.buf = buf;
  }

  read (buf: Buffer, cb: IOCallback): void {
    if (this.off === this.buf.length) {
      return cb(EOF, 0);
    }

    const bufLen = buf.length;
    if (bufLen == 0) {
      return cb(null, 0);
    }

    if (this.off + bufLen > this.buf.length) {
      const n = this.buf.copy(buf, 0, this.off, this.buf.length);
      this.off = this.buf.length;
      return cb(EOF, n);
    }

    const n = this.buf.copy(buf, 0, this.off, this.off + bufLen);
    this.off += bufLen;
    return cb(null, n);
  }
}