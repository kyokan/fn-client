import {assert} from 'chai';
import {ZERO_HASH} from "../io/util";
import {decodeEnvelope, encodeEnvelope, Envelope} from "./Envelope";
import {Post} from "./Post";
import {MutableBuffer} from "../io/MutableBuffer";
import {BufferView} from "../io/BufferView";

describe('Envelope', () => {
  it('should encode and decode envelope', async () => {
    const post = new Post(
      1,
      Buffer.alloc(4),
      'this is a test post',
      'this is a test title',
      ZERO_HASH,
    );
    const env = new Envelope(
      0,
      new Date(),
      post,
    );

    const encoded = await env.toBytes();
    const decoded = await getDecodedEnv(encoded);

    assert.equal(env.nameIndex, decoded.nameIndex);
    assert.equal(
      Math.floor(env.timestamp.getTime()/1000),
      decoded.timestamp.getTime()/1000,
    );
    assert.equal(env.message.type.toString('utf-8'), decoded.message.type.toString('utf-8'));
    assert.equal(env.message.subtype.toString('utf-8'), decoded.message.subtype.toString('utf-8'));
    // @ts-ignore
    assert.equal(env.message.body, decoded.message.body);
    // @ts-ignore
    assert.equal(env.message.title, decoded.message.title);
  });
});

async function getDecodedEnv(buf: Buffer): Promise<Envelope> {
  return new Promise((resolve, reject) => {
    const reader = new BufferView(buf);

    decodeEnvelope(reader, (err, env) => {
      if (err || !env) return reject(err);
      resolve(env);
    })
  });
}
