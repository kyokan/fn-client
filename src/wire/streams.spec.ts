import {readTestData} from '../testutil/testData';
import {iterateAllEnvelopes} from './streams';
import {BufferView} from '../io/BufferView';
import {Envelope} from './Envelope';
import {assert} from 'chai';
import {Post} from './Post';
import {Moderation} from './Moderation';
import {Connection} from './Connection';

describe('iterateAllEnvelopes', () => {
  it('should read envelopes until EOF, skipping empty bytes', async () => {
    const input = Buffer.concat([
      Buffer.alloc(32),
      await readTestData('post.bin'),
      Buffer.alloc(32),
      await readTestData('like.bin'),
      await readTestData('follow.bin'),
      Buffer.alloc(32),
    ]);

    const envelopes: Envelope[] = [];
    await new Promise((resolve, reject) => iterateAllEnvelopes(new BufferView(input), (err, envelope) => {
      if (err) {
        reject(err);
        return false;
      }
      if (envelope === null) {
        resolve();
        return false;
      }
      envelopes.push(envelope);
      return true;
    }));

    assert.equal(envelopes.length, 3);
    assert.instanceOf(envelopes[0].message, Post);
    assert.instanceOf(envelopes[1].message, Moderation);
    assert.instanceOf(envelopes[2].message, Connection);
  });

  it('should cancel reading when the callback returns false', async () => {
    const input = Buffer.concat([
      Buffer.alloc(32),
      await readTestData('post.bin'),
      Buffer.alloc(32),
      await readTestData('like.bin'),
    ]);

    const envelopes: Envelope[] = [];
    await new Promise((resolve, reject) => iterateAllEnvelopes(new BufferView(input), (err, envelope) => {
      if (err) {
        reject(err);
        return false;
      }
      if (envelope === null) {
        resolve();
        return false;
      }
      envelopes.push(envelope);
      const shouldContinue = envelopes.length < 1;
      if (!shouldContinue) {
        resolve();
      }
      return shouldContinue;
    }));

    assert.equal(envelopes.length, 1);
    assert.instanceOf(envelopes[0].message, Post);
  });
});