import HandshakeLayerTwoClient from '../h2d/HandshakeLayerTwoClient';
import {Signer} from '../crypto/signer';
import BlobWriter from '../h2d/BlobWriter';
import {encodeEnvelope, Envelope} from './Envelope';
import {sealAndSign} from '../crypto/signatures';

/**
 * EnvelopeWriter is a helper class that is used to
 * write Envelope instances to a blob and commit them
 * when finished. To use this class, first instantiate it,
 * then call open followed by writeEnvelope for each envelope
 * that should be written to the blob. Then, call commit.
 */
export class EnvelopeWriter {
  private readonly client: HandshakeLayerTwoClient;

  private readonly tld: string;

  private readonly signer: Signer;

  private readonly startOffset: number;

  private txId: number = 0;

  private writer: BlobWriter | null = null;

  private committed: boolean = false;

  /**
   * Constructs a new EnvelopeWriter.
   *
   * @param client
   * @param tld - The TLD to be written to.
   * @param signer - A Signer instance to sign the blob's new Merkle root.
   * @param startOffset - The offset at which to start writing.
   */
  constructor (client: HandshakeLayerTwoClient, tld: string, signer: Signer, startOffset: number = 0) {
    this.client = client;
    this.tld = tld;
    this.signer = signer;
    this.startOffset = startOffset;
  }

  /**
   * Opens the blob for writing.
   */
  public async open (): Promise<void> {
    if (this.writer) {
      throw new Error('already opened');
    }
    const txId = await this.client.checkout(this.tld);
    this.txId = txId;
    this.writer = new BlobWriter(this.client, txId, this.startOffset);
  }

  /**
   * Truncates the blob.
   */
  public async truncate (): Promise<void> {
    if (!this.writer) {
      throw new Error('not open');
    }
    if (this.committed) {
      throw new Error('already committed');
    }
    await this.client.truncate(this.txId);
  }

  /**
   * Writes an Envelope to the blob. Must be called after open.
   * Cannot be called after commit.
   *
   * @param envelope - The envelope to writes.
   */
  public writeEnvelope (envelope: Envelope): Promise<void> {
    if (!this.writer) {
      throw new Error('not open');
    }
    if (this.committed) {
      throw new Error('already committed');
    }

    return new Promise((resolve, reject) => encodeEnvelope(this.writer!, envelope, (err, _) => {
      if (err) {
        return reject(err);
      }
      resolve();
    }));
  }

  /**
   * Commits the changes to the blob. Once an EnvelopeWriter has been
   * committed, it shouldn't be used anymore.
   *
   * @param broadcast - Whether or not to broadcast the blob update to the
   * network.
   */
  public async commit (broadcast: boolean = true): Promise<void> {
    if (!this.writer) {
      throw new Error('not open');
    }
    if (this.committed) {
      throw new Error('already committed');
    }
    const merkleRoot = await this.client.preCommit(this.txId);
    const date = new Date();
    const sig = sealAndSign(this.signer, this.tld, date, merkleRoot);
    await this.client.commit(this.txId, date, sig, broadcast);
    this.committed = true;
  }
}
