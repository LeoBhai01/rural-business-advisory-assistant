import { describe, expect, it } from "vitest";
import { getFeasibility, getSchemeMatches, useMocks } from "./api";

describe("mock API adapter", () => {
  it("is enabled unless explicitly disabled", () => {
    expect(useMocks).toBe(true);
  });

  it("returns feasibility and scheme data without a backend", async () => {
    const report = await getFeasibility({ state: "Kerala", district: "Kottayam", village: "Pala", capital: 250000, category: "Coconut value-add" });
    const matches = await getSchemeMatches({ capital: 250000, category: "Coconut value-add" });
    expect(report.reportId).toBe("demo-kottayam-001");
    expect(matches.length).toBeGreaterThan(0);
  });
});
