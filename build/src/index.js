"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var petstore_openrpc_json_1 = __importDefault(require("../service-descriptions/petstore-openrpc.json"));
var petstore_expanded_openrpc_json_1 = __importDefault(require("../service-descriptions/petstore-expanded-openrpc.json"));
var params_by_name_petstore_openrpc_json_1 = __importDefault(require("../service-descriptions/params-by-name-petstore-openrpc.json"));
var link_example_openrpc_json_1 = __importDefault(require("../service-descriptions/link-example-openrpc.json"));
var api_with_examples_openrpc_json_1 = __importDefault(require("../service-descriptions/api-with-examples-openrpc.json"));
var simple_math_openrpc_json_1 = __importDefault(require("../service-descriptions/simple-math-openrpc.json"));
console.log(JSON.stringify(petstore_openrpc_json_1.default, undefined, '  '));
var example = petstore_openrpc_json_1.default;
var examples = {
    petstore: petstore_openrpc_json_1.default,
    petstoreExpanded: petstore_expanded_openrpc_json_1.default,
    petstoreByName: params_by_name_petstore_openrpc_json_1.default,
    links: link_example_openrpc_json_1.default,
    apiWithExamples: api_with_examples_openrpc_json_1.default,
    simpleMath: simple_math_openrpc_json_1.default
};
module.exports = {
    apiWithExamples: require('./service-descriptions/api-with-examples-openrpc.json'),
    links: require('./service-descriptions/link-example-openrpc.json'),
    petstore: require('./service-descriptions/petstore-openrpc.json'),
    petstoreExpanded: require('./service-descriptions/petstore-expanded-openrpc.json'),
    simpleMath: require('./service-descriptions/simple-math-openrpc.json'),
    petstoreByName: require('./service-descriptions/params-by-name-petstore-openrpc.json')
};
