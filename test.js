const metaSchema = require('@open-rpc/meta-schema');
const openRpcExamples = require('./index.js');
const fetch = require('node-fetch');
var Ajv = require('ajv');
var ajv = new Ajv();

describe('meta-schema validates all examples without error', async () => {
  beforeAll(async () => {
    ajv.addMetaSchema(
      await fetch("http://json-schema.org/draft-07/schema").then((res) => res.json()),
      "https://json-schema.org/draft-07/schema#"
    );
  })
  const exampleNames = Object.keys(openRpcExamples);
  exampleNames.forEach((exampleName) => {
    it(`validates the example: ${exampleName}`, () => {
      const result = ajv.validate(openRpcExamples[exampleName]);
      if (ajv.errors && ajv.errors.length > 0) {
        console.error(metaSchemaValidator.errors);
      }
      expect(ajv.errors).toEqual(null);
      expect(result).toBe(true);
    });
  });
});
