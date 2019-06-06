import { parseOpenRPCDocument } from "@open-rpc/schema-utils-js";
import openRpcExamples from "./index";
import { forEach } from "lodash";

describe("meta-schema validates all examples without error", () => {
  const exampleNames = Object.keys(openRpcExamples);
  forEach(openRpcExamples, (example, name: string) => {
    it(`validates the example: ${name}`, async () => {
      const result = await parseOpenRPCDocument(example);
      expect(typeof result).toBe("object");
      expect(result.methods.length).toBeGreaterThan(0);
    });
  });
});
