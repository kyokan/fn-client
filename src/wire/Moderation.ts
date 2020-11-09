import {IOCallback, Reader, Writer} from '../io/types';
import {decodeVariableBytes} from '../io/decoding';
import {Message} from './Message';
import {chainIO} from "../io/util";
import {encodeVariableBytes} from "../io/encoding";

/**
 * Possible subtypes for a [[Moderation]] message. A
 * [[Moderation]] message whose subtype is not one of the
 * spec-defined types will have a type of
 * [[ModerationType.UNKNOWN]].
 */
export enum ModerationType {
  LIKE = 'LIKE',
  PIN = 'PIN',
  UNKNOWN = 'UNKNOWN'
}

export class Moderation extends Message {
  public static readonly TYPE = Buffer.from([0x4D, 0x4F, 0x44]);

  public static readonly LIKE_SUBTYPE = Buffer.from([0x4C, 0x00, 0x00, 0x00]);

  public static readonly PIN_SUBTYPE = Buffer.from([0x50, 0x00, 0x00, 0x00]);

  public readonly reference: Buffer;

  constructor (version: number, subtype: Buffer, reference: Buffer) {
    super(Moderation.TYPE, version, subtype);
    this.reference = reference;
  }

  public moderationType (): ModerationType {
    if (this.subtype.equals(Moderation.LIKE_SUBTYPE)) {
      return ModerationType.LIKE;
    }
    if (this.subtype.equals(Moderation.PIN_SUBTYPE)) {
      return ModerationType.PIN;
    }
    return ModerationType.UNKNOWN;
  }
}

/**
 * Encodes a Moderation message into a Writer.
 *
 * @param w
 * @param mod
 * @param cb
 */
export function encodeModeration (w: Writer, mod: Moderation, cb: IOCallback) {
  chainIO(
    cb,
    (cb) => encodeVariableBytes(w, mod.reference, cb),
  );
}

/**
 * Decodes a Moderation message from a Reader.
 *
 * @param r
 * @param version
 * @param subtype
 * @param cb
 */
export function decodeModeration (r: Reader, version: number, subtype: Buffer, cb: (err: any, mod: Moderation | null) => void): void {
  decodeVariableBytes(r, (err, b) => {
    if (err) {
      return cb(err, null);
    }
    cb(null, new Moderation(
      version,
      subtype,
      b!,
    ),);
  });
}
