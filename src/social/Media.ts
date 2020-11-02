import {Message} from './Message';
import {IOCallback, Reader, Writer} from '../io/types';
import {chain, chainIO} from '../io/util';
import {encodeString, encodeVariableBytes} from '../io/encoding';
import {decodeString, decodeVariableBytes} from '../io/decoding';

export class Media extends Message {
  public static readonly TYPE = Buffer.from([0x4D, 0x44, 0x41]);

  public readonly filename: string;

  public readonly mimeType: string;

  public readonly content: Buffer;

  constructor (version: number, subtype: Buffer, filename: string, mimeType: string, content: Buffer) {
    super(Media.TYPE, version, subtype);
    this.filename = filename;
    this.mimeType = mimeType;
    this.content = content;
  }
}

export function encodeMedia (w: Writer, med: Media, cb: IOCallback) {
  chainIO(
    cb,
    (cb) => encodeString(w, med.filename, cb),
    (cb) => encodeString(w, med.mimeType, cb),
    (cb) => encodeVariableBytes(w, med.content, cb),
  );
}

export function decodeMedia (r: Reader, version: number, subtype: Buffer, cb: (err: any, message: Media | null) => void): void {
  let filename: string;
  let mimeType: string;
  let content: Buffer;
  chain(
    (err) => {
      if (err) {
        return cb(err, null);
      }
      cb(null, new Media(
        version,
        subtype,
        filename,
        mimeType,
        content,
      ));
    },
    (cb) => decodeString(r, (err, b) => {
      if (err) {
        return cb(err);
      }
      filename = b!;
      cb(null);
    }),
    (cb) => decodeString(r, (err, b) => {
      if (err) {
        return cb(err);
      }
      mimeType = b!;
      cb(null);
    }),
    (cb) => decodeVariableBytes(r, (err, b) => {
      if (err) {
        return cb(err);
      }
      content = b!;
      cb(null);
    }),
  );
}