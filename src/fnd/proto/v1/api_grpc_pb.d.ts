// package:
// file: src/fnd/proto/v1/api.proto

import * as grpc from 'grpc';
import * as api_pb from './api_pb';

interface IFootnotev1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getStatus: IFootnotev1Service_IGetStatus;
  addPeer: IFootnotev1Service_IAddPeer;
  banPeer: IFootnotev1Service_IBanPeer;
  unbanPeer: IFootnotev1Service_IUnbanPeer;
  listPeers: IFootnotev1Service_IListPeers;
  checkout: IFootnotev1Service_ICheckout;
  writeAt: IFootnotev1Service_IWriteAt;
  truncate: IFootnotev1Service_ITruncate;
  preCommit: IFootnotev1Service_IPreCommit;
  commit: IFootnotev1Service_ICommit;
  readAt: IFootnotev1Service_IReadAt;
  getBlobInfo: IFootnotev1Service_IGetBlobInfo;
  listBlobInfo: IFootnotev1Service_IListBlobInfo;
  sendUpdate: IFootnotev1Service_ISendUpdate;
}

interface IFootnotev1Service_IGetStatus {
  path: string; // "/.Footnotev1/GetStatus"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.Empty>;
  requestDeserialize: grpc.deserialize<api_pb.Empty>;
  responseSerialize: grpc.serialize<api_pb.GetStatusRes>;
  responseDeserialize: grpc.deserialize<api_pb.GetStatusRes>;
}

interface IFootnotev1Service_IAddPeer {
  path: string; // "/.Footnotev1/AddPeer"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.AddPeerReq>;
  requestDeserialize: grpc.deserialize<api_pb.AddPeerReq>;
  responseSerialize: grpc.serialize<api_pb.Empty>;
  responseDeserialize: grpc.deserialize<api_pb.Empty>;
}

interface IFootnotev1Service_IBanPeer {
  path: string; // "/.Footnotev1/BanPeer"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.BanPeerReq>;
  requestDeserialize: grpc.deserialize<api_pb.BanPeerReq>;
  responseSerialize: grpc.serialize<api_pb.Empty>;
  responseDeserialize: grpc.deserialize<api_pb.Empty>;
}

interface IFootnotev1Service_IUnbanPeer {
  path: string; // "/.Footnotev1/UnbanPeer"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.UnbanPeerReq>;
  requestDeserialize: grpc.deserialize<api_pb.UnbanPeerReq>;
  responseSerialize: grpc.serialize<api_pb.Empty>;
  responseDeserialize: grpc.deserialize<api_pb.Empty>;
}

interface IFootnotev1Service_IListPeers {
  path: string; // "/.Footnotev1/ListPeers"
  requestStream: boolean; // false
  responseStream: boolean; // true
  requestSerialize: grpc.serialize<api_pb.ListPeersReq>;
  requestDeserialize: grpc.deserialize<api_pb.ListPeersReq>;
  responseSerialize: grpc.serialize<api_pb.ListPeersRes>;
  responseDeserialize: grpc.deserialize<api_pb.ListPeersRes>;
}

interface IFootnotev1Service_ICheckout {
  path: string; // "/.Footnotev1/Checkout"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.CheckoutReq>;
  requestDeserialize: grpc.deserialize<api_pb.CheckoutReq>;
  responseSerialize: grpc.serialize<api_pb.CheckoutRes>;
  responseDeserialize: grpc.deserialize<api_pb.CheckoutRes>;
}

interface IFootnotev1Service_IWriteAt {
  path: string; // "/.Footnotev1/WriteAt"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.WriteAtReq>;
  requestDeserialize: grpc.deserialize<api_pb.WriteAtReq>;
  responseSerialize: grpc.serialize<api_pb.WriteAtRes>;
  responseDeserialize: grpc.deserialize<api_pb.WriteAtRes>;
}

interface IFootnotev1Service_ITruncate {
  path: string; // "/.Footnotev1/Truncate"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.TruncateReq>;
  requestDeserialize: grpc.deserialize<api_pb.TruncateReq>;
  responseSerialize: grpc.serialize<api_pb.Empty>;
  responseDeserialize: grpc.deserialize<api_pb.Empty>;
}

interface IFootnotev1Service_IPreCommit {
  path: string; // "/.Footnotev1/PreCommit"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.PreCommitReq>;
  requestDeserialize: grpc.deserialize<api_pb.PreCommitReq>;
  responseSerialize: grpc.serialize<api_pb.PreCommitRes>;
  responseDeserialize: grpc.deserialize<api_pb.PreCommitRes>;
}

interface IFootnotev1Service_ICommit {
  path: string; // "/.Footnotev1/Commit"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.CommitReq>;
  requestDeserialize: grpc.deserialize<api_pb.CommitReq>;
  responseSerialize: grpc.serialize<api_pb.CommitRes>;
  responseDeserialize: grpc.deserialize<api_pb.CommitRes>;
}

interface IFootnotev1Service_IReadAt {
  path: string; // "/.Footnotev1/ReadAt"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.ReadAtReq>;
  requestDeserialize: grpc.deserialize<api_pb.ReadAtReq>;
  responseSerialize: grpc.serialize<api_pb.ReadAtRes>;
  responseDeserialize: grpc.deserialize<api_pb.ReadAtRes>;
}

interface IFootnotev1Service_IGetBlobInfo {
  path: string; // "/.Footnotev1/GetBlobInfo"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.BlobInfoReq>;
  requestDeserialize: grpc.deserialize<api_pb.BlobInfoReq>;
  responseSerialize: grpc.serialize<api_pb.BlobInfoRes>;
  responseDeserialize: grpc.deserialize<api_pb.BlobInfoRes>;
}

interface IFootnotev1Service_IListBlobInfo {
  path: string; // "/.Footnotev1/ListBlobInfo"
  requestStream: boolean; // false
  responseStream: boolean; // true
  requestSerialize: grpc.serialize<api_pb.ListBlobInfoReq>;
  requestDeserialize: grpc.deserialize<api_pb.ListBlobInfoReq>;
  responseSerialize: grpc.serialize<api_pb.BlobInfoRes>;
  responseDeserialize: grpc.deserialize<api_pb.BlobInfoRes>;
}

interface IFootnotev1Service_ISendUpdate {
  path: string; // "/.Footnotev1/SendUpdate"
  requestStream: boolean; // false
  responseStream: boolean; // false
  requestSerialize: grpc.serialize<api_pb.SendUpdateReq>;
  requestDeserialize: grpc.deserialize<api_pb.SendUpdateReq>;
  responseSerialize: grpc.serialize<api_pb.SendUpdateRes>;
  responseDeserialize: grpc.deserialize<api_pb.SendUpdateRes>;
}

export const Footnotev1Service: IFootnotev1Service;
export interface IFootnotev1Server {
  getStatus: grpc.handleUnaryCall<api_pb.Empty, api_pb.GetStatusRes>;
  addPeer: grpc.handleUnaryCall<api_pb.AddPeerReq, api_pb.Empty>;
  banPeer: grpc.handleUnaryCall<api_pb.BanPeerReq, api_pb.Empty>;
  unbanPeer: grpc.handleUnaryCall<api_pb.UnbanPeerReq, api_pb.Empty>;
  listPeers: grpc.handleServerStreamingCall<api_pb.ListPeersReq, api_pb.ListPeersRes>;
  checkout: grpc.handleUnaryCall<api_pb.CheckoutReq, api_pb.CheckoutRes>;
  writeAt: grpc.handleUnaryCall<api_pb.WriteAtReq, api_pb.WriteAtRes>;
  truncate: grpc.handleUnaryCall<api_pb.TruncateReq, api_pb.Empty>;
  preCommit: grpc.handleUnaryCall<api_pb.PreCommitReq, api_pb.PreCommitRes>;
  commit: grpc.handleUnaryCall<api_pb.CommitReq, api_pb.CommitRes>;
  readAt: grpc.handleUnaryCall<api_pb.ReadAtReq, api_pb.ReadAtRes>;
  getBlobInfo: grpc.handleUnaryCall<api_pb.BlobInfoReq, api_pb.BlobInfoRes>;
  listBlobInfo: grpc.handleServerStreamingCall<api_pb.ListBlobInfoReq, api_pb.BlobInfoRes>;
  sendUpdate: grpc.handleUnaryCall<api_pb.SendUpdateReq, api_pb.SendUpdateRes>;
}

export interface IFootnotev1Client {
  getStatus(request: api_pb.Empty, callback: (error: Error | null, response: api_pb.GetStatusRes) => void): grpc.ClientUnaryCall;
  getStatus(request: api_pb.Empty, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.GetStatusRes) => void): grpc.ClientUnaryCall;
  addPeer(request: api_pb.AddPeerReq, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  addPeer(request: api_pb.AddPeerReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  banPeer(request: api_pb.BanPeerReq, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  banPeer(request: api_pb.BanPeerReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  unbanPeer(request: api_pb.UnbanPeerReq, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  unbanPeer(request: api_pb.UnbanPeerReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  listPeers(request: api_pb.ListPeersReq, metadata?: grpc.Metadata): grpc.ClientReadableStream<api_pb.ListPeersRes>;
  checkout(request: api_pb.CheckoutReq, callback: (error: Error | null, response: api_pb.CheckoutRes) => void): grpc.ClientUnaryCall;
  checkout(request: api_pb.CheckoutReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.CheckoutRes) => void): grpc.ClientUnaryCall;
  writeAt(request: api_pb.WriteAtReq, callback: (error: Error | null, response: api_pb.WriteAtRes) => void): grpc.ClientUnaryCall;
  writeAt(request: api_pb.WriteAtReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.WriteAtRes) => void): grpc.ClientUnaryCall;
  truncate(request: api_pb.TruncateReq, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  truncate(request: api_pb.TruncateReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  preCommit(request: api_pb.PreCommitReq, callback: (error: Error | null, response: api_pb.PreCommitRes) => void): grpc.ClientUnaryCall;
  preCommit(request: api_pb.PreCommitReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.PreCommitRes) => void): grpc.ClientUnaryCall;
  commit(request: api_pb.CommitReq, callback: (error: Error | null, response: api_pb.CommitRes) => void): grpc.ClientUnaryCall;
  commit(request: api_pb.CommitReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.CommitRes) => void): grpc.ClientUnaryCall;
  readAt(request: api_pb.ReadAtReq, callback: (error: Error | null, response: api_pb.ReadAtRes) => void): grpc.ClientUnaryCall;
  readAt(request: api_pb.ReadAtReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.ReadAtRes) => void): grpc.ClientUnaryCall;
  getBlobInfo(request: api_pb.BlobInfoReq, callback: (error: Error | null, response: api_pb.BlobInfoRes) => void): grpc.ClientUnaryCall;
  getBlobInfo(request: api_pb.BlobInfoReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.BlobInfoRes) => void): grpc.ClientUnaryCall;
  listBlobInfo(request: api_pb.ListBlobInfoReq, metadata?: grpc.Metadata): grpc.ClientReadableStream<api_pb.BlobInfoRes>;
  sendUpdate(request: api_pb.SendUpdateReq, callback: (error: Error | null, response: api_pb.SendUpdateRes) => void): grpc.ClientUnaryCall;
  sendUpdate(request: api_pb.SendUpdateReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.SendUpdateRes) => void): grpc.ClientUnaryCall;
}

export class Footnotev1Client extends grpc.Client implements IFootnotev1Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  public getStatus(request: api_pb.Empty, callback: (error: Error | null, response: api_pb.GetStatusRes) => void): grpc.ClientUnaryCall;
  public getStatus(request: api_pb.Empty, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.GetStatusRes) => void): grpc.ClientUnaryCall;
  public addPeer(request: api_pb.AddPeerReq, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  public addPeer(request: api_pb.AddPeerReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  public banPeer(request: api_pb.BanPeerReq, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  public banPeer(request: api_pb.BanPeerReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  public unbanPeer(request: api_pb.UnbanPeerReq, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  public unbanPeer(request: api_pb.UnbanPeerReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  public listPeers(request: api_pb.ListPeersReq, metadata?: grpc.Metadata): grpc.ClientReadableStream<api_pb.ListPeersRes>;
  public checkout(request: api_pb.CheckoutReq, callback: (error: Error | null, response: api_pb.CheckoutRes) => void): grpc.ClientUnaryCall;
  public checkout(request: api_pb.CheckoutReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.CheckoutRes) => void): grpc.ClientUnaryCall;
  public writeAt(request: api_pb.WriteAtReq, callback: (error: Error | null, response: api_pb.WriteAtRes) => void): grpc.ClientUnaryCall;
  public writeAt(request: api_pb.WriteAtReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.WriteAtRes) => void): grpc.ClientUnaryCall;
  public truncate(request: api_pb.TruncateReq, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  public truncate(request: api_pb.TruncateReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.Empty) => void): grpc.ClientUnaryCall;
  public preCommit(request: api_pb.PreCommitReq, callback: (error: Error | null, response: api_pb.PreCommitRes) => void): grpc.ClientUnaryCall;
  public preCommit(request: api_pb.PreCommitReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.PreCommitRes) => void): grpc.ClientUnaryCall;
  public commit(request: api_pb.CommitReq, callback: (error: Error | null, response: api_pb.CommitRes) => void): grpc.ClientUnaryCall;
  public commit(request: api_pb.CommitReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.CommitRes) => void): grpc.ClientUnaryCall;
  public readAt(request: api_pb.ReadAtReq, callback: (error: Error | null, response: api_pb.ReadAtRes) => void): grpc.ClientUnaryCall;
  public readAt(request: api_pb.ReadAtReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.ReadAtRes) => void): grpc.ClientUnaryCall;
  public getBlobInfo(request: api_pb.BlobInfoReq, callback: (error: Error | null, response: api_pb.BlobInfoRes) => void): grpc.ClientUnaryCall;
  public getBlobInfo(request: api_pb.BlobInfoReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.BlobInfoRes) => void): grpc.ClientUnaryCall;
  public listBlobInfo(request: api_pb.ListBlobInfoReq, metadata?: grpc.Metadata): grpc.ClientReadableStream<api_pb.BlobInfoRes>;
  public sendUpdate(request: api_pb.SendUpdateReq, callback: (error: Error | null, response: api_pb.SendUpdateRes) => void): grpc.ClientUnaryCall;
  public sendUpdate(request: api_pb.SendUpdateReq, metadata: grpc.Metadata, callback: (error: Error | null, response: api_pb.SendUpdateRes) => void): grpc.ClientUnaryCall;
}

