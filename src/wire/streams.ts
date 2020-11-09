import {EOF, Reader} from '../io/types';
import {decodeEnvelopeBuffer, Envelope} from './Envelope';
import {decodeFixedBytes, decodeVariableBytes} from '../io/decoding';
import {BufferView} from '../io/BufferView';
import {decodeSubdomain, Subdomain, SUBDOMAIN_MAGIC, SUBDOMAIN_RECORD_LEN} from './Subdomain';

/**
 * Reads a single envelope from a Reader. If an envelope length of 0 is
 * encountered, iterateEnvelope will call the callback with a null
 * err and envelope argument in order to facilitate reading from
 * sparse sources.
 *
 * @param r
 * @param cb
 */
export function iterateEnvelope (r: Reader, cb: (err: any, envelope: Envelope | null) => void): void {
  decodeVariableBytes(r, (err, b) => {
    if (err) {
      return cb(err, null);
    }
    if (b!.length === 0) {
      return cb(null, null);
    }
    decodeEnvelopeBuffer(new BufferView(b!), (err, envelope) => {
      if (err) {
        return cb(err, null);
      }
      return cb(null, envelope!);
    });
  });
}

/**
 * Reads all envelopes from a Reader, skipping null bytes until either EOF
 * or an envelope is reached. The callback function is expected to return a
 * boolean signifying whether iteration should continue.
 *
 * @param r
 * @param cb
 */
export function iterateAllEnvelopes (r: Reader, cb: (err: any, envelope: Envelope | null) => boolean) {
  const doIterate = () => iterateEnvelope(r, (err, envelope) => {
    if (err == EOF) {
      return cb(null, null);
    }
    if (err) {
      return cb(err, null);
    }
    if (envelope === null) {
      setImmediate(doIterate);
      return;
    }
    if (cb(null, envelope!)) {
      setImmediate(doIterate);
      return;
    }
  });
  doIterate();
}

/**
 * Reads all envelopes from a Reader, skipping null bytes until either EOF
 * or an envelope is reached. The callback function is expected to return a
 * Promise<boolean> signifying whether iteration should continue.
 *
 * @param r
 * @param cb
 */
export async function asyncIterateAllEnvelopes (r: Reader, cb: (err: any, envelope: Envelope | null) => Promise<boolean>): Promise<void> {
  const doIterate = () => iterateEnvelope(r, async (err, envelope) => {
    if (err == EOF) {
      return cb(null, null);
    }
    if (err) {
      return cb(err, null);
    }
    if (envelope === null) {
      setImmediate(doIterate);
      return;
    }
    if (await cb(null, envelope!)) {
      setImmediate(doIterate);
      return;
    }
  });
  doIterate();
}

/**
 * Determines if a blob is a subdomain blob by reading its first three bytes
 * and comparing them to the subdomain magic bytes.
 *
 * @param r
 * @param cb
 */
export function isSubdomainBlob (r: Reader, cb: (err: any, res: boolean | null) => void) {
  decodeFixedBytes(r, 3, (err, buf) => {
    if (err) {
      return cb(err, null);
    }
    cb(null, buf!.toString('utf-8') === SUBDOMAIN_MAGIC);
  });
}

const EMPTY_SUB_BUF = Buffer.alloc(SUBDOMAIN_RECORD_LEN);

/**
 * Reads a single subdomain from the reader. If the subdomain record consists of
 * all zeroes, will call the callback with a null err and subdomain argument in
 * order to signify the end of the subdomain record section.
 *
 * @param r
 * @param cb
 */
export function iterateSubdomain (r: Reader, cb: (err: any, subdomain: Subdomain | null) => void) {
  decodeFixedBytes(r, SUBDOMAIN_RECORD_LEN, (err, buf) => {
    if (err) {
      return cb(err, null);
    }
    if (buf!.equals(EMPTY_SUB_BUF)) {
      return cb(null, null);
    }
    decodeSubdomain(new BufferView(buf!), cb);
  });
}

/**
 * Reads all subdomains from the reader, stopping on EOF, an error, or when 255
 * subdomains are read. If a subdomain record of all zeroes is encountered,
 * iteration will stop. The callback function is expected to return a
 * boolean signifying whether iteration should continue.
 *
 * @param r
 * @param cb
 */
export function iterateAllSubdomains (r: Reader, cb: (err: any, subdomain: Subdomain | null) => boolean) {
  const doIterate = () => iterateSubdomain(r, (err, subdomain) => {
    if (err == EOF) {
      return cb(null, null);
    }
    if (err) {
      return cb(err, null);
    }
    if (subdomain === null) {
      return;
    }
    if (cb(null, subdomain!)) {
      setImmediate(doIterate);
      return;
    }
  });
  doIterate();
}
