# AgroBot — Weed Detection in Cacao Plantations

## Project Overview
AgroBot is an agricultural mobile robot that identifies and maps weeds in cacao plantations: it navigates
the plantation autonomously, detects weeds with a camera and places them on the map.

## My Role: Technical Advisor (thesis project)
I was the technical advisor of this engineering thesis, guiding the architecture of the robot and its
autonomy and perception stack.

## Technical Approach
- **Perception:** weed detection with **YOLO** running on an **NVIDIA Jetson Nano**
- **Outdoor navigation:** autonomous navigation along the plantation rows
- **Localization & mapping:** SLAM plus **Kalman-filter sensor fusion** for outdoor localization
- **Weed mapping:** detections are placed on the map to build a weed map of the field
- **Simulation:** cacao plantation modeled in Gazebo Sim and visualized in RViz

## Simulation

<img src="assets/img/agrobot.jpg" alt="AgroBot cacao plantation simulation in Gazebo and RViz">

*Cacao plantation in Gazebo Sim (left) and the robot's map with detections in RViz (right).*

## Status
Implemented as a thesis project.
