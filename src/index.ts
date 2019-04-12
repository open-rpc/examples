import petstore from "../service-descriptions/petstore-openrpc.json";
import petstoreExpanded from "../service-descriptions/petstore-expanded-openrpc.json";
import petstoreByName from "../service-descriptions/params-by-name-petstore-openrpc.json";
import links from "../service-descriptions/link-example-openrpc.json";
import apiWithExamples from "../service-descriptions/api-with-examples-openrpc.json";
import simpleMath from "../service-descriptions/simple-math-openrpc.json";
import { OpenRPC } from "@open-rpc/meta-schema";

export interface IExamples {
  [key: string]: OpenRPC;
}

const example = petstore as OpenRPC;

const examples: IExamples = {
  apiWithExamples: apiWithExamples as OpenRPC,
  links: links as OpenRPC,
  petstore: petstore as OpenRPC,
  petstoreByName: petstoreByName as OpenRPC,
  petstoreExpanded: petstoreExpanded as OpenRPC,
  simpleMath: simpleMath as OpenRPC,
};

export default examples;
