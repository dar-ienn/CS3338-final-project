# Risk Register — CS 3338 LA City Sidewalk Assessment

**Owner:** Erfan Mirzaee (PM)
**Update cadence:** End of each snapshot, plus on any new bug filed in Jira.

Likelihood × Impact = Score (1=low, 5=high). Re-score every snapshot.

| ID | Risk | Likelihood | Impact | Score | Owner | Mitigation | Status |
|---|---|---|---|---|---|---|---|
| R-01 | LiDAR scan import fails (LAS/PLY format quirks) | 4 | 4 | 16 | Andrew | Pin Laspy + Open3D versions; document supported formats in Design Spec. | Open |
| R-02 | Mask and DEM resolution mismatch produces bad displacement values | 3 | 5 | 15 | Andrew | Add validation step in SDD that asserts shape parity before displacement calc. | Open |
| R-03 | Missing Docker dependency at build time | 3 | 3 | 9 | Andrew | Run `docker compose config` in CI on every PR. | Open |
| R-04 | GPS waypoint drift causes navigation to skip stops | 4 | 4 | 16 | Elijah | SRS requires telemetry log + manual override; TestRail safety suite. | Open |
| R-05 | Obstacle detection false positive triggers safe-stop too often | 3 | 3 | 9 | Elijah | Document tunable confidence threshold in Design Spec. | Open |
| R-06 | README setup instructions incomplete (graders cannot run repo) | 4 | 5 | 20 | Darien | Pre-submission audit step: another teammate clones in incognito + follows README verbatim. | Open |
| R-07 | LaTeX files don't compile on grader's machine | 3 | 4 | 12 | Erfan | Pin to `pdflatex` standard packages only; commit a compiled PDF alongside `.tex` for backup. | Open |
| R-08 | One team member falls behind; snapshot blocked | 2 | 5 | 10 | Erfan | Weekly standup; snapshot mid-checkpoint at week 6 of each 12-week block. | Open |
| R-09 | Jira board access lost / org admin issue | 1 | 4 | 4 | Erfan | Export Jira issues to CSV at end of each snapshot, commit to `admin/jira_exports/`. | Open |
| R-10 | TestRail trial expires before Snapshot 4 | 2 | 4 | 8 | Darien | Confirm trial duration; have export PDF habit so loss of access doesn't lose work. | Open |
| R-11 | Team using `.docx` instead of required `.tex` files | 5 | 4 | 20 | Erfan | Flag at sprint planning; document owners must convert their placeholders to `.tex` in S1. | Open |
| R-12 | `.gitignore` excludes deliverables (e.g., `docs/User_Manual/`) | 5 | 5 | 25 | Erfan | Fix in S1; review every snapshot. | Resolved S1 |

## Snapshot 2 Update

_To be completed at end of Snapshot 2._

## Snapshot 3 Update

_To be completed at end of Snapshot 3._

## Snapshot 4 Update

_To be completed at end of Snapshot 4._
