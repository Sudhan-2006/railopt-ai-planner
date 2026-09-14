import type { BlockRecommendation, Corridor, MaintenanceTask, PlanBlock, TrainMovement } from "@/types/railopt";

const taskSeeds = [
  ["T-1042", "Engineering", "Rail defect repair", "Km 142/6", "C01", "Rail geometry correction", "Crack propagation", 98, 92, 97, 6, 60, "Critical", "Pending", "15 Sep 2026", true],
  ["T-1057", "S&T", "Interlocking relay", "Station K-14", "C01", "Signal equipment service", "Relay degradation", 94, 85, 95, 0, 30, "Critical", "Recommended", "15 Sep 2026", true],
  ["T-1063", "Traction", "OHE span 88", "Km 143/2", "C01", "OHE inspection", "Contact wire wear", 88, 82, 86, 3, 45, "High", "Pending", "15 Sep 2026", true],
  ["T-1071", "Engineering", "Ballast reprofile", "Km 151/1", "C03", "Ballast maintenance", "Profile variance", 66, 61, 58, 0, 90, "Medium", "Scheduled", "16 Sep 2026", false],
  ["T-1088", "S&T", "Cable fault 214", "Station R-08", "C02", "Cable diagnostics", "Intermittent fault", 48, 42, 55, 0, 40, "Low", "Pending", "17 Sep 2026", false],
  ["T-1092", "Engineering", "Turnout 34A", "Km 136/4", "C02", "Turnout inspection", "Wear beyond limit", 81, 78, 80, 2, 50, "High", "Pending", "16 Sep 2026", true],
  ["T-1101", "Traction", "Portal mast 22", "Km 129/8", "C04", "Mast foundation check", "Foundation settlement", 72, 68, 74, 1, 60, "High", "Recommended", "18 Sep 2026", false],
  ["T-1110", "S&T", "Axle counter 09", "Station P-02", "C03", "Axle counter calibration", "Calibration drift", 77, 70, 82, 4, 35, "High", "Pending", "16 Sep 2026", true],
  ["T-1118", "Engineering", "Rail weld 52", "Km 158/3", "C04", "Weld ultrasonic test", "Test due", 59, 54, 60, 0, 45, "Medium", "Pending", "18 Sep 2026", false],
  ["T-1124", "Traction", "Section insulator", "Km 147/5", "C01", "Insulator replacement", "Insulation drop", 89, 84, 91, 5, 50, "Critical", "Pending", "15 Sep 2026", true],
] as const;

const departments = ["Engineering", "S&T", "Traction"] as const;

export const maintenanceTasks: MaintenanceTask[] = Array.from({ length: 3 }).flatMap((_, cycle) =>
  taskSeeds.map((seed, index) => ({
    id: cycle === 0 ? seed[0] : `${seed[0].slice(0, 2)}${Number(seed[0].slice(2)) + cycle * 20}`,
    department: seed[1] as MaintenanceTask["department"],
    asset: seed[2],
    location: seed[3],
    corridor: seed[4],
    maintenanceType: seed[5],
    severity: seed[6],
    criticality: seed[7],
    urgency: seed[8],
    safetyImpact: seed[9],
    overdueDays: seed[10],
    durationMinutes: seed[11],
    priority: seed[12] as MaintenanceTask["priority"],
    status: seed[13] as MaintenanceTask["status"],
    recommendedDate: seed[14],
    compatible: seed[15],
  })),
);

export const departmentSummary = departments.map((department, index) => ({ department, count: [52, 47, 29][index], color: ["signal", "clear", "caution"][index] }));
export const prioritySummary = [
  { label: "Critical", count: 24, color: "critical" },
  { label: "High", count: 40, color: "caution" },
  { label: "Medium", count: 42, color: "signal" },
  { label: "Low", count: 22, color: "muted" },
];

export const corridors: Corridor[] = [
  { id: "C01", status: "Available", nextTrain: "11:30 Passenger", trafficLevel: "Low", windows: ["10:30–12:00", "15:10–16:00"], pendingTasks: 12 },
  { id: "C02", status: "Restricted", nextTrain: "10:45 Express", trafficLevel: "High", windows: ["13:20–14:00"], pendingTasks: 8 },
  { id: "C03", status: "Available", nextTrain: "12:10 Goods", trafficLevel: "Medium", windows: ["09:40–10:30", "14:00–15:00"], pendingTasks: 7 },
  { id: "C04", status: "Under Review", nextTrain: "09:55 Passenger", trafficLevel: "Medium", windows: ["16:15–17:30"], pendingTasks: 5 },
];

export const trainMovements: TrainMovement[] = [
  ["12109", "Express", "C02", "10:40", "10:45", "High"], ["19012", "Passenger", "C01", "09:00", "09:05", "Medium"], ["G-441", "Goods", "C01", "12:00", "12:10", "Low"],
  ["12951", "Express", "C03", "09:30", "09:35", "High"], ["P-804", "Passenger", "C04", "09:50", "09:55", "Medium"], ["G-221", "Goods", "C02", "11:20", "11:30", "Low"],
  ["19018", "Passenger", "C01", "11:25", "11:30", "Medium"], ["12859", "Express", "C03", "13:45", "13:50", "High"], ["P-910", "Passenger", "C04", "15:55", "16:00", "Medium"], ["G-514", "Goods", "C03", "16:40", "16:50", "Low"], ["12123", "Express", "C01", "17:20", "17:25", "High"],
].map(([id, type, corridor, arrival, departure, trafficPriority]) => ({ id, type: type as TrainMovement["type"], corridor, arrival, departure, trafficPriority: trafficPriority as TrainMovement["trafficPriority"] }));

export const recommendation: BlockRecommendation = {
  corridor: "C01", date: "15 September 2026", time: "10:30 AM – 12:00 PM", durationMinutes: 90, conflicts: 0,
  coordinatedTasks: [
    { department: "Engineering", title: "Rail defect repair", durationMinutes: 60, priority: "Critical" },
    { department: "S&T", title: "Signal maintenance", durationMinutes: 30, priority: "High" },
    { department: "Traction", title: "OHE inspection", durationMinutes: 45, priority: "High" },
  ],
  reasons: ["Low train traffic", "High-priority maintenance", "Same corridor", "Compatible activities", "Reduced separate block occupation"],
  simulation: { beforeBlocks: 3, afterBlocks: 1, beforeDuration: 270, afterDuration: 90, beforeConflicts: 5, afterConflicts: 0, availabilityGain: "+21%" },
};

export const planBlocks: PlanBlock[] = [
  { date: "15 Sep", day: "Monday", corridor: "C01", time: "10:30–12:00", departments: "Engineering + S&T", tasks: 3, priority: "High", status: "Recommended" },
  { date: "16 Sep", day: "Tuesday", corridor: "C03", time: "14:00–15:00", departments: "Traction", tasks: 2, priority: "Critical", status: "Scheduled" },
  { date: "17 Sep", day: "Wednesday", corridor: "C02", time: "13:20–14:00", departments: "Engineering + S&T", tasks: 2, priority: "High", status: "Pending" },
  { date: "18 Sep", day: "Thursday", corridor: "C04", time: "16:15–17:30", departments: "Traction + Engineering", tasks: 4, priority: "Medium", status: "Scheduled" },
  { date: "19 Sep", day: "Friday", corridor: "C01", time: "15:10–16:00", departments: "S&T", tasks: 2, priority: "Medium", status: "Pending" },
  { date: "20 Sep", day: "Saturday", corridor: "C03", time: "09:40–10:30", departments: "Engineering", tasks: 2, priority: "Low", status: "Completed" },
];

export const availabilityTrend = [82, 85, 88, 91, 94.7];