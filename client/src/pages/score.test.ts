import { describe, expect, it } from "vitest";
import { mockReport } from "@/data/mockData";

describe("feasibility score breakdown", () => {
  it("contains five weighted factors and stays within the explainable range", () => {
    expect(mockReport.factors).toHaveLength(5);
    expect(mockReport.factors.every((factor) => factor.value >= 0 && factor.value <= 100)).toBe(true);
    expect(mockReport.score).toBe(78);
  });
});
