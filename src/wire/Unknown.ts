import {IOCallback, Reader, Writer} from '../io/types';
import {readAll} from '../io/util';
import {Message} from './Message';

/**
 * A [[Message]] of unknown type. Note that an [[Envelope]] containing
 * an [[Unknown]] will always have an empty [[Envelope.additionalData]]
 * field.
 */
export class Unknown extends Message {
  /**
   * The contents of the message.
   */
  public readonly content: Buffer;

  constructor (type: Buffer, version: number, subtype: Buffer, content: Buffer) {
    super(type, version, subtype);
    this.content = content;
  }
}

export function encodeUnknown (w: Writer, unk: Unknown, cb: IOCallback): void {
  w.write(unk.content, cb);
}

export function decodeUnknown (r: Reader, type: Buffer, version: number, subtype: Buffer, cb: (err: any, unk: Unknown | null) => void): void {
  readAll(r, (err, data) => {
    if (err) {
      return cb(err, null);
    }
    cb(null, new Unknown(
      type,
      version,
      subtype,
      data!,
    ));
  });
}