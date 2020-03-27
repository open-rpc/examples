import openRpcExamples from "./index";
import { forEach, uniqBy, values } from "lodash";

import refParser from "json-schema-ref-parser";
import { OpenrpcDocument } from "@open-rpc/meta-schema";

describe("meta-schema validates all examples without error", () => {
  it("has unique titles for each example", () => {
    const vals = values(openRpcExamples);
    expect(uniqBy(vals, ({ info }) => info.title).length)
      .toBe(vals.length);
  });

  forEach(openRpcExamples, (example, name: string) => {
    it(`validates the example: ${name}`, async () => {
      const result = await refParser.dereference(example) as OpenrpcDocument;
      expect(typeof result).toBe("object");
      expect(result.methods.length).toBeGreaterThan(0);
    });
  });
});
