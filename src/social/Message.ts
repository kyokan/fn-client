export abstract class Message {
  public readonly type: Buffer;

  public readonly version: number;

  public readonly subtype: Buffer;

  protected constructor (type: Buffer, version: number, subtype: Buffer) {
    if (type.length !== 3) {
      throw new Error('type must be 3 bytes long');
    }
    if (version < 0 || version > 255) {
      throw new Error('version must fit into a uint8');
    }
    if (subtype.length !== 4) {
      throw new Error('subtype must be 4 bytes long');
    }
    this.type = type;
    this.version = version;
    this.subtype = subtype;
  }
}
