import {Reader} from './types';
import * as Long from 'long';

const MAX_VARIABLE_BYTE_SIZE = 16 * 1024 * 1024;
const MAX_ARRAY_SIZE = 255;

export function decodeUint8 (r: Reader, cb: (err: any, n: number | null) => void): void {
  const buf = Buffer.alloc(1);
  r.read(buf, (err, _) => {
    if (err) {
      return cb(err, null);
    }
    cb(null, buf[0]);
  });
}

export function decodeUint64 (r: Reader, cb: (err: any, n: Long | null) => void): void {
  const buf = Buffer.alloc(8);
  r.read(buf, (err, _) => {
    if (err) {
      return cb(err, null);
    }
    cb(null, Long.fromBytesBE(Array.from(buf), true));
  });
}

export function decodeUint32(r: Reader, cb: (err: any, n: number|null) => void): void {
  const buf = Buffer.alloc(4);
  r.read(buf, (err, _) => {
    if (err) {
      return cb(err, null);
    }
    cb(null, buf.readUInt32BE(0));
  });
}

export function decodeUvarint (r: Reader, cb: (err: any, n: Long | null) => void): void {
  const buf = Buffer.alloc(1);
  let result = Long.ZERO;
  let shift = 0;
  const doRead = () => {
    r.read(buf, (err, _) => {
      if (err) {
        return cb(err, null);
      }
      const byte = buf[0];
      result = result.add(Long.fromNumber(byte & 0x7f).shiftLeft(shift));
      shift += 7;
      if (shift > 70) {
        return cb(new Error('invalid uvarint'), null);
      }
      if ((byte & 0x80) === 0) {
        return cb(null, result);
      }
      doRead();
    });
  };
  doRead();
}

export function decodeFixedBytes (r: Reader, n: number, cb: (err: any, b: Buffer | null) => void): void {
  const buf = Buffer.alloc(n);
  return r.read(buf, (err, _) => {
    if (err) {
      return cb(err, null);
    }
    cb(null, buf);
  });
}

export function decodeVariableBytes (r: Reader, cb: (err: any, b: Buffer | null) => void) {
  decodeUvarint(r, (err, n) => {
    if (err) {
      return cb(err, null);
    }
    if (n!.gt(MAX_VARIABLE_BYTE_SIZE)) {
      return cb(new Error('refusing to decode more than 16777216 bytes'), null);
    }
    decodeFixedBytes(r, n!.toNumber(), cb);
  });
}

export function decodeString (r: Reader, cb: (err: any, s: string | null) => void): void {
  decodeVariableBytes(r, (err, b) => {
    if (err) {
      return cb(err, null);
    }
    cb(null, b?.toString('utf-8') || '');
  });
}

export function decodeTimestamp (r: Reader, cb: (err: any, date: Date | null) => void): void {
  decodeUint32(r, (err, n) => {
    if (err) {
      return cb(err, null);
    }
    cb(null, new Date(n! * 1000));
  });
}

export function decodeArray<T> (r: Reader, itemReader: (cb: (err: any, item: T | null) => void) => void, cb: (err: any, items: T[] | null) => void): void {
  decodeUvarint(r, (err, n) => {
    if (err) {
      return cb(err, null);
    }
    if (n!.gt(MAX_ARRAY_SIZE)) {
      return cb(new Error('refusing to decode more than 255 array items'), null);
    }
    const count = n!.toNumber();
    const items: T[] = [];
    const readItem = (i: number) => {
      if (i === count) {
        return cb(null, items);
      }
      itemReader((err, item) => {
        if (err) {
          return cb(err, null);
        }
        items.push(item!);
        readItem(i + 1);
      });
    };
    readItem(0);
  });
}
