import {IOCallback, Reader, Writer} from '../io/types';
import {chain, chainIO} from '../io/util';
import {decodeString, decodeVariableBytes} from '../io/decoding';
import {Message} from './Message';
import {encodeString, encodeVariableBytes} from '../io/encoding';

export enum RefType {
  REPLY = 'REPLY',
  TOPIC = 'TOPIC',
  UNKNOWN = 'UNKNOWN',
}

export const RefTypeValue = {
  [RefType.REPLY]: Buffer.from('FF', 'hex'),
  [RefType.TOPIC]: Buffer.from('FE', 'hex'),
  [RefType.UNKNOWN]: Buffer.from('00', 'hex'),
};

export const RefTypeHex: {
  [hex: string]: RefType;
} = {
  ff: RefType.REPLY,
  fe: RefType.TOPIC,
  '00': RefType.UNKNOWN,
};

export type VideoAdditionData = {
  video?: string | null;
  thumbnail?: string | null;
}

export class Post extends Message {
  public static readonly TYPE = Buffer.from('PST', 'utf-8');
  public static readonly LINK_SUBTYPE = Buffer.concat([
    Buffer.from('L', 'utf-8'),
    Buffer.alloc(3),
  ]) ;
  public static readonly VIDEO_SUBTYPE = Buffer.concat([
    Buffer.from('VID', 'utf-8'),
    Buffer.alloc(1),
  ]) ;

  public readonly body: string;

  public readonly title: string | null;

  public readonly reference: Buffer | null;

  public readonly refType: RefType | null;

  public readonly videoUrl: string;

  public readonly thumbnailUrl: string;

  constructor (
    version: number,
    subtype: Buffer,
    body: string,
    title: string | null,
    reference: Buffer | null = null,
    refType: RefType | null = null,
    additionalData?: VideoAdditionData,
  ) {
    super(Post.TYPE, version, subtype);
    this.body = body;
    this.title = title;
    this.reference = reference;
    this.refType = refType;
    this.videoUrl = additionalData?.video || '';
    this.thumbnailUrl = additionalData?.thumbnail || '';
  }
}

/**
 * Encodes a Post into a Writer.
 *
 * @param w
 * @param post
 * @param cb
 */
export function encodePost (w: Writer, post: Post, cb: IOCallback): void {
  const {reference, refType, subtype} = post;
  let referenceBuf = Buffer.alloc(0);

  if (reference) {
    if (refType) {
      referenceBuf = Buffer.concat([
        RefTypeValue[refType],
        reference,
      ]);
    } else {
      referenceBuf = Buffer.concat([
        RefTypeValue.UNKNOWN,
        reference,
      ])
    }
  }

  chainIO(
    cb,
    (cb) => encodeString(w, post.body, cb),
    (cb) => encodeString(w, post.title || '', cb),
    (cb) => encodeVariableBytes(w, referenceBuf, cb),
    (cb) => encodeString(w, post.videoUrl, cb),
    (cb) => encodeString(w, post.thumbnailUrl, cb),
  );
}

/**
 * Decodes a Post from a Reader.
 *
 * @param r
 * @param version
 * @param subtype
 * @param cb
 */
export function decodePost (r: Reader, version: number, subtype: Buffer, cb: (err: any, message: Post | null) => void): void {
  let body: string;
  let title: string | null;
  let reference: Buffer | null;
  let refType: RefType | null;
  let videoUrl: string | null;
  let thumbnailUrl: string | null;

  chain(
    (err) => {
      if (err) {
        return cb(err, null);
      }
      cb(null, new Post(
        version,
        subtype,
        body,
        title,
        reference,
        refType,
        {
          video: videoUrl,
          thumbnail: thumbnailUrl,
        },
      ));
    },
    (cb) => decodeString(r, (err, b) => {
      if (err) {
        return cb(err);
      }
      body = b!;
      cb(null);
    }),
    (cb) => decodeString(r, (err, b) => {
      if (err) {
        return cb(err);
      }
      title = b!.length > 0 ? b! : null;
      cb(null);
    }),
    (cb) => decodeVariableBytes(r, (err, b) => {
      if (err === 'EOF') {
        reference = null;
        return cb(null);
      } else if (err) {
        return cb(err);
      }

      reference = b!.length > 0 ? b!.slice(1) : null;
      const refTypeHex = b!.length > 0 ? b!.slice(0, 1).toString('hex') : '00';
      refType = b!.length > 0 ? RefTypeHex[refTypeHex] : null;

      cb(null);
    }),
    (cb) => decodeString(r, (err, b) => {
      if (err === 'EOF') {
        reference = null;
        return cb(null);
      } else if (err) {
        return cb(err);
      }

      videoUrl = b!.length > 0 ? b! : null;

      cb(null);
    }),
    (cb) => decodeString(r, (err, b) => {
      if (err === 'EOF') {
        reference = null;
        return cb(null);
      } else if (err) {
        return cb(err);
      }

      thumbnailUrl = b!.length > 0 ? b! : null;

      cb(null);
    }),

  );
}
