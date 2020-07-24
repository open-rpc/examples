import openRpcExamples from "./index";

import { dereferenceDocument } from "@open-rpc/schema-utils-js";

describe("meta-schema validates all examples without error", () => {
  it("has unique titles for each example", () => {
    const vals = Object.values(openRpcExamples);
    const uniqueTitles: any = {};
    vals.map((v) => { uniqueTitles[v.info.title] = true; });

    expect(Object.keys(uniqueTitles).length).toBe(vals.length);
  });

  Object.entries(openRpcExamples).forEach(([name, example]) => {
    it(`validates the example: ${name}`, async () => {
      const result = await dereferenceDocument(example);
      expect(typeof result).toBe("object");
      expect(result.methods.length).toBeGreaterThan(0);
    });
  });
});
