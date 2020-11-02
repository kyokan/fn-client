// package:
// file: src/fnd/proto/v1/api.proto

import * as jspb from 'google-protobuf';

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class GetStatusRes extends jspb.Message {
  getPeerid(): Uint8Array | string;
  getPeerid_asU8(): Uint8Array;
  getPeerid_asB64(): string;
  setPeerid(value: Uint8Array | string): void;

  getPeercount(): number;
  setPeercount(value: number): void;

  getHeadercount(): number;
  setHeadercount(value: number): void;

  getTxbytes(): number;
  setTxbytes(value: number): void;

  getRxbytes(): number;
  setRxbytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusRes): GetStatusRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusRes;
  static deserializeBinaryFromReader(message: GetStatusRes, reader: jspb.BinaryReader): GetStatusRes;
}

export namespace GetStatusRes {
  export type AsObject = {
    peerid: Uint8Array | string,
    peercount: number,
    headercount: number,
    txbytes: number,
    rxbytes: number,
  }
}

export class GetNamesReq extends jspb.Message {
  getStart(): string;
  setStart(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNamesReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetNamesReq): GetNamesReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNamesReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNamesReq;
  static deserializeBinaryFromReader(message: GetNamesReq, reader: jspb.BinaryReader): GetNamesReq;
}

export namespace GetNamesReq {
  export type AsObject = {
    start: string,
    count: number,
  }
}

export class GetNamesRes extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNamesRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetNamesRes): GetNamesRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNamesRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNamesRes;
  static deserializeBinaryFromReader(message: GetNamesRes, reader: jspb.BinaryReader): GetNamesRes;
}

export namespace GetNamesRes {
  export type AsObject = {
    name: string,
    publickey: Uint8Array | string,
  }
}

export class AddPeerReq extends jspb.Message {
  getPeerid(): Uint8Array | string;
  getPeerid_asU8(): Uint8Array;
  getPeerid_asB64(): string;
  setPeerid(value: Uint8Array | string): void;

  getIp(): string;
  setIp(value: string): void;

  getVerifypeerid(): boolean;
  setVerifypeerid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPeerReq.AsObject;
  static toObject(includeInstance: boolean, msg: AddPeerReq): AddPeerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPeerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPeerReq;
  static deserializeBinaryFromReader(message: AddPeerReq, reader: jspb.BinaryReader): AddPeerReq;
}

export namespace AddPeerReq {
  export type AsObject = {
    peerid: Uint8Array | string,
    ip: string,
    verifypeerid: boolean,
  }
}

export class BanPeerReq extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  getDurationms(): number;
  setDurationms(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BanPeerReq.AsObject;
  static toObject(includeInstance: boolean, msg: BanPeerReq): BanPeerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BanPeerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BanPeerReq;
  static deserializeBinaryFromReader(message: BanPeerReq, reader: jspb.BinaryReader): BanPeerReq;
}

export namespace BanPeerReq {
  export type AsObject = {
    ip: string,
    durationms: number,
  }
}

export class UnbanPeerReq extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnbanPeerReq.AsObject;
  static toObject(includeInstance: boolean, msg: UnbanPeerReq): UnbanPeerReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnbanPeerReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnbanPeerReq;
  static deserializeBinaryFromReader(message: UnbanPeerReq, reader: jspb.BinaryReader): UnbanPeerReq;
}

export namespace UnbanPeerReq {
  export type AsObject = {
    ip: string,
  }
}

export class ListPeersReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPeersReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListPeersReq): ListPeersReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPeersReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPeersReq;
  static deserializeBinaryFromReader(message: ListPeersReq, reader: jspb.BinaryReader): ListPeersReq;
}

export namespace ListPeersReq {
  export type AsObject = {
  }
}

export class ListPeersRes extends jspb.Message {
  getPeerid(): Uint8Array | string;
  getPeerid_asU8(): Uint8Array;
  getPeerid_asB64(): string;
  setPeerid(value: Uint8Array | string): void;

  getIp(): string;
  setIp(value: string): void;

  getBanned(): boolean;
  setBanned(value: boolean): void;

  getConnected(): boolean;
  setConnected(value: boolean): void;

  getTxbytes(): number;
  setTxbytes(value: number): void;

  getRxbytes(): number;
  setRxbytes(value: number): void;

  getWhitelisted(): boolean;
  setWhitelisted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPeersRes.AsObject;
  static toObject(includeInstance: boolean, msg: ListPeersRes): ListPeersRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPeersRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPeersRes;
  static deserializeBinaryFromReader(message: ListPeersRes, reader: jspb.BinaryReader): ListPeersRes;
}

export namespace ListPeersRes {
  export type AsObject = {
    peerid: Uint8Array | string,
    ip: string,
    banned: boolean,
    connected: boolean,
    txbytes: number,
    rxbytes: number,
    whitelisted: boolean,
  }
}

export class CheckoutReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckoutReq.AsObject;
  static toObject(includeInstance: boolean, msg: CheckoutReq): CheckoutReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckoutReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckoutReq;
  static deserializeBinaryFromReader(message: CheckoutReq, reader: jspb.BinaryReader): CheckoutReq;
}

export namespace CheckoutReq {
  export type AsObject = {
    name: string,
  }
}

export class CheckoutRes extends jspb.Message {
  getTxid(): number;
  setTxid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckoutRes.AsObject;
  static toObject(includeInstance: boolean, msg: CheckoutRes): CheckoutRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckoutRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckoutRes;
  static deserializeBinaryFromReader(message: CheckoutRes, reader: jspb.BinaryReader): CheckoutRes;
}

export namespace CheckoutRes {
  export type AsObject = {
    txid: number,
  }
}

export class WriteAtReq extends jspb.Message {
  getTxid(): number;
  setTxid(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteAtReq.AsObject;
  static toObject(includeInstance: boolean, msg: WriteAtReq): WriteAtReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WriteAtReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteAtReq;
  static deserializeBinaryFromReader(message: WriteAtReq, reader: jspb.BinaryReader): WriteAtReq;
}

export namespace WriteAtReq {
  export type AsObject = {
    txid: number,
    offset: number,
    data: Uint8Array | string,
  }
}

export class WriteAtRes extends jspb.Message {
  getByteswritten(): number;
  setByteswritten(value: number): void;

  getWriteerr(): string;
  setWriteerr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteAtRes.AsObject;
  static toObject(includeInstance: boolean, msg: WriteAtRes): WriteAtRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WriteAtRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteAtRes;
  static deserializeBinaryFromReader(message: WriteAtRes, reader: jspb.BinaryReader): WriteAtRes;
}

export namespace WriteAtRes {
  export type AsObject = {
    byteswritten: number,
    writeerr: string,
  }
}

export class TruncateReq extends jspb.Message {
  getTxid(): number;
  setTxid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruncateReq.AsObject;
  static toObject(includeInstance: boolean, msg: TruncateReq): TruncateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TruncateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TruncateReq;
  static deserializeBinaryFromReader(message: TruncateReq, reader: jspb.BinaryReader): TruncateReq;
}

export namespace TruncateReq {
  export type AsObject = {
    txid: number,
  }
}

export class TruncateRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TruncateRes.AsObject;
  static toObject(includeInstance: boolean, msg: TruncateRes): TruncateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TruncateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TruncateRes;
  static deserializeBinaryFromReader(message: TruncateRes, reader: jspb.BinaryReader): TruncateRes;
}

export namespace TruncateRes {
  export type AsObject = {
  }
}

export class PreCommitReq extends jspb.Message {
  getTxid(): number;
  setTxid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreCommitReq.AsObject;
  static toObject(includeInstance: boolean, msg: PreCommitReq): PreCommitReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreCommitReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreCommitReq;
  static deserializeBinaryFromReader(message: PreCommitReq, reader: jspb.BinaryReader): PreCommitReq;
}

export namespace PreCommitReq {
  export type AsObject = {
    txid: number,
  }
}

export class PreCommitRes extends jspb.Message {
  getMerkleroot(): Uint8Array | string;
  getMerkleroot_asU8(): Uint8Array;
  getMerkleroot_asB64(): string;
  setMerkleroot(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreCommitRes.AsObject;
  static toObject(includeInstance: boolean, msg: PreCommitRes): PreCommitRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreCommitRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreCommitRes;
  static deserializeBinaryFromReader(message: PreCommitRes, reader: jspb.BinaryReader): PreCommitRes;
}

export namespace PreCommitRes {
  export type AsObject = {
    merkleroot: Uint8Array | string,
  }
}

export class CommitReq extends jspb.Message {
  getTxid(): number;
  setTxid(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getBroadcast(): boolean;
  setBroadcast(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitReq.AsObject;
  static toObject(includeInstance: boolean, msg: CommitReq): CommitReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitReq;
  static deserializeBinaryFromReader(message: CommitReq, reader: jspb.BinaryReader): CommitReq;
}

export namespace CommitReq {
  export type AsObject = {
    txid: number,
    timestamp: number,
    signature: Uint8Array | string,
    broadcast: boolean,
  }
}

export class CommitRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommitRes.AsObject;
  static toObject(includeInstance: boolean, msg: CommitRes): CommitRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommitRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommitRes;
  static deserializeBinaryFromReader(message: CommitRes, reader: jspb.BinaryReader): CommitRes;
}

export namespace CommitRes {
  export type AsObject = {
  }
}

export class ReadAtReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLen(): number;
  setLen(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadAtReq.AsObject;
  static toObject(includeInstance: boolean, msg: ReadAtReq): ReadAtReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadAtReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadAtReq;
  static deserializeBinaryFromReader(message: ReadAtReq, reader: jspb.BinaryReader): ReadAtReq;
}

export namespace ReadAtReq {
  export type AsObject = {
    name: string,
    offset: number,
    len: number,
  }
}

export class ReadAtRes extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadAtRes.AsObject;
  static toObject(includeInstance: boolean, msg: ReadAtRes): ReadAtRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadAtRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadAtRes;
  static deserializeBinaryFromReader(message: ReadAtRes, reader: jspb.BinaryReader): ReadAtRes;
}

export namespace ReadAtRes {
  export type AsObject = {
    offset: number,
    data: Uint8Array | string,
  }
}

export class BlobInfoReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlobInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: BlobInfoReq): BlobInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlobInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlobInfoReq;
  static deserializeBinaryFromReader(message: BlobInfoReq, reader: jspb.BinaryReader): BlobInfoReq;
}

export namespace BlobInfoReq {
  export type AsObject = {
    name: string,
  }
}

export class ListBlobInfoReq extends jspb.Message {
  getStart(): string;
  setStart(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBlobInfoReq.AsObject;
  static toObject(includeInstance: boolean, msg: ListBlobInfoReq): ListBlobInfoReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBlobInfoReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBlobInfoReq;
  static deserializeBinaryFromReader(message: ListBlobInfoReq, reader: jspb.BinaryReader): ListBlobInfoReq;
}

export namespace ListBlobInfoReq {
  export type AsObject = {
    start: string,
  }
}

export class BlobInfoRes extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPublickey(): Uint8Array | string;
  getPublickey_asU8(): Uint8Array;
  getPublickey_asB64(): string;
  setPublickey(value: Uint8Array | string): void;

  getImportheight(): number;
  setImportheight(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getMerkleroot(): Uint8Array | string;
  getMerkleroot_asU8(): Uint8Array;
  getMerkleroot_asB64(): string;
  setMerkleroot(value: Uint8Array | string): void;

  getReservedroot(): Uint8Array | string;
  getReservedroot_asU8(): Uint8Array;
  getReservedroot_asB64(): string;
  setReservedroot(value: Uint8Array | string): void;

  getReceivedat(): number;
  setReceivedat(value: number): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getTimebank(): number;
  setTimebank(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlobInfoRes.AsObject;
  static toObject(includeInstance: boolean, msg: BlobInfoRes): BlobInfoRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlobInfoRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlobInfoRes;
  static deserializeBinaryFromReader(message: BlobInfoRes, reader: jspb.BinaryReader): BlobInfoRes;
}

export namespace BlobInfoRes {
  export type AsObject = {
    name: string,
    publickey: Uint8Array | string,
    importheight: number,
    timestamp: number,
    merkleroot: Uint8Array | string,
    reservedroot: Uint8Array | string,
    receivedat: number,
    signature: Uint8Array | string,
    timebank: number,
  }
}

export class SendUpdateReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendUpdateReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendUpdateReq): SendUpdateReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendUpdateReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendUpdateReq;
  static deserializeBinaryFromReader(message: SendUpdateReq, reader: jspb.BinaryReader): SendUpdateReq;
}

export namespace SendUpdateReq {
  export type AsObject = {
    name: string,
  }
}

export class SendUpdateRes extends jspb.Message {
  getRecipientcount(): number;
  setRecipientcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendUpdateRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendUpdateRes): SendUpdateRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendUpdateRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendUpdateRes;
  static deserializeBinaryFromReader(message: SendUpdateRes, reader: jspb.BinaryReader): SendUpdateRes;
}

export namespace SendUpdateRes {
  export type AsObject = {
    recipientcount: number,
  }
}

