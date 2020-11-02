import {assertEnvelope} from '../testutil/testData';
import {assert} from 'chai';
import {Media} from './Media';

describe('Media', () => {
  it('should encode and decode', async () => {
    await assertEnvelope('media.bin', (envelope) => {
      assert.instanceOf(envelope.message, Media);
    });
  });
});