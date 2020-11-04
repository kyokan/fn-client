# fn-client

This library contains utilities and Node.js gRPC bindings for use with Footnote daemon.

## Usage

The below usage information is a high-level overview of the library. More in-depth documentation can be found by viewing the TSDoc. The TSDoc can be generating by running `npm run docs`.

### gRPC API

To use the gRPC API, you'll need to instantiate `FootnoteClient` like this:

```typescript
// replace 127.0.0.1:9098 with your node's URL,
// if other than the default:
const client = new FootnoteClient('127.0.0.1:9098');
```

Once done, you can call any of the service methods defined on `FootnoteClient`.

### Reading Data

`fn-client` includes support for reading and writing data to Footnote blobs. To read social data out of a blob, we recommend using the `iterateAllEnvelopes` method like this:

```typescript
const blobName = 'foobar';
const client = new FootnoteClient('127.0.0.1:9098');

// creates an instance of a buffered Readable, which will read
// from the blob using gRPC and keep the data in a 1MB buffer.
const reader = new BufferedReader(new Blobreader(blobName, client), 1024 * 1024);
iterateAllEnvelopes(reader, (err, envelope) => {
  if (err) {
    console.error(err);
    return false;
  }
  if (envelope === null) {
    return false;
  }
  // do something with the envelope
  console.log(envelope.message);
  return true;
});
```

### Writing Data

Writing data to a blob is a similar process to reading, however doing so requires the private key of the blob being written to:

```typescript
const blobName = 'foobar';
const client = new FootnoteClient('127.0.0.1:9098');

// replace the below with your actual private key
const signer = SECP256k1Signer.fromHexPrivateKey('cafecafe12345');
const truncate = false;
const writer = new EnvelopeWriter(client, blobName, truncate, signer);
await writer.open();

// see TSDoc for docs on creating Envelopes
const envelope = new Envelope(...);
await writer.writeEnvelope(envelope);
await writer.commit();
```

Note that this will start writing from the beginning of the blob. `fn-client` does not keep track of last-used offsets within a blob; this is left up to applications.

### A Note on Streams

`fn-client` uses its own internal streaming implementation. Classes that make use of streaming IO generally implement the `Reader` or `Writer` interfaces. Helper methods are provided that abstract this detail away, however more advanced use cases may need to make use of the streaming libraries directly.
