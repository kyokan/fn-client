export interface Peer {
  peerId: string
  ip: string
  isBanned: boolean
  isConnected: boolean
  txBytes: number
  rxBytes: number
}
