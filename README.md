# RailOpt AI Planner

Build a modern, professional web application frontend for an SIH project called:

RailOpt AI

AI-Powered Automatic Block Planning for Indian Railways

PROJECT PURPOSE

Railway maintenance activities are currently planned independently by Engineering/Track, Signal & Telecommunication (S&T), and Traction Distribution departments.

The goal of this application is to provide a centralized AI-powered dashboard that can:

Integrate maintenance tasks from TMS, SMMS, and TDMS.

Consider train timetable and corridor availability.

Prioritize maintenance tasks based on criticality, urgency, safety impact, overdue status, and asset availability.

Recommend optimized maintenance blocks.

Coordinate compatible maintenance activities from multiple departments.

Minimize infrastructure downtime and train conflicts.

Generate weekly and monthly maintenance plans.

This is a FRONTEND-ONLY prototype for now.

Do NOT build the backend, database server, ML model, or real railway API integrations yet.

However, structure the frontend so that it can later connect cleanly to a Python FastAPI backend developed in VS Code using REST APIs.

DESIGN STYLE

Create a professional railway operations control-center dashboard.

Style should be:

Modern

Professional

Clean

Enterprise-grade

Suitable for an SIH presentation/demo

Easy for railway officials and judges to understand

Desktop-first but responsive

Avoid excessive animations

Avoid a generic SaaS look

Use a railway/transportation-inspired visual identity.

Use a clean light interface with strong visual hierarchy.

Use cards, tables, charts, status badges, timeline/Gantt-style views, filters, and clear action buttons.

Use icons where useful.

The application should feel like a real railway maintenance planning system rather than a simple college dashboard.

APPLICATION STRUCTURE

Create the following pages:

Dashboard

Maintenance Tasks

AI Priority

Train & Corridor

Block Optimization

Weekly Plan

Monthly Plan

Analytics

Settings

Use a persistent left sidebar navigation.

Top bar should contain:

Application name/logo

Current page title

Search

Notification icon

User/profile section

1. DASHBOARD

Create a highly informative operations dashboard.

Header:

"RailOpt AI"
"Automatic Railway Block Planning"

Add a short subtitle:

"AI-assisted maintenance planning for safer and more efficient railway operations."

KPI cards

Show:

Total Maintenance Tasks

Critical Tasks

Planned Blocks

Pending Tasks

Asset Availability

Block Utilization

Train Conflicts

Estimated Downtime Reduction

Use realistic DEMO values.

Clearly label these values as simulation/demo data where appropriate.

Example:

Total Tasks: 128
Critical Tasks: 24
Planned Blocks: 32
Pending Tasks: 18
Asset Availability: 94.7%
Block Utilization: 87.3%
Train Conflicts: 5
Estimated Downtime Reduction: 21%

Charts

Create:

Maintenance Tasks by Department

Engineering
S&T
Traction

Use a suitable chart.

Maintenance Priority Distribution

Critical
High
Medium
Low

Asset Availability Trend

Show a line chart comparing availability over recent planning periods.

Block Utilization

Show planned vs available block time.

AI Recommendation card

Create a highlighted section:

"AI Recommendation"

Example:

"3 high-priority maintenance activities can be coordinated in Corridor C01 during the 10:30 AM – 12:00 PM low-traffic window."

Button:

"View Recommended Block"

Clicking this should navigate to the Block Optimization page.

2. MAINTENANCE TASKS

Create a maintenance task management page.

At the top:

Title:
"Maintenance Tasks"

Subtitle:
"Integrated maintenance activities from Engineering, S&T and Traction departments."

Filters

Add:

Department

Corridor

Priority

Status

Date

Search Task ID

Task table

Columns:

Task ID

Department

Asset

Location

Corridor

Maintenance Type

Severity

Criticality

Overdue Days

Duration

Priority

Status

Recommended Date

Use realistic demo data.

Departments:

Engineering
S&T
Traction

Priority badges:

Critical
High
Medium
Low

Status:

Pending
Recommended
Scheduled
Completed

Add buttons:

"View Details"
"Schedule"

Do NOT actually persist data yet. Use mock frontend data.

3. AI PRIORITY

Create a dedicated AI maintenance prioritization page.

Header:

"AI Maintenance Priority"

Subtitle:

"AI-assisted ranking of maintenance activities based on urgency, criticality, safety and asset impact."

Priority explanation

Show a visual scoring section:

Priority Score considers:

Asset Criticality

Urgency

Safety Impact

Overdue Days

Asset Availability Impact

Show example weighted factors:

Criticality: 30%
Urgency: 25%
Safety Impact: 20%
Overdue Status: 15%
Asset Availability Impact: 10%

These are configurable demo weights.

Priority table

Columns:

Task ID
Department
Asset
Criticality
Urgency
Safety Impact
Overdue Days
Priority Score
Priority Level

Sort highest priority first.

AI insight

Show:

"Why is this task high priority?"

Example:

"High priority because the asset is safety-critical, the maintenance is overdue, and the failure may affect corridor availability."

This is important for AI explainability.

4. TRAIN & CORRIDOR

Create a page for train timetable and corridor availability.

Header:

"Train & Corridor Availability"

Subtitle:

"Identify suitable maintenance windows while considering train movements."

Corridor cards

Example:

C01
C02
C03
C04

Each corridor card should show:

Corridor ID

Current status

Next train

Traffic level

Available maintenance windows

Number of pending maintenance tasks

Train timetable table

Columns:

Train ID
Train Type
Corridor
Arrival
Departure
Traffic Priority

Train types:

Express
Passenger
Goods

Maintenance window timeline

Create a visual horizontal timeline.

Example:

09:00 — Train
09:30 — Train
10:00–11:30 — Available Window
11:30 — Passenger Train
12:00 — Goods Train

Clearly distinguish:

Train occupied periods
Available maintenance periods

Add:

"Find Best Window"

button.

5. BLOCK OPTIMIZATION

This is the MAIN FEATURE of the application.

Header:

"AI Block Optimization"

Subtitle:

"Generate coordinated maintenance blocks with minimum disruption to train operations."

Create a planning interface.

Input section

Allow user to select:

Planning Date

Corridor

Maximum Block Duration

Priority Threshold

Department

Preferred Time Window

Button:

"Generate AI Block Plan"

For now, this should work with mock frontend data.

Later this button will call:

POST /api/optimize

Do not implement the backend now.

AI optimization result

Show a recommended block:

Example:

Corridor: C01

Date: 15 September 2026

Recommended Time:
10:30 AM – 12:00 PM

Block Duration:
90 minutes

Train Conflicts:
0

Tasks Coordinated:
3

Departments:
Engineering + S&T + Traction

Coordinated maintenance tasks

Show:

Engineering
Rail defect repair
60 minutes

S&T
Signal maintenance
30 minutes

Traction
OHE inspection
45 minutes

Only show activities as coordinated when the mock data indicates they are compatible.

Optimization reasons

Display:

✓ Low train traffic
✓ High-priority maintenance
✓ Same corridor
✓ Compatible activities
✓ Reduced separate block occupation

Comparison

Create a clear BEFORE vs AI OPTIMIZED comparison.

Before AI:

3 separate maintenance blocks

After AI:

1 coordinated maintenance block

Show:

Block occupation

Maintenance downtime

Train conflicts

Asset availability

Clearly label all performance numbers as "Simulation".

6. WEEKLY PLAN

Create a weekly maintenance planning page.

Header:

"Weekly Block Plan"

Show a calendar/timeline view.

Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday

Each block should display:

Corridor

Time

Department

Number of tasks

Priority

Status

Example:

Monday
C01
10:30–12:00
Engineering + S&T
High Priority

Tuesday
C03
14:00–15:00
Traction
Critical

Add filters:

Corridor

Department

Priority

Status

Add button:

"Generate Weekly AI Plan"

Later this button should connect to:

POST /api/weekly-plan

7. MONTHLY PLAN

Create a monthly planning page.

Header:

"Monthly Maintenance Plan"

Show a monthly calendar.

Each scheduled block should display:

Date

Corridor

Time

Department

Priority

Status

Add summary cards:

Total Planned Blocks
Critical Tasks Completed
Average Block Duration
Asset Availability
Block Utilization

Add button:

"Generate Monthly AI Plan"

Future API:

POST /api/monthly-plan

8. ANALYTICS

Create an analytics page showing the impact of AI-based planning.

Header:

"Planning Analytics"

Create charts for:

Existing vs AI Optimized

Compare:

Number of Blocks

Total Block Duration

Train Conflicts

Maintenance Downtime

Asset Availability

Department Coordination

Show how many maintenance activities were coordinated between:

Engineering + S&T
Engineering + Traction
S&T + Traction
Engineering + S&T + Traction

Asset Availability Trend

Show improvement over planning periods.

Block Utilization

Show:

Available Block Time
Used Block Time
Unused Time

Important:

Use "Simulation" labels wherever values are not from real railway systems.

9. SETTINGS

Create a simple settings page.

Sections:

Planning Configuration

Maximum block duration

Minimum maintenance window

Priority threshold

Train conflict tolerance

Coordination enabled/disabled

AI Weights

Allow demo sliders for:

Criticality
Urgency
Safety
Overdue Status
Asset Impact

Data Sources

Display:

TMS
SMMS
TDMS
COA

Status can show:

"Demo Data Connected"

Do not create real integrations yet.

API-READY FRONTEND ARCHITECTURE

Very important.

Build the frontend so the mock data layer can later be replaced with FastAPI REST API calls without redesigning the UI.

Create a clean API service structure such as:

src/
components/
pages/
services/
api.ts
maintenanceApi.ts
trainApi.ts
blockApi.ts
planningApi.ts
types/
maintenance.ts
train.ts
block.ts
planning.ts
data/
mockMaintenance.ts
mockTrains.ts
mockBlocks.ts

Use TypeScript interfaces/types for all entities.

Do not hard-code data directly inside UI components wherever possible.

Create a centralized API base URL configuration.

Example concept:

VITE_API_BASE_URL

The frontend should be prepared to communicate with:

http://localhost:8000/api

later.

Do not assume the backend exists now.

FUTURE API CONTRACTS

Prepare frontend service functions for these future endpoints:

GET /api/dashboard

GET /api/maintenance

GET /api/maintenance/{task_id}

GET /api/trains

GET /api/corridors

GET /api/availability

POST /api/priority/predict

POST /api/optimize

GET /api/blocks

GET /api/weekly-plan

POST /api/weekly-plan/generate

GET /api/monthly-plan

POST /api/monthly-plan/generate

GET /api/analytics

These endpoints are only frontend service placeholders for now.

Use mock data when the API is unavailable.

IMPORTANT FUTURE BACKEND COMPATIBILITY

The future backend will be developed separately in Python/FastAPI using VS Code.

Therefore:

Use REST API architecture.

Use JSON request/response structures.

Keep frontend and backend responsibilities separate.

Do not put AI/ML logic inside the frontend.

Do not put optimization logic inside the frontend.

Do not create fake AI calculations in the UI.

The frontend should only display results returned by the backend.

Mock data should imitate the future API response format.

Keep API calls inside service files rather than directly inside page components.

Handle loading, success and error states.

Show meaningful error messages when backend is unavailable.

DEMO DATA

Create realistic synthetic railway maintenance and timetable data.

Include at least:

30 maintenance tasks

Multiple Engineering tasks

Multiple S&T tasks

Multiple Traction tasks

10+ train movements

4+ corridors

Multiple available maintenance windows

Some overdue tasks

Critical, High, Medium and Low priority tasks

Some tasks that can be coordinated

Some tasks that cannot be coordinated

Do not claim this is real Indian Railways data.

Label it:

"Demo / Synthetic Data"

USER EXPERIENCE

The main user journey should be:

Dashboard
→ Review critical maintenance
→ Open AI Priority
→ Review train/corridor availability
→ Open Block Optimization
→ Generate AI Block Plan
→ Review coordinated tasks
→ Compare Existing vs Optimized
→ Generate Weekly Plan
→ Generate Monthly Plan
→ View Analytics

Make this journey extremely easy to demonstrate during an SIH presentation.

UI DETAILS

Use:

Responsive sidebar

Professional tables

KPI cards

Charts

Status badges

Timeline/Gantt-style visualization

Modal/dialog for task details

Toast notifications

Loading states

Empty states

Error states

Confirmation dialogs for important actions

Use consistent spacing and typography.

Avoid overcrowding.

Prioritize readability.

FINAL REQUIREMENT

The finished frontend should look like a realistic AI Railway Operations & Maintenance Planning Control Center.

The most important page is:

"AI Block Optimization"

The most important story of the UI should be:

Maintenance Data
→ AI Priority
→ Train/Corridor Availability
→ AI Optimization
→ Coordinated Block
→ Weekly/Monthly Plan
→ Better Asset Availability

Build the frontend completely with mock data now, while keeping the architecture ready for a future Python FastAPI backend and AI/ML optimization engine.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://railopt-ai-planner.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/43e34bc6-c43d-4693-8ca6-80f4a0e1736c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
