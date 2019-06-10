import { parseOpenRPCDocument } from "@open-rpc/schema-utils-js";
import openRpcExamples from "./index";
import { forEach, uniqBy, values } from "lodash";

describe("meta-schema validates all examples without error", () => {
  it("has unique titles for each example", () => {
    const vals = values(openRpcExamples);
    expect(uniqBy(vals, ({ info }) => info.title).length)
      .toBe(vals.length);
  });

  forEach(openRpcExamples, (example, name: string) => {
    it(`validates the example: ${name}`, async () => {
      const result = await parseOpenRPCDocument(example);
      expect(typeof result).toBe("object");
      expect(result.methods.length).toBeGreaterThan(0);
    });
  });
});
