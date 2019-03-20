import metaSchema, { types } from "@open-rpc/meta-schema";
import { parse } from "@open-rpc/schema-utils-js";
import openRpcExamples from "./index";
import fetch from "node-fetch";
import { forEach } from "lodash";

describe("meta-schema validates all examples without error", () => {
  const exampleNames = Object.keys(openRpcExamples);
  forEach(openRpcExamples, (example: types.OpenRPC, name: string) => {
    it(`validates the example: ${name}`, async () => {
      const result = await parse(JSON.stringify(example)) as types.OpenRPC;
      expect(typeof result).toBe("object");
      expect(result.methods.length).toBeGreaterThan(0);
    });
  });
});
