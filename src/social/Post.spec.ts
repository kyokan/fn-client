import {assertEnvelope} from '../testutil/testData';
import {assert} from 'chai';
import {decodePost, encodePost, Post} from './Post';
import {ZERO_HASH} from "../io/util";
import {MutableBuffer} from "../io/MutableBuffer";
import {BufferView} from "../io/BufferView";

describe('Post', () => {
  it('should encode and decode', async () => {
    const post = new Post(
      1,
      Buffer.alloc(4),
      'this is a test post',
      'this is a test title',
      ZERO_HASH,
    );

    const postBuf = await getPostEncoding(post);
    const decoded = await getDecodedPost(postBuf);

    assert.equal(post.body, decoded.body);
    assert.equal(post.title, decoded.title);
    assert.deepEqual(post.type, decoded.type);
  });

  it.skip('should encode and decode with additional data', async () => {
    // TODO: this should be tested in decodeEnvelope
  });
});

async function getPostEncoding(post: Post): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const writer =  new MutableBuffer();

    encodePost(writer, post, (err, offset) => {
      if (err) {
        return reject(err);
      }

      resolve(writer.bytes());
    });
  });
}

async function getDecodedPost(buf: Buffer): Promise<Post> {
  return new Promise((resolve, reject) => {
    const reader = new BufferView(buf);

    decodePost(reader, 1, Buffer.alloc(4), (err, post) => {
      if (err || !post) return reject(err);


      resolve(post);
    })
  })
}
