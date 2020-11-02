import {encodeEnvelopeMessage, Envelope} from './Envelope';
const blake2b = require('blake2b');
import {encodeTimestampSync, encodeUint8Sync} from '../io/encoding';
import {MutableBuffer} from '../io/MutableBuffer';
import {ZERO_BUFFER} from '../io/util';
import {parseDomain, serializeDomain} from "./name";

export async function createRefhash (envelope: Envelope, subdomain: string, tld: string): Promise<Buffer> {
  const h = blake2b(32);
  h.update(envelope.message.type);
  h.update(encodeUint8Sync(envelope.message.version));
  h.update(envelope.message.subtype);
  h.update(encodeTimestampSync(envelope.timestamp));
  const msgBuf = new MutableBuffer();
  await new Promise((resolve, reject) => encodeEnvelopeMessage(msgBuf, envelope, (err, _) => {
    if (err) {
      return reject(err);
    }
    resolve();
  }));
  h.update(msgBuf.bytes());
  h.update(envelope.additionalData ? envelope.additionalData : ZERO_BUFFER);
  h.update(Buffer.from(subdomain, 'utf-8'));
  h.update(Buffer.from(tld, 'utf-8'));

  const name = serializeDomain({ subdomain, tld });
  const nameBuf = Buffer.from(name, 'utf-8');
  return Buffer.concat([
    Buffer.from(h.digest()),
    nameBuf,
  ]);
}

export function parseRefhash (refhash: Buffer | string): { refhash: Buffer; tld: string; subdomain?: string} {
  const hash = typeof refhash === 'string' ? Buffer.from(refhash, 'hex') : refhash;
  const domain = hash.slice(32).toString('utf-8');
  return {
    refhash: hash.slice(0, 32),
    ...parseDomain(domain),
  };
}
