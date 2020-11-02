import {decodeSubdomain, encodeSubdomain, Subdomain} from './Subdomain';
import {BufferView} from '../io/BufferView';
import {MutableBuffer} from '../io/MutableBuffer';
import {readTestData} from '../testutil/testData';
import {assert} from 'chai';

describe('Subdomains', () => {
  it('should encode and decode when the name is padded', async () => {
    await assertSubdomain('subdomain-padded.bin', (sub) => {
      assert.equal(sub.name, 'whatever');
      assert.equal(sub.index, 3);
    });
  });

  it('should encode and decode when the name is unpadded', async () => {
    await assertSubdomain('subdomain-unpadded.bin', (sub) => {
      assert.equal(sub.name, 'whatever1234567');
      assert.equal(sub.index, 255)
    });
  });
});

async function assertSubdomain (filename: string, additionalChecks?: (sub: Subdomain) => void): Promise<void> {
  const expBuf = await readTestData(filename);
  const r = new BufferView(expBuf);
  const envelope = await new Promise<Subdomain>((resolve, reject) => decodeSubdomain(r, (err, subdomain) => {
    if (err) {
      return reject(err);
    }
    resolve(subdomain!);
  }));
  const actBuf = new MutableBuffer();
  await new Promise((resolve, reject) => encodeSubdomain(actBuf, envelope, (err, _) => {
    if (err) {
      return reject(err);
    }
    resolve();
  }));
  assert.equal(actBuf.bytes().toString('hex'), expBuf.toString('hex'));
  if (additionalChecks) {
    additionalChecks(envelope);
  }
}