/**
 * Callback for I/O operations. Consumes an error, and the number
 * of bytes read or written.
 */
export type IOCallback = (err: any, n: number) => void;

/**
 * Writer wraps a writeable stream of bytes.
 * The callback's values have identical semantics to
 * Golang's [io.Writer](https://golang.org/pkg/io/#Writer)
 * interface.
 */
export interface Writer {
  /**
   * Writes buf to the writer, calling cb with any error
   * encountered and the number of bytes written.
   *
   * @param buf
   * @param cb
   */
  write (buf: Buffer, cb: IOCallback): void
}

/**
 * Reader wraps a readable stream of bytes. The
 * callbacks' values have almost identical semantics to
 * Golang's [io.Reader](https://golang.org/pkg/io/#Reader)
 * interface, except that the callback will always be called
 * with an error if the number of bytes read is not equal to
 * buf.length. End-of-file conditions will pass an [[EOF]] to
 * the callback.
 */
export interface Reader {
  /**
   * Reads buf from the reader, calling cb with any error
   * encountered and the number of bytes read.
   *
   * @param buf
   * @param cb
   */
  read (buf: Buffer, cb: IOCallback): void
}

/**
 * Hard-coded sigil for end-of-file errors. Passed to
 * [[IOCallback]]s when an end-of-file condition is reached.
 */
export const EOF = 'EOF';