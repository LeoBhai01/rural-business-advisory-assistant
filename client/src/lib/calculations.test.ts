import { describe, expect, it } from "vitest";
import { calculateFinancials, formatINR } from "./calculations";

describe("calculateFinancials", () => {
  it("derives project cost, subsidy, and loan amount from inputs", () => {
    const result = calculateFinancials({ equipment: 240000, setup: 62000, workingCapital: 78000, ownCapital: 250000, interestRate: 11.5, tenureMonths: 24 });
    expect(result.projectCost).toBe(380000);
    expect(result.subsidyEstimate).toBe(95000);
    expect(result.loanAmount).toBe(35000);
    expect(result.monthlyEmi).toBeGreaterThan(0);
  });

  it("never returns a negative loan amount when capital covers the project", () => {
    const result = calculateFinancials({ equipment: 100000, setup: 20000, workingCapital: 10000, ownCapital: 500000, interestRate: 0, tenureMonths: 12 });
    expect(result.loanAmount).toBe(0);
    expect(result.monthlyEmi).toBe(0);
  });
});

describe("formatINR", () => {
  it("formats compact lakh values for dashboard cards", () => {
    expect(formatINR(280000, true)).toBe("₹2.8L");
  });
});
