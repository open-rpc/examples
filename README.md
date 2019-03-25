# examples

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=open-rpc/examples)](https://dependabot.com)
[![CircleCI](https://circleci.com/gh/open-rpc/examples.svg?style=svg)](https://circleci.com/gh/open-rpc/examples)

This repo contains a collection of example OpenRPC service definition files. These definitions can be found in the `service-desciptions/` directory:

https://github.com/open-rpc/examples/tree/master/service-descriptions

## Getting Started

### Dependencies
- Install the [Generator Client](https://github.com/open-rpc/generator-client)

This is tool will build a client when passing a service definition - including _these_ examples.

### Generate client from an example

![generator-client-demo](https://github.com/stevanlohja/design/blob/master/videos-gifs/generator-client/001-generate-client-demo/001-generate-client-demo.gif?raw=true)

```
open-rpc-generator-client \
  -s https://raw.githubusercontent.com/open-rpc/examples/master/service-descriptions/petstore-openrpc.json \
  PetStore
```

Using the `open-rpc-generator-client` command, then passing an example schema document `petstore-openrpc.json` in the directory of `Petstore`.

## License

[Apache 2.0](https://github.com/open-rpc/examples/blob/master/LICENSE)




