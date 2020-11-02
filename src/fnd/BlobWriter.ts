import {IOCallback, Writer} from '../io/types';
import FootnoteClient from './FootnoteClient';

/**
 * A [[Writer]] that writes data to a Footnote blob via gRPC.
 * Users must first check-out a blob via [[FootnoteClient.checkout]]
 * to receive a txId. Blob updates made via [[BlobWriter]] must
 * be committed separately.
 */
export default class BlobWriter implements Writer {
  private readonly client: FootnoteClient;

  private readonly txId: number;

  private offset: number;

  /**
   * Constructs a new BlobWriter.
   *
   * @param client - A gRPC write stream. Returned by [[FootnoteClient.createWriteStream]].
   * @param txId - The transaction ID of the blob being modified. Returned by [[FootnoteClient.checkout]].
   * @param offset - The offset to start writing at.
   */
  constructor (client: FootnoteClient, txId: number, offset = 0) {
    this.client = client;
    this.txId = txId;
    this.offset = offset;
  }

  write (buf: Buffer, cb: IOCallback): void {
    this.client.writeAt(this.txId, this.offset, buf)
      .then((res) => {
        const bytesWritten = res.getByteswritten();
        const writeErr = res.getWriteerr();
        this.offset += bytesWritten;
        cb(writeErr ? new Error(`Error while writing: ${writeErr}`) : null, bytesWritten);
      }, (err) => cb(err, 0));
  }
}
