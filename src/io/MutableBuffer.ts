import {IOCallback, Writer} from './types';

/**
 * MutableBuffer is a variable-sized buffer of bytes. Note
 * that MutableBuffer does not copy the Buffer
 * instances passed to write.
 */
export class MutableBuffer implements Writer {
  private bufs: Buffer[] = [];

  private len: number = 0;

  /**
   * Constructs a MutableBuffer instance.
   *
   * @param initialBuf - The initial data to populate the buffer with.
   */
  constructor (initialBuf?: Buffer) {
    if (initialBuf) {
      this.doWrite(initialBuf);
    }
  }

  /**
   * Returns a single Buffer instance containing the data
   * written to the MutableBuffer. Does not reset the MutableBufer.
   */
  public bytes (): Buffer {
    return Buffer.concat(this.bufs);
  }

  /**
   * The length of the data written to the Buffer.
   */
  public length (): number {
    return this.len;
  }

  /**
   * Resets the MutableBuffer by setting its length to zero.
   */
  public reset (): void {
    this.bufs = [];
    this.len = 0;
  }

  public write (buf: Buffer, cb: IOCallback): void {
    this.doWrite(buf);
    cb(null, buf.length);
  }

  private doWrite (buf: Buffer): void {
    if (buf.length === 0) {
      return;
    }
    this.bufs.push(buf);
    this.len += buf.length;
  }
}