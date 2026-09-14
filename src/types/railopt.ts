export type Department = "Engineering" | "S&T" | "Traction";
export type Priority = "Critical" | "High" | "Medium" | "Low";
export type TaskStatus = "Pending" | "Recommended" | "Scheduled" | "Completed";

export interface MaintenanceTask {
  id: string;
  department: Department;
  asset: string;
  location: string;
  corridor: string;
  maintenanceType: string;
  severity: string;
  criticality: number;
  urgency: number;
  safetyImpact: number;
  overdueDays: number;
  durationMinutes: number;
  priority: Priority;
  status: TaskStatus;
  recommendedDate: string;
  compatible: boolean;
}

export interface TrainMovement {
  id: string;
  type: "Express" | "Passenger" | "Goods";
  corridor: string;
  arrival: string;
  departure: string;
  trafficPriority: "High" | "Medium" | "Low";
}

export interface Corridor {
  id: string;
  status: "Available" | "Restricted" | "Under Review";
  nextTrain: string;
  trafficLevel: "Low" | "Medium" | "High";
  windows: string[];
  pendingTasks: number;
}

export interface CoordinatedTask {
  department: Department;
  title: string;
  durationMinutes: number;
  priority: Priority;
}

export interface BlockRecommendation {
  corridor: string;
  date: string;
  time: string;
  durationMinutes: number;
  conflicts: number;
  coordinatedTasks: CoordinatedTask[];
  reasons: string[];
  simulation: {
    beforeBlocks: number;
    afterBlocks: number;
    beforeDuration: number;
    afterDuration: number;
    beforeConflicts: number;
    afterConflicts: number;
    availabilityGain: string;
  };
}

export interface PlanBlock {
  date: string;
  day: string;
  corridor: string;
  time: string;
  departments: string;
  tasks: number;
  priority: Priority;
  status: TaskStatus;
}