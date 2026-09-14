import { maintenanceTasks, corridors, trainMovements, recommendation, planBlocks } from "@/data/mockData";
import type { BlockRecommendation, Corridor, MaintenanceTask, PlanBlock, TrainMovement } from "@/types/railopt";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000/api";

async function getOrMock<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, { signal: AbortSignal.timeout(700) });
    if (!response.ok) throw new Error("API unavailable");
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

export const maintenanceApi = {
  list: () => getOrMock<MaintenanceTask[]>("/maintenance", maintenanceTasks),
};
export const trainApi = {
  list: () => getOrMock<TrainMovement[]>("/trains", trainMovements),
  corridors: () => getOrMock<Corridor[]>("/corridors", corridors),
};
export const blockApi = {
  optimize: () => getOrMock<BlockRecommendation>("/optimize", recommendation),
  list: () => getOrMock<BlockRecommendation[]>("/blocks", [recommendation]),
};
export const planningApi = {
  weekly: () => getOrMock<PlanBlock[]>("/weekly-plan", planBlocks),
  monthly: () => getOrMock<PlanBlock[]>("/monthly-plan", planBlocks),
};