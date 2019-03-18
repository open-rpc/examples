import { types } from "@open-rpc/meta-schema";

import petstore from "../service-descriptions/petstore-openrpc.json";
import petstoreExpanded from "../service-descriptions/petstore-expanded-openrpc.json";
import petstoreByName from "../service-descriptions/params-by-name-petstore-openrpc.json";
import links from "../service-descriptions/link-example-openrpc.json";
import apiWithExamples from "../service-descriptions/api-with-examples-openrpc.json";
import simpleMath from "../service-descriptions/simple-math-openrpc.json";

interface IExamples {
  [key: string]: types.OpenRPC;
}

const example = petstore as types.OpenRPC;

const examples: IExamples = {
  apiWithExamples: apiWithExamples as types.OpenRPC,
  links: links as types.OpenRPC,
  petstore: petstore as types.OpenRPC,
  petstoreByName: petstoreByName as types.OpenRPC,
  petstoreExpanded: petstoreExpanded as types.OpenRPC,
  simpleMath: simpleMath as types.OpenRPC,
};
