import {BLOB_SIZE} from './constants';
import HandshakeLayerTwoClient from './HandshakeLayerTwoClient';
import {EOF, Reader} from '../io/types';

/**
 * A Reader that reads blob data. Should generally be
 * paired with a [[BufferedReader]] for best performance.
 */
export class BlobReader implements Reader {
  private readonly name: string;

  private readonly client: HandshakeLayerTwoClient;

  private offset: number = 0;

  /**
   * Constructs a new ReadableBlobStream.
   *
   * @param name - The name you want to stream.
   * @param client - A HandshakeLayerTwoClient instance.
   */
  constructor (name: string, client: HandshakeLayerTwoClient) {
    this.name = name;
    this.client = client;
  }

  seek (offset: number) {
    this.offset = offset;
  }

  read (buf: Buffer, cb: (err: any, n: number) => void): void {
    let len = buf.length;
    if (this.offset >= BLOB_SIZE) {
      return cb(EOF, 0);
    }
    if (this.offset + len > BLOB_SIZE) {
      len = BLOB_SIZE - this.offset;
    }
    this.client.readAt(this.name, this.offset, len).then((res) => {
      this.offset += len;
      res.copy(buf);
      cb(res.length < buf.length ? EOF : null, res.length);
    }, (err) => cb(err, 0));
  }
}
