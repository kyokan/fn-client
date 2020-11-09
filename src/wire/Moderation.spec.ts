import {assertEnvelope} from '../testutil/testData';
import {assert} from 'chai';
import {Moderation, ModerationType} from './Moderation';

describe('Moderation', () => {
  it('should encode and decode likes', async () => {
    await assertEnvelope('like.bin', (envelope) => {
      assert.instanceOf(envelope.message, Moderation);
      assert.equal((envelope.message as Moderation).moderationType(), ModerationType.LIKE);
    });
  });

  it('should encode and decode pins', async () => {
    await assertEnvelope('pin.bin', (envelope) => {
      assert.instanceOf(envelope.message, Moderation);
      assert.equal((envelope.message as Moderation).moderationType(), ModerationType.PIN);
    });
  });
});