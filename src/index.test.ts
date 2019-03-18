import metaSchema from "@open-rpc/meta-schema";
import openRpcExamples from "./index";
import fetch from "node-fetch";
import Ajv from "ajv";
const ajv = new Ajv();

describe("meta-schema validates all examples without error", () => {
  beforeAll(async () => {
    ajv.addMetaSchema(
      await fetch("http://json-schema.org/draft-07/schema").then((res) => res.json()),
      "https://json-schema.org/draft-07/schema#",
    );
  });
  const exampleNames = Object.keys(openRpcExamples);
  exampleNames.forEach((exampleName) => {
    it(`validates the example: ${exampleName}`, () => {
      const result = ajv.validate(metaSchema, openRpcExamples[exampleName]);
      expect(ajv.errors).toEqual(null);
      expect(result).toBe(true);
    });
  });
});
