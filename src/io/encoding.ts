import {IOCallback, Writer} from './types';
import {chainIO, chainWrites} from './util';
import * as Long from 'long';

export function encodeUint8 (w: Writer, n: number, cb: IOCallback): void {
  if (n < 0 || n > 255) {
    throw new Error('number is not a uint8');
  }
  w.write(Buffer.from([n]), cb);
}

export function encodeUint8Sync (n: number): Buffer {
  if (n < 0 || n > 255) {
    throw new Error('number is not a uint8');
  }
  return Buffer.from([n]);
}

export function encodeUint64 (w: Writer, n: number, cb: IOCallback): void {
  if (n < 0) {
    throw new Error('number is not a uint64');
  }
  const numBytes = Buffer.alloc(4);
  numBytes.writeUInt32BE(n, 0);
  chainWrites(
    w,
    cb,
    Buffer.alloc(4),
    numBytes,
  );
}

export function encodeUint64Sync (n: number): Buffer {
  const numBytes = Buffer.alloc(4);
  numBytes.writeUInt32BE(n, 0);
  return Buffer.concat([
    Buffer.alloc(4),
    numBytes,
  ]);
}

export function encodeUint32 (w: Writer, n: number, cb: IOCallback): void {
  if (n < 0) {
    throw new Error('number is not a uint32');
  }
  const numBytes = Buffer.alloc(4);
  numBytes.writeUInt32BE(n, 0);
  w.write(numBytes, cb);
}

export function encodeUint32Sync (n: number): Buffer {
  if (n < 0) {
    throw new Error('number is not a uint32');
  }
  const numBytes = Buffer.alloc(4);
  numBytes.writeUInt32BE(n, 0);
  return numBytes;
}

export function encodeUvarint (w: Writer, n: number, cb: IOCallback): void {
  w.write(encodeUvarintSync(n), cb);
}

export function encodeUvarintSync (n: number): Buffer {
  const buf = Buffer.alloc(10);
  let position = 0;
  let lNum = Long.fromNumber(n).toUnsigned();
  while (lNum.and(~0x7f).greaterThan(Long.ZERO)) {
    buf[position] = lNum.and(0xff).or(0x80).toNumber();
    lNum = lNum.shiftRightUnsigned(7);
    position++;
  }
  buf[position] = lNum.toNumber();
  return buf.slice(0, position + 1);
}

export function encodeFixedBytes (w: Writer, buf: Buffer, cb: IOCallback): void {
  return w.write(buf, cb);
}

export function encodeVariableBytes (w: Writer, buf: Buffer, cb: IOCallback): void {
  chainIO(
    cb,
    (cb) => encodeUvarint(w, buf.length, cb),
    (cb) => encodeFixedBytes(w, buf, cb),
  );
}

export function encodeVariableBytesSync (buf: Buffer): Buffer {
  return Buffer.concat([
    encodeUvarintSync(buf.length),
    buf,
  ]);
}

export function encodeString (w: Writer, str: string, cb: IOCallback): void {
  encodeVariableBytes(w, Buffer.from(str, 'utf-8'), cb);
}

export function encodeStringSync (str: string): Buffer {
  return encodeVariableBytesSync(Buffer.from(str, 'utf-8'));
}

export function encodeTimestamp (w: Writer, date: Date, cb: IOCallback): void {
  encodeUint32(w, date.getTime() / 1000, cb);
}

export function encodeTimestampSync (date: Date): Buffer {
  return encodeUint32Sync(date.getTime() / 1000);
}

export function encodeArray<T> (w: Writer, itemWriter: (item: T, cb: IOCallback) => void, items: T[], cb: IOCallback): void {
  encodeUvarint(w, items.length, (err, n) => {
    if (err) {
      return cb(err, n);
    }
    let written = 0;
    const doWrite = (i: number) => {
      if (i === items.length) {
        return cb(null, written);
      }

      itemWriter(items[i], (err, n) => {
        written += n;
        if (err) {
          return cb(err, written);
        }
        doWrite(i + 1);
      });
    };
    doWrite(0);
  });
}