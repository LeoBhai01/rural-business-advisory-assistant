export type FinancialInputs = {
  equipment: number;
  setup: number;
  workingCapital: number;
  ownCapital: number;
  interestRate: number;
  tenureMonths: number;
};

export type FinancialResult = FinancialInputs & {
  projectCost: number;
  loanAmount: number;
  monthlyEmi: number;
  subsidyEstimate: number;
  upfrontGap: number;
};

export function calculateFinancials(inputs: FinancialInputs): FinancialResult {
  const projectCost = inputs.equipment + inputs.setup + inputs.workingCapital;
  const subsidyEstimate = Math.min(projectCost * 0.25, 100000);
  const loanAmount = Math.max(projectCost - inputs.ownCapital - subsidyEstimate, 0);
  const monthlyRate = inputs.interestRate / 100 / 12;
  const monthlyEmi = monthlyRate === 0
    ? loanAmount / inputs.tenureMonths
    : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, inputs.tenureMonths)) /
      (Math.pow(1 + monthlyRate, inputs.tenureMonths) - 1);

  return {
    ...inputs,
    projectCost,
    loanAmount,
    monthlyEmi,
    subsidyEstimate,
    upfrontGap: Math.max(projectCost - inputs.ownCapital, 0),
  };
}

export function formatINR(value: number, compact = false): string {
  if (compact && value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
  if (compact && value >= 1000) return `₹${Math.round(value / 1000)}K`;
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}
