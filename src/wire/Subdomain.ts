import {IOCallback, Reader, Writer} from '../io/types';
import {chain, chainIO} from '../io/util';
import {decodeFixedBytes, decodeUint8} from '../io/decoding';
import {encodeFixedBytes, encodeUint8} from '../io/encoding';

export const SUBDOMAIN_MAGIC = 'SUB';

export const SUBDOMAIN_RECORD_LEN = 50;

export interface Subdomain {
  name: string
  index: number
  publicKey: Buffer
}

/**
 * Encodes a Subdomain into a Writer.
 *
 * @param w
 * @param sub
 * @param cb
 */
export function encodeSubdomain (w: Writer, sub: Subdomain, cb: IOCallback): void {
  if (sub.name.length > 15) {
    throw new Error('sub names must be shorter than 15 characters');
  }
  if (sub.name.length === 0) {
    throw new Error('sub names cannot be empty');
  }
  if (sub.index < 0 || sub.index > 255) {
    throw new Error('sub indexes must fit in a unt8');
  }
  if (sub.publicKey.length != 33) {
    throw new Error('sub public keys must be exactly 33 bytes long');
  }
  const nameBuf = Buffer.alloc(15);
  Buffer.from(sub.name).copy(nameBuf);
  chainIO(
    cb,
    (cb) => encodeUint8(w, 1, cb),
    (cb) => encodeFixedBytes(w, nameBuf, cb),
    (cb) => encodeUint8(w, sub.index, cb),
    (cb) => encodeFixedBytes(w, sub.publicKey, cb),
  );
}

/**
 * Decodes a Subdomain from a Reader.
 *
 * @param r
 * @param cb
 */
export function decodeSubdomain (r: Reader, cb: (err: any, sub: Subdomain | null) => void): void {
  let name: string;
  let index: number;
  let publicKey: Buffer;
  chain(
    (err) => {
      if (err) {
        return cb(err, null);
      }
      cb(null, {
        name,
        index,
        publicKey,
      });
    },
    (cb) => decodeUint8(r, (err, v) => {
      if (err) {
        return cb(err);
      }
      if (v !== 1) {
        return cb(new Error('invalid subdomain version'));
      }
      cb(null);
    }),
    (cb) => decodeFixedBytes(r, 15, (err, b) => {
      if (err) {
        return cb(err);
      }
      let cutoff = -1;
      for (let i = 0; i < b!.length; i++) {
        if (b![i] === 0x00) {
          break;
        }
        cutoff = i;
      }
      if (cutoff === -1) {
        name = '';
      } else {
        name = b!.slice(0, cutoff + 1).toString('utf-8');
      }
      cb(null);
    }),
    (cb) => decodeUint8(r, (err, n) => {
      if (err) {
        return cb(err);
      }
      index = n!;
      cb(null);
    }),
    (cb) => decodeFixedBytes(r, 33, (err, b) => {
      if (err) {
        return cb(err);
      }
      publicKey = b!;
      cb(null);
    })
  );
}