import {IOCallback, Reader, Writer} from '../io/types';
import {decodeFixedBytes, decodeTimestamp, decodeUint8, decodeVariableBytes} from '../io/decoding';
import {chain, chainIO, readAll, ZERO_BUFFER} from '../io/util';
import {BufferView} from '../io/BufferView';
import {Message} from './Message';
import {decodePost, encodePost, Post} from './Post';
import {Connection, decodeConnection, encodeConnection} from './Connection';
import {decodeModeration, encodeModeration, Moderation} from './Moderation';
import {decodeUnknown, encodeUnknown, Unknown} from './Unknown';
import {MutableBuffer} from '../io/MutableBuffer';
import {encodeFixedBytes, encodeTimestamp, encodeUint8, encodeVariableBytes} from '../io/encoding';

export class Envelope {
  public nameIndex: number;

  public timestamp: Date;

  public message: Message;

  public additionalData: Buffer | null;

  constructor (nameIndex: number, timestamp: Date, message: Message, additionalData: Buffer | null = null) {
    this.nameIndex = nameIndex;
    this.timestamp = timestamp;
    this.message = message;
    this.additionalData = additionalData;
  }

  async toBytes(): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const writer =  new MutableBuffer();

      encodeEnvelope(writer, this, (err, offset) => {
        if (err) {
          return reject(err);
        }

        resolve(writer.bytes());
      });
    });
  }

  async toHex(): Promise<string> {
    const bytes = await this.toBytes();
    return bytes.toString('hex');
  }

}

/**
 * Encodes an Envelope into a Writer with its byte length prefix.
 *
 * @param w
 * @param envelope
 * @param cb
 */
export function encodeEnvelope (w: Writer, envelope: Envelope, cb: IOCallback) {
  if (envelope.message.type.length !== 3) {
    throw new Error('message type must be 3 bytes long');
  }
  if (envelope.message.version < 0 || envelope.message.version > 255) {
    throw new Error('message version must fit in a uint8');
  }
  if (envelope.message.subtype.length !== 4) {
    throw new Error('message subtype must be 4 bytes long');
  }

  const buf = new MutableBuffer();
  chainIO(
    (err, n) => {
      if (err) {
        return cb(err, n);
      }
      encodeVariableBytes(w, buf.bytes(), cb);
    },
    (cb) => encodeUint8(buf, envelope.message.version, cb),
    (cb) => encodeFixedBytes(buf, envelope.message.type, cb),
    (cb) => encodeFixedBytes(buf, envelope.message.subtype, cb),
    (cb) => encodeUint8(buf, envelope.nameIndex, cb),
    (cb) => encodeTimestamp(buf, envelope.timestamp, cb),
    (cb) => encodeEnvelopeMessage(buf, envelope, cb),
    (cb) => encodeFixedBytes(buf, envelope.additionalData || ZERO_BUFFER, cb),
  );
}

/**
 * Encodes a [[Message]] contained within an [[Envelope]].
 *
 * @param w
 * @param envelope
 * @param cb
 */
export function encodeEnvelopeMessage (w: Writer, envelope: Envelope, cb: IOCallback) {
  switch (envelope.message.type.toString('hex')) {
    case Post.TYPE.toString('hex'):
      encodePost(w, envelope.message as Post, cb);
      break;
    case Connection.TYPE.toString('hex'):
      encodeConnection(w, envelope.message as Connection, cb);
      break;
    case Moderation.TYPE.toString('hex'):
      encodeModeration(w, envelope.message as Moderation, cb);
      break;
    default:
      if (!(envelope.message instanceof Unknown)) {
        return cb(new Error('expected an unknown message'), 0);
      }
      encodeUnknown(w, envelope.message as Unknown, cb);
      break;
  }
}

/**
 * Decodes an Envelope from a Reader after reading its byte length
 * prefix.
 *
 * @param r
 * @param cb
 */
export function decodeEnvelope (r: Reader, cb: (err: any, envelope: Envelope | null) => void) {
  decodeVariableBytes(r, (err, b) => {
    if (err) {
      return cb(err, null);
    }
    if (b!.length === 0) {
      return cb(new Error('zero-length envelope'), null);
    }
    decodeEnvelopeBuffer(new BufferView(b!), cb);
  });
}

/**
 * Decodes an Envelope from a Reader without readings its byte length
 * prefix. The underlying Reader passed to this method must have a
 * bounded length otherwise the program will run out of memory.
 *
 * @param r
 * @param cb
 */
export function decodeEnvelopeBuffer (r: Reader, cb: (err: any, envelope: Envelope | null) => void) {
  let msgType: Buffer;
  let msgVersion: number;
  let msgSubtype: Buffer;
  let nameIndex: number;
  let timestamp: Date;
  let message: Message;
  let aData: Buffer;
  chain(
    (err) => {
      if (err) {
        return cb(err, null);
      }
      cb(null, new Envelope(
        nameIndex,
        timestamp,
        message,
        aData,
      ));
    },
    (cb) => decodeUint8(r, (err, n) => {
      if (err) {
        return cb(err);
      }
      msgVersion = n!;
      cb(null);
    }),
    (cb) => decodeFixedBytes(r, 3, (err, b) => {
      if (err) {
        return cb(err);
      }
      msgType = b!;
      cb(null);
    }),
    (cb) => decodeFixedBytes(r, 4, (err, b) => {
      if (err) {
        return cb(err);
      }
      msgSubtype = b!;
      cb(null);
    }),
    (cb) => decodeUint8(r, (err, n) => {
      if (err) {
        return cb(err);
      }
      nameIndex = n!;
      cb(null);
    }),
    (cb) => decodeTimestamp(r, (err, ts) => {
      if (err) {
        return cb(err);
      }
      timestamp = ts!;
      cb(null);
    }),
    (cb) => {
      switch (msgType.toString('hex')) {
        case Post.TYPE.toString('hex'):
          decodePost(r, msgVersion, msgSubtype, (err, post) => {
            if (err) {
              return cb(err);
            }
            message = post!;
            cb(null);
          });
          break;
        case Connection.TYPE.toString('hex'):
          decodeConnection(r, msgVersion, msgSubtype, (err, connection) => {
            if (err) {
              return cb(err);
            }
            message = connection!;
            cb(null);
          });
          break;
        case Moderation.TYPE.toString('hex'):
          decodeModeration(r, msgVersion, msgSubtype, (err, mod) => {
            if (err) {
              return cb(err);
            }
            message = mod!;
            cb(null);
          });
          break;
        default:
          decodeUnknown(r, msgType, msgVersion, msgSubtype, (err, unk) => {
            if (err) {
              return cb(err);
            }
            message = unk!;
            cb(null);
          });
          break;
      }
    },
    (cb) => {
      readAll(r, (err, data) => {
        if (err) {
          return cb(err);
        }
        aData = data!;
        cb(null);
      });
    },
  );
}
