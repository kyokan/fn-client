import {EOF, IOCallback, Reader, Writer} from './types';
import {MutableBuffer} from './MutableBuffer';

/**
 * An empty 32-byte hash.
 */
export const ZERO_HASH = Buffer.alloc(32);

/**
 * An empty Buffer.
 */
export const ZERO_BUFFER = Buffer.alloc(0);

/**
 * A callback taking a single error argument.
 */
export type ErrCB = (err: any) => void;

/**
 * Helper method to call a set of asynchronous methods with
 * an [[IOCallback]] in sequence. Operates identically to
 * [[chain]].
 *
 * @param cb
 * @param fns
 */
export function chainIO (cb: IOCallback, ...fns: ((cb: IOCallback) => void)[]) {
  let written = 0;
  const doWrite = (i: number) => {
    if (i === fns.length) {
      return cb(null, written);
    }

    fns[i]((err, n) => {
      written += n;
      if (err) {
        return cb(err, written);
      }
      doWrite(i + 1);
    });
  };
  doWrite(0);
}

/**
 * Helper method to write a list of Buffers to an underlying
 * [[Writer]] in sequence.
 *
 * @param w - The underlying [[Writer]] to write to.
 * @param cb - An [[IOCallback]] to be called with an error occurs or the
 * writes complete.
 * @param bufs - The list of Buffers to write.
 */
export function chainWrites (w: Writer, cb: IOCallback, ...bufs: Buffer[]) {
  const wrappedBufs: ((cb: IOCallback) => void)[] = [];
  for (const buf of bufs) {
    wrappedBufs.push((cb) => w.write(buf, cb));
  }
  chainIO(cb, ...wrappedBufs);
}

/**
 * Helper method to call a set of asynchronous methods with
 * an [[ErrCB]] callback in sequence. `...fns` will be called
 * in sequence until they either complete or an error is
 * encountered. `cb` will then be called with `null`
 * or the error.
 *
 * @param cb - A callback to be called upon completion or error.
 * @param fns - The async functions to call.
 */
export function chain (cb: ErrCB, ...fns: ((cb: ErrCB) => void)[]): void {
  const doChain = (i: number) => {
    if (i === fns.length) {
      return cb(null);
    }

    fns[i]((err) => {
      if (err) {
        return cb(err);
      }
      doChain(i + 1);
    });
  };
  doChain(0);
}

/**
 * Helper method to read all remaining bytes from a [[Reader]].
 * Since this method buffers read data into memory, calling it with
 * a [[Reader]] of unbounded size will cause memory leaks.
 *
 * @param r
 * @param cb
 */
export function readAll (r: Reader, cb: (err: any, data: Buffer | null) => void): void {
  const buf = new MutableBuffer();
  const doRead = () => {
    const scratch = Buffer.alloc(8192);
    r.read(scratch, (err, n) => {
      if (err && err != EOF) {
        return cb(err, null);
      }
      if (n === 0) {
        return cb(null, buf.bytes());
      }
      buf.write(Buffer.from(scratch.slice(0, n)), (err, _) => {
        if (err) {
          return cb(err, null);
        }
        setImmediate(doRead);
      });
    });
  };
  doRead();
}