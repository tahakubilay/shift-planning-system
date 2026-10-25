<div align="center">

# Shift Planning & Workforce Management System

### Rule-driven workforce scheduling for complex municipal operations

<img src="./assets/hero.svg" alt="Animated project header" />

<p><a href="./README.md"><strong>English</strong></a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.tr.md">Türkçe</a></p>

<p>
  <a href="https://github.com/tahakubilay"><img src="https://img.shields.io/badge/Taha%20Kubilay-GitHub-181717?style=for-the-badge&logo=github" alt="Taha Kubilay on GitHub" /></a>
  <a href="https://github.com/tahakubilay/shift-planning-system"><img src="https://img.shields.io/badge/Repository-Shift%20Planning-0A66C2?style=for-the-badge&logo=github" alt="Repository" /></a>
  <a href="https://shift-planning-system-drab.vercel.app/takvim"><img src="https://img.shields.io/badge/Live%20Demo-Open%20App-16A34A?style=for-the-badge&logo=vercel&logoColor=white" alt="Open live demo" /></a>
</p>

![Last Commit](https://img.shields.io/github/last-commit/tahakubilay/shift-planning-system?style=flat-square)
![Repo Size](https://img.shields.io/github/repo-size/tahakubilay/shift-planning-system?style=flat-square)

</div>

---

## Overview

Shift Planning & Workforce Management System is designed for operational environments where scheduling is governed by many interacting rules, personnel constraints and organizational requirements.

Instead of treating scheduling as a simple calendar problem, the system models it as a business-rule and constraint-management problem. It brings workforce planning, validation, historical tracking and operational visibility into a single workflow.

## Core Challenges

A real workforce planning system must answer questions such as:

- Who is eligible for a given shift?
- Which personnel and operational rules apply?
- Which assignments conflict with existing constraints?
- How should workload be distributed?
- What historical context should influence planning?
- How can managers review and understand the resulting schedule?

## Scheduling Flow

```mermaid
flowchart LR
    P[Personnel] --> RULES[Rules & Constraints]
    AV[Availability] --> RULES
    OPS[Operational Needs] --> RULES
    RULES --> PLAN[Shift Planning]
    PLAN --> CHECK[Validation]
    CHECK --> SCHEDULE[Published Schedule]
    SCHEDULE --> HISTORY[(History)]
    HISTORY --> ANALYTICS[Statistics & Analytics]
```

## Core Capabilities

| Capability | Purpose |
|---|---|
| **Shift Planning** | Create and manage workforce schedules |
| **Constraint Handling** | Apply operational and personnel restrictions |
| **Personnel Management** | Keep relevant workforce context available during planning |
| **Workload Awareness** | Support balanced and informed assignment decisions |
| **Historical Tracking** | Preserve previous assignments and operational context |
| **Statistics & Analytics** | Turn scheduling history into operational insight |
| **Administration** | Centralize planning workflows for authorized users |

## Engineering Focus

The project focuses on modelling a rule-heavy operational domain in a way that remains understandable and maintainable as complexity grows.

Key engineering concerns include:

- Business-rule modelling
- Constraint-aware scheduling
- Data consistency
- Validation workflows
- Historical records
- Reporting and analytics
- Maintainable domain architecture
- Administrative workflow design

## Live Demo

The deployed application can be explored directly:

### **[→ Open Shift Planning System](https://shift-planning-system-drab.vercel.app/takvim)**

The demo environment uses synthetic users and synthetic scheduling data. No real municipal personnel records are included in the public deployment.

## Data & Privacy

This repository and its public demo are intentionally separated from real operational personnel data. Public-facing examples use synthetic data so the system can be demonstrated without exposing private records.

---

<div align="center">

### Built by [Taha Kubilay](https://github.com/tahakubilay)

`Workforce Management` · `Scheduling` · `Business Rules` · `Enterprise Software` · `Analytics`

</div>