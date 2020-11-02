// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var api_pb = require('./api_pb');

function serialize_AddPeerReq(arg) {
  if (!(arg instanceof api_pb.AddPeerReq)) {
    throw new Error('Expected argument of type AddPeerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddPeerReq(buffer_arg) {
  return api_pb.AddPeerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BanPeerReq(arg) {
  if (!(arg instanceof api_pb.BanPeerReq)) {
    throw new Error('Expected argument of type BanPeerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BanPeerReq(buffer_arg) {
  return api_pb.BanPeerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlobInfoReq(arg) {
  if (!(arg instanceof api_pb.BlobInfoReq)) {
    throw new Error('Expected argument of type BlobInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlobInfoReq(buffer_arg) {
  return api_pb.BlobInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BlobInfoRes(arg) {
  if (!(arg instanceof api_pb.BlobInfoRes)) {
    throw new Error('Expected argument of type BlobInfoRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_BlobInfoRes(buffer_arg) {
  return api_pb.BlobInfoRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CheckoutReq(arg) {
  if (!(arg instanceof api_pb.CheckoutReq)) {
    throw new Error('Expected argument of type CheckoutReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CheckoutReq(buffer_arg) {
  return api_pb.CheckoutReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CheckoutRes(arg) {
  if (!(arg instanceof api_pb.CheckoutRes)) {
    throw new Error('Expected argument of type CheckoutRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CheckoutRes(buffer_arg) {
  return api_pb.CheckoutRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CommitReq(arg) {
  if (!(arg instanceof api_pb.CommitReq)) {
    throw new Error('Expected argument of type CommitReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CommitReq(buffer_arg) {
  return api_pb.CommitReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CommitRes(arg) {
  if (!(arg instanceof api_pb.CommitRes)) {
    throw new Error('Expected argument of type CommitRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CommitRes(buffer_arg) {
  return api_pb.CommitRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Empty(arg) {
  if (!(arg instanceof api_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return api_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetStatusRes(arg) {
  if (!(arg instanceof api_pb.GetStatusRes)) {
    throw new Error('Expected argument of type GetStatusRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetStatusRes(buffer_arg) {
  return api_pb.GetStatusRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListBlobInfoReq(arg) {
  if (!(arg instanceof api_pb.ListBlobInfoReq)) {
    throw new Error('Expected argument of type ListBlobInfoReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListBlobInfoReq(buffer_arg) {
  return api_pb.ListBlobInfoReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListPeersReq(arg) {
  if (!(arg instanceof api_pb.ListPeersReq)) {
    throw new Error('Expected argument of type ListPeersReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListPeersReq(buffer_arg) {
  return api_pb.ListPeersReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListPeersRes(arg) {
  if (!(arg instanceof api_pb.ListPeersRes)) {
    throw new Error('Expected argument of type ListPeersRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListPeersRes(buffer_arg) {
  return api_pb.ListPeersRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PreCommitReq(arg) {
  if (!(arg instanceof api_pb.PreCommitReq)) {
    throw new Error('Expected argument of type PreCommitReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PreCommitReq(buffer_arg) {
  return api_pb.PreCommitReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_PreCommitRes(arg) {
  if (!(arg instanceof api_pb.PreCommitRes)) {
    throw new Error('Expected argument of type PreCommitRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_PreCommitRes(buffer_arg) {
  return api_pb.PreCommitRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ReadAtReq(arg) {
  if (!(arg instanceof api_pb.ReadAtReq)) {
    throw new Error('Expected argument of type ReadAtReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ReadAtReq(buffer_arg) {
  return api_pb.ReadAtReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ReadAtRes(arg) {
  if (!(arg instanceof api_pb.ReadAtRes)) {
    throw new Error('Expected argument of type ReadAtRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ReadAtRes(buffer_arg) {
  return api_pb.ReadAtRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SendUpdateReq(arg) {
  if (!(arg instanceof api_pb.SendUpdateReq)) {
    throw new Error('Expected argument of type SendUpdateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SendUpdateReq(buffer_arg) {
  return api_pb.SendUpdateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SendUpdateRes(arg) {
  if (!(arg instanceof api_pb.SendUpdateRes)) {
    throw new Error('Expected argument of type SendUpdateRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SendUpdateRes(buffer_arg) {
  return api_pb.SendUpdateRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TruncateReq(arg) {
  if (!(arg instanceof api_pb.TruncateReq)) {
    throw new Error('Expected argument of type TruncateReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TruncateReq(buffer_arg) {
  return api_pb.TruncateReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UnbanPeerReq(arg) {
  if (!(arg instanceof api_pb.UnbanPeerReq)) {
    throw new Error('Expected argument of type UnbanPeerReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UnbanPeerReq(buffer_arg) {
  return api_pb.UnbanPeerReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WriteAtReq(arg) {
  if (!(arg instanceof api_pb.WriteAtReq)) {
    throw new Error('Expected argument of type WriteAtReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WriteAtReq(buffer_arg) {
  return api_pb.WriteAtReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_WriteAtRes(arg) {
  if (!(arg instanceof api_pb.WriteAtRes)) {
    throw new Error('Expected argument of type WriteAtRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_WriteAtRes(buffer_arg) {
  return api_pb.WriteAtRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var HandshakeLayerTwov1Service = exports.HandshakeLayerTwov1Service = {
  getStatus: {
    path: '/HandshakeLayerTwov1/GetStatus',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.Empty,
    responseType: api_pb.GetStatusRes,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_GetStatusRes,
    responseDeserialize: deserialize_GetStatusRes,
  },
  addPeer: {
    path: '/HandshakeLayerTwov1/AddPeer',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.AddPeerReq,
    responseType: api_pb.Empty,
    requestSerialize: serialize_AddPeerReq,
    requestDeserialize: deserialize_AddPeerReq,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
  banPeer: {
    path: '/HandshakeLayerTwov1/BanPeer',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.BanPeerReq,
    responseType: api_pb.Empty,
    requestSerialize: serialize_BanPeerReq,
    requestDeserialize: deserialize_BanPeerReq,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
  unbanPeer: {
    path: '/HandshakeLayerTwov1/UnbanPeer',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.UnbanPeerReq,
    responseType: api_pb.Empty,
    requestSerialize: serialize_UnbanPeerReq,
    requestDeserialize: deserialize_UnbanPeerReq,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
  listPeers: {
    path: '/HandshakeLayerTwov1/ListPeers',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.ListPeersReq,
    responseType: api_pb.ListPeersRes,
    requestSerialize: serialize_ListPeersReq,
    requestDeserialize: deserialize_ListPeersReq,
    responseSerialize: serialize_ListPeersRes,
    responseDeserialize: deserialize_ListPeersRes,
  },
  checkout: {
    path: '/HandshakeLayerTwov1/Checkout',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.CheckoutReq,
    responseType: api_pb.CheckoutRes,
    requestSerialize: serialize_CheckoutReq,
    requestDeserialize: deserialize_CheckoutReq,
    responseSerialize: serialize_CheckoutRes,
    responseDeserialize: deserialize_CheckoutRes,
  },
  writeAt: {
    path: '/HandshakeLayerTwov1/WriteAt',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.WriteAtReq,
    responseType: api_pb.WriteAtRes,
    requestSerialize: serialize_WriteAtReq,
    requestDeserialize: deserialize_WriteAtReq,
    responseSerialize: serialize_WriteAtRes,
    responseDeserialize: deserialize_WriteAtRes,
  },
  truncate: {
    path: '/HandshakeLayerTwov1/Truncate',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.TruncateReq,
    responseType: api_pb.Empty,
    requestSerialize: serialize_TruncateReq,
    requestDeserialize: deserialize_TruncateReq,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
  preCommit: {
    path: '/HandshakeLayerTwov1/PreCommit',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.PreCommitReq,
    responseType: api_pb.PreCommitRes,
    requestSerialize: serialize_PreCommitReq,
    requestDeserialize: deserialize_PreCommitReq,
    responseSerialize: serialize_PreCommitRes,
    responseDeserialize: deserialize_PreCommitRes,
  },
  commit: {
    path: '/HandshakeLayerTwov1/Commit',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.CommitReq,
    responseType: api_pb.CommitRes,
    requestSerialize: serialize_CommitReq,
    requestDeserialize: deserialize_CommitReq,
    responseSerialize: serialize_CommitRes,
    responseDeserialize: deserialize_CommitRes,
  },
  readAt: {
    path: '/HandshakeLayerTwov1/ReadAt',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.ReadAtReq,
    responseType: api_pb.ReadAtRes,
    requestSerialize: serialize_ReadAtReq,
    requestDeserialize: deserialize_ReadAtReq,
    responseSerialize: serialize_ReadAtRes,
    responseDeserialize: deserialize_ReadAtRes,
  },
  getBlobInfo: {
    path: '/HandshakeLayerTwov1/GetBlobInfo',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.BlobInfoReq,
    responseType: api_pb.BlobInfoRes,
    requestSerialize: serialize_BlobInfoReq,
    requestDeserialize: deserialize_BlobInfoReq,
    responseSerialize: serialize_BlobInfoRes,
    responseDeserialize: deserialize_BlobInfoRes,
  },
  listBlobInfo: {
    path: '/HandshakeLayerTwov1/ListBlobInfo',
    requestStream: false,
    responseStream: true,
    requestType: api_pb.ListBlobInfoReq,
    responseType: api_pb.BlobInfoRes,
    requestSerialize: serialize_ListBlobInfoReq,
    requestDeserialize: deserialize_ListBlobInfoReq,
    responseSerialize: serialize_BlobInfoRes,
    responseDeserialize: deserialize_BlobInfoRes,
  },
  sendUpdate: {
    path: '/HandshakeLayerTwov1/SendUpdate',
    requestStream: false,
    responseStream: false,
    requestType: api_pb.SendUpdateReq,
    responseType: api_pb.SendUpdateRes,
    requestSerialize: serialize_SendUpdateReq,
    requestDeserialize: deserialize_SendUpdateReq,
    responseSerialize: serialize_SendUpdateRes,
    responseDeserialize: deserialize_SendUpdateRes,
  },
};

exports.HandshakeLayerTwov1Client = grpc.makeGenericClientConstructor(HandshakeLayerTwov1Service);
