# CS3338 LA City Sidewalk Assessment Simulation

## Project Overview

This repository contains the CS3338 Final Project simulation for the LA City Sidewalk Assessment / Ascent project.

The project simulates the software engineering workflow for a rover-based sidewalk inspection system that collects sidewalk data, processes LiDAR point-cloud scans, identifies sidewalk joints and cracks, calculates displacement measurements, and supports semi-autonomous navigation planning.

The simulated project timeline is organized into four development snapshots representing a 12-month software development cycle.

## Jira Board

https://cs3338-group-5-final-project.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog

## Repository Structure

```text
Final_Project/
  docs/
    sdd/
      SDD.tex
    srs/
      SRS.tex
    design_spec/
      Design_Spec.tex
    readme_user_manual/
      README_User_Manual.tex
    snapshot_objectives/
      Snapshot_Objectives.tex
    workflow/
      Workflow_Diagram.png
      Workflow_Diagram.drawio
    testrail/
      TestRail_Snapshot2_TestRun_Report.pdf
      TestRail_Snapshot2_Regression_Report.pdf
      TestRail_Snapshot3_TestRun_Report.pdf
      TestRail_Snapshot4_Final_TestRun_Report.pdf
  docker/
    docker-compose.yml
  src/
    frontend/
    backend/
    ml_pipeline/
    navigation/
    data_processing/
  tests/
  storage/
```

## Required Deliverables

- Software Design Document: `Final_Project/docs/sdd/SDD.tex`
- Software Requirements Specification: `Final_Project/docs/srs/SRS.tex`
- README / User Manual: `Final_Project/docs/readme_user_manual/README_User_Manual.tex`
- Design Specification: `Final_Project/docs/design_spec/Design_Spec.tex`
- Snapshot Objectives: `Final_Project/docs/snapshot_objectives/Snapshot_Objectives.tex`
- Workflow Diagram: `Final_Project/docs/workflow/Workflow_Diagram.png`
- Editable Workflow Diagram: `Final_Project/docs/workflow/Workflow_Diagram.drawio`
- TestRail Reports: `Final_Project/docs/testrail/`
- Docker Compose: `Final_Project/docker/docker-compose.yml`

## Simulated Features

- LiDAR point-cloud processing
- Orthoimage and DEM generation
- U-Net segmentation workflow
- Vertical displacement analysis
- Horizontal displacement research
- Semi-autonomous navigation architecture
- GPS waypoint planning
- Manual override and safe-stop behavior
- Telemetry logging
- Obstacle detection workflows
- TestRail-based QA reporting

## Technologies and Dependencies

- Python 3.10
- TensorFlow / Keras
- OpenCV
- NumPy
- Pandas
- SciPy
- Matplotlib
- Open3D
- Laspy
- Docker
- ROS / ROS Bridge
- PostgreSQL
- React / Vite
- FastAPI

## Final Submission Notes

This repository represents a simulated software engineering project for CS3338 and is intended for educational and documentation purposes.

The final submission should be the GitHub repository URL.