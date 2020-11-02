import secp256k1 from 'secp256k1';

/**
 * An interface used to wrap a private key and
 * generate signatures.
 */
export interface Signer {
  sign (data: Buffer): Buffer
}

/**
 * A [[Signer]] instance that signs hashes using a
 * `secp256k1` private key.
 */
export default class SECP256k1Signer implements Signer {
  private readonly privateKey: Buffer;

  constructor (privateKey: Buffer) {
    this.privateKey = privateKey;
  }

  sign (data: Buffer): Buffer {
    const sig = secp256k1.sign(data, this.privateKey);
    return Buffer.concat([
      Buffer.from([sig.recovery + 27]),
      sig.signature,
    ]);
  }

  /**
   * Instantiates the signer with a hex-encoded private key.
   * Will throw an error if deserialized private key is not
   * 32 bytes in length.
   *
   * @param pk - A hex-encoded private key.
   */
  static fromHexPrivateKey (pk: string): SECP256k1Signer {
    const buf = Buffer.from(pk, 'hex');
    if (buf.length !== 32) {
      throw new Error('private key must be 32 bytes');
    }

    return new SECP256k1Signer(buf);
  }
}