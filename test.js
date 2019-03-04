const metaSchema = require('@open-rpc/meta-schema');
const openRpcExamples = require('@open-rpc/examples');
var Ajv = require('ajv');
var ajv = new Ajv();

describe('meta-schema', () => {
  let metaSchemaValidator, examples;
  it('can be compiled by ajv', () => {
    metaSchemaValidator = ajv.compile(metaSchema);
    expect(typeof metaSchemaValidator).toBe('function')
  });

  describe('validates all examples without error', () => {
    const exampleNames = Object.keys(openRpcExamples);
    exampleNames.forEach((exampleName) => {
      it(`validates the example: ${exampleName}`, () => {
        const result = metaSchemaValidator(openRpcExamples[exampleName]);
        if (metaSchemaValidator.errors && metaSchemaValidator.errors.length > 0) {
          console.error(metaSchemaValidator.errors);
        }
        expect(metaSchemaValidator.errors).toEqual(null);
        expect(result).toBe(true);
      });
    });
  });
});
