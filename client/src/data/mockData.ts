export type Provenance = "Observed" | "Derived" | "Estimated" | "Assumed";

export const mockReport = {
  score: 78,
  confidence: "Moderate-high confidence",
  location: "Kottayam, Kerala",
  updatedAt: "08 Sep 2026 · 09:30 IST",
  factors: [
    { name: "Local demand", value: 84, note: "Strong repeat purchase signals", tone: "good" },
    { name: "Competition", value: 62, note: "Moderate nearby supply", tone: "watch" },
    { name: "Capital fit", value: 79, note: "Within your comfort range", tone: "good" },
    { name: "Supply risk", value: 71, note: "Seasonal inputs to plan for", tone: "watch" },
    { name: "Pricing potential", value: 82, note: "Premium for reliable delivery", tone: "good" },
  ],
  swot: {
    strengths: ["Existing coconut supply network", "High repeat-purchase category"],
    watchouts: ["Monsoon logistics", "Cold storage dependency"],
  },
  market: [
    { month: "Now", value: 42 },
    { month: "6m", value: 57 },
    { month: "12m", value: 69 },
    { month: "18m", value: 78 },
    { month: "24m", value: 86 },
  ],
};

export const categories = [
  { name: "Coconut value-add", local: "തേങ്ങ മൂല്യവർധിതം", fit: 91, icon: "coconut", investment: "₹2.8L – ₹5.4L", tag: "Best fit" },
  { name: "Spice cleaning & packing", local: "മസാല ശുചീകരണം", fit: 84, icon: "spice", investment: "₹3.2L – ₹6.8L", tag: "Low risk" },
  { name: "Farm equipment rental", local: "കാർഷിക ഉപകരണ വാടക", fit: 76, icon: "tractor", investment: "₹5.5L – ₹12L", tag: "Steady demand" },
  { name: "Millet snacks", local: "ചെറുധാന്യ പലഹാരം", fit: 73, icon: "millet", investment: "₹1.8L – ₹4.2L", tag: "Emerging" },
];

export const schemes = [
  { name: "PMEGP", description: "Credit-linked subsidy for new micro enterprises", fit: 88, amount: "Up to ₹25L", color: "saffron" },
  { name: "MUDRA Tarun", description: "Collateral-free working capital and term loan", fit: 82, amount: "₹5L – ₹10L", color: "teal" },
  { name: "SVEP", description: "Enterprise support through rural SHG ecosystem", fit: 76, amount: "Mentor + credit", color: "violet" },
];

export const repaymentRows = [
  { month: "1–6", principal: "Moratorium", interest: "₹3,860", balance: "₹2.24L" },
  { month: "7–12", principal: "₹18,420", interest: "₹3,110", balance: "₹2.06L" },
  { month: "13–18", principal: "₹18,420", interest: "₹2,350", balance: "₹1.70L" },
  { month: "19–24", principal: "₹18,420", interest: "₹1,580", balance: "₹1.33L" },
];

export const mapMarkers = [
  { x: 24, y: 29, label: "You", kind: "you", caption: "Your proposed hub" },
  { x: 42, y: 22, label: "C1", kind: "competitor", caption: "Retail · 2.3 km" },
  { x: 68, y: 41, label: "C2", kind: "competitor", caption: "Wholesale · 4.1 km" },
  { x: 55, y: 69, label: "C3", kind: "competitor", caption: "Retail · 5.4 km" },
  { x: 79, y: 22, label: "S1", kind: "supplier", caption: "Supplier · 3.6 km" },
  { x: 16, y: 74, label: "M1", kind: "market", caption: "Weekly market" },
];

export const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "ml", label: "Malayalam", native: "മലയാളം" },
];
