import {createRefhash} from './refhash';
import {promisify} from 'util';
import {decodeEnvelope} from './Envelope';
import {BufferView} from '../io/BufferView';
import {assert} from 'chai';

describe('refhash', () => {
  it('should generate correct refhashes', async () => {
    const inputs: { file: string, hash: string }[] = [
      {
        file: 'post.bin',
        hash: 'f2ec968746d980500ad2f0c43d8c330cc24658401b6ffeead7c6c5e59fda8f0b',
      },
      {
        file: 'post-adata.bin',
        hash: '097880388f0d58d907464960482439270c98a77bad97afd83f4ca3fc37aef231',
      },
      {
        file: 'follow.bin',
        hash: '64d4cae5bc504e0e107ce385980e3e2f3ebb38096278793b42f06ebf0d8b5191',
      },
      {
        file: 'block.bin',
        hash: '23f7592584e1b5abd103be21c8f7dc8623bda017df55df968d2d657dfa900c4c',
      },
      {
        file: 'media.bin',
        hash: 'ae4902f8d37ddc3182ae0334db25d56a5e0fd379a8a0a46d39453c506920509d',
      },
      {
        file: 'like.bin',
        hash: '7dde58287dc6dab083e7b4c9c2f3805af6091a5b27d95729deb250052e5d5592',
      },
      {
        file: 'pin.bin',
        hash: '26efb701890851cc70f76c12367f1c7710f69b6d1967e9647ba08bee8c24b689',
      },
      {
        file: 'unknown.bin',
        hash: 'a1e6925bac78e22d15f7fe7ce7372cc3ae1e67733cea5ebc8f7b0c85755aff57',
      },
    ];
    // const pDecodeEnvelope = promisify(decodeEnvelope);

    // for (const input of inputs) {
    //   const file = await readTestData(input.file);
    //   const envelope = await pDecodeEnvelope(new BufferView(file));
    //   const refhash = await createRefhash(envelope!, 'testsub', 'testtld');
    //   assert.equal(refhash.toString('hex'), input.hash);
    // }
  });
});
