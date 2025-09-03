# Autonomous Forklift Robot

## Project Overview
Leonardo is an autonomous forklift robot prototype designed to automate warehouse logistics. Its primary task is to autonomously locate, pick up, and unload pallets onto designated shelves, streamlining material handling operations without human intervention.

## My Role: Project Lead
As the Project Lead, I was responsible for the complete end-to-end development and integration of the system. My key contributions included:

- **Hardware Development & Integration:** Spearheaded the selection, configuration, and integration of all robotic components.
- **Software Architecture & Development:** Led the design and implementation of the core software stack.
- **Autonomy System:** Developed the complete autonomous navigation and task execution system.
- **System Integration:** Orchestrated the seamless interaction between hardware and software components.

## Technical Specifications

### Hardware
- **Sensing:** 2x LiDAR sensors for 360° perception and obstacle avoidance
- **Vision:** Intel RealSense D435i depth camera for pallet detection and localization
- **Compute:** NVIDIA Jetson Nano for onboard processing and real-time decision making
- **Platform:** Custom-built forklift base with precision lifting capabilities

### Capabilities
- Autonomous pallet detection and localization
- Path planning and navigation in dynamic environments
- Precise pallet picking and unloading operations
- Real-time obstacle avoidance and safety monitoring

## Implementation Status
The project has successfully progressed from simulation to a fully functional real-world prototype. The system currently performs autonomous pallet handling operations with high reliability.

## Media

### Real-World Implementation


<video width="100%" controls>
  <source src="content/forklift-robot/video/forklift_edit.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---
### Architecture

<img src="content/forklift-robot/pictures/architecture.png" alt="Autonomous Forklift Robot" width="600"/>
---

### Diagramt components

<img src="content/forklift-robot/pictures/diagramt_componets.png" alt="Autonomous Forklift Robot" width="600"/>