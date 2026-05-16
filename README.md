# CS 3338 Final Project — LA City Sidewalk Assessment Simulation

**Group 5** | California State University, Northridge

> A simulated 12-month software development timeline for a rover-based
> sidewalk inspection system supporting LA City Bureau of Engineering
> ADA compliance assessment.

---

## Project Links

| Resource | URL |
|---|---|
| GitHub | https://github.com/dar-ienn/CS3338-final-project |
| Jira (Scrum) | https://cs3338-group-5-final-project.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog |
| TestRail | https://ercs3338group5.testrail.io |

## Team & Roles

| Name | Role | Owns |
|---|---|---|
| Erfan Mirzaee | Project Manager | Repo structure, Jira, `Snapshot_Objectives.tex`, audit |
| James Barron | Requirements Lead | `SRS.tex` |
| Elijah Rodriguez | Architecture Lead | `SDD.tex`, workflow diagram |
| Andrew | Technical Lead | `Design_Spec.tex`, Docker |
| Darien Amador | QA Lead | `README_User_Manual.tex`, TestRail reports |

## Repository Layout

All deliverables live under `Final_Project/` (the wrapper established during the prerequisite lab).

```
Final_Project/
├── docs/
│   ├── Snapshot_Objectives/           # Snapshot_Objectives.tex (Erfan)
│   ├── Software_Requirement_Specifications/  # SRS.tex (James)
│   ├── Software_Design_Document/      # SDD.tex (Elijah)
│   ├── User_Manual/                   # README_User_Manual.tex (Darien)
│   ├── Workflow_Diagram/              # PNG + editable source (Elijah)
│   └── TestRail_Documents/            # 4 PDF reports (Darien)
├── admin/                             # Risk register, meeting notes (Erfan)
├── docker/                            # docker-compose.yml (Andrew)
├── src/                               # Code placeholders
└── assets/                            # Images, test files
```

## Required Documents

| Document | Path | Owner |
|---|---|---|
| Snapshot Objectives | [`Final_Project/docs/Snapshot_Objectives/Snapshot_Objectives.tex`](Final_Project/docs/Snapshot_Objectives/Snapshot_Objectives.tex) | Erfan |
| Software Requirements Specification | `Final_Project/docs/srs/SRS.tex` | James |
| Software Design Document | `Final_Project/docs/sdd/SDD.tex` | Elijah |
| README / User Manual | `Final_Project/docs/readme_user_manual/README_User_Manual.tex` | Darien |
| Design Specification | `Final_Project/docs/Design_Spec/Design_Spec.tex` | Andrew |
| Workflow Diagram | `Final_Project/docs/workflow/` | Elijah |
| TestRail Reports (×4) | `Final_Project/docs/testrail/` | Darien |
| Docker Compose | `Final_Project/docker/docker-compose.yml` | Andrew |

## Snapshot Schedule

| Snapshot | Sim. Months | Theme | Definition of Done |
|---|---|---|---|
| 1 | 1–3 | Project foundation | Skeleton docs, Jira live, Docker stub validates |
| 2 | 4–6 | Data processing & displacement pipeline | SRS/SDD updated; TestRail S2 reports committed |
| 3 | 7–9 | Semi-autonomous navigation | Navigation reqs/design; safety tests pass |
| 4 | 10–12 | Final submission | All docs final; 4 TestRail PDFs; audit signed off |

## Quick Start

```bash
git clone https://github.com/dar-ienn/CS3338-final-project.git
cd CS3338-final-project
```

To validate the Docker plan (once `docker-compose.yml` is in place):
```bash
cd Final_Project/docker && docker compose config
```

## Branching Convention

- `main` is protected. No direct commits.
- Personal branches: `<name>/<scope>-snapshot<N>`, e.g., `erfan/repo-setup-snapshot1`.
- Commit prefix: `snapshot<N>:`, e.g., `snapshot1: add snapshot objectives`.
- All work merges via Pull Request with at least one reviewer.

## License

Academic project — CSUN CS 3338.
