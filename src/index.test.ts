import metaSchema, { OpenRPC } from "@open-rpc/meta-schema";
import { parseOpenRPCDocument } from "@open-rpc/schema-utils-js";
import openRpcExamples from "./index";
import { forEach } from "lodash";

describe("meta-schema validates all examples without error", () => {
  const exampleNames = Object.keys(openRpcExamples);
  forEach(openRpcExamples, (example: OpenRPC, name: string) => {
    it(`validates the example: ${name}`, async () => {
      const result = await parseOpenRPCDocument(JSON.stringify(example)) as OpenRPC;
      expect(typeof result).toBe("object");
      expect(result.methods.length).toBeGreaterThan(0);
    });
  });
});
