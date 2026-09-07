import axios from "axios";
import { mockReport, schemes } from "@/data/mockData";

export const useMocks = import.meta.env.VITE_USE_MOCKS !== "false";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api/v1",
  headers: { "Content-Type": "application/json" },
});

export type FeasibilityRequest = {
  state: string;
  district: string;
  village: string;
  capital: number;
  category?: string;
};

export async function getFeasibility(request: FeasibilityRequest) {
  if (useMocks) return Promise.resolve({ ...mockReport, request, reportId: "demo-kottayam-001" });
  return api.post("/feasibility", request).then((response) => response.data);
}

export async function getSchemeMatches(params: { capital: number; category: string }) {
  if (useMocks) return Promise.resolve(schemes);
  return api.get("/schemes/match", { params }).then((response) => response.data);
}

export async function explainReport(reportId: string, language = "en") {
  if (useMocks) return Promise.resolve({ reportId, language, text: "Your strongest signal is repeat local demand. Protect your margin with a delivery plan and seasonal buffer." });
  return api.post("/explain", { reportId, language }).then((response) => response.data);
}
