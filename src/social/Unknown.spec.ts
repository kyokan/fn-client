import {assertEnvelope} from '../testutil/testData';
import { assert } from 'chai';
import {Unknown} from './Unknown';

describe('Unknown', () => {
  it('should encode and decode', async () => {
    await assertEnvelope('unknown.bin', (envelope) => {
      assert.instanceOf(envelope.message, Unknown);
    });
  });
});