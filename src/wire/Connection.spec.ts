import {Connection, decodeConnection} from './Connection';
import {assert} from 'chai';
import {BufferView} from "../io/BufferView";

describe.only('Connection', () => {
  it('should encode and decode', async () => {
    const conn = new Connection(
      1,
      Buffer.alloc(4),
      'bob',
      '',
    );

    const connBuf = await conn.toBytes();
    const decoded = await getDecodedPost(connBuf);

    assert.equal(conn.tld, decoded.tld);
    assert.equal(null, decoded.subdomain);
  });
});

async function getDecodedPost(buf: Buffer): Promise<Connection> {
  return new Promise((resolve, reject) => {
    const reader = new BufferView(buf);

    decodeConnection(reader, 1, Buffer.alloc(4), (err, conn) => {
      if (err || !conn) return reject(err);

      resolve(conn);
    });
  })
}
