# RB1 Masterclass Project: Autonomous Warehouse Robot

## Project Overview
This project was developed as the final assignment for The Construct's Masterclass, featuring a RB1 robot with a built-in lifting platform, capable of performing complete warehouse automation tasks. The system implements a behavior tree-based autonomy architecture to locate shelves, utilize the existing lifting mechanism for pick and unload operations, and includes a web application interface for task management and monitoring.

## My Role: Autonomy & Integration Developer
I designed and implemented the complete autonomous operation system, focusing on:

- **Behavior Tree Architecture:** Developed the core decision-making system using behavior trees for task execution
- **Navigation System:** Implemented autonomous navigation and shelf localization
- **Web Application Integration:** Built the frontend-backend system for user interaction and monitoring

## Technical Implementation

### Core Architecture
- **Framework:** ROS 2 (Robotic Operating System 2)
- **Autonomy System:** Behavior Trees for decision making and task sequencing
- **Navigation:** ROS 2 Navigation Stack with customized behavior plugins
- **Platform Control:** Integration and control of existing lifting mechanism

### Web Application Layer
- **Frontend:** React.js-based dashboard for task management
- **Backend:** ROSBridge integration for robot-web communication
- **Features:** Real-time monitoring, task initiation, and status reporting

### Key Capabilities
1. **Environment Exploration:** Autonomous mapping and shelf searching
2. **Shelf Localization:** Detection and positioning of target shelves
3. **Lifting Integration:** Control of existing platform mechanism for loading/unloading
4. **Transport System:** Safe navigation and shelf transportation
5. **User Control:** Web-based task management interface

## Project Demonstration

### Project presentation
<video width="100%" controls>
  <source src="content/rb1-robot/video/rb1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>


*Web-based control panel for task management and robot monitoring*

## Open Source Project
This project is completely open source! You can access the full source code, documentation, and implementation details on GitHub:

🔗 **Repository:** [https://github.com/morg1207/rb1_autonomy](https://github.com/morg1207/rb1_autonomy)

### Behavior Tree Architecture
The behavior tree system consists of two main components:

<img src="content/rb1-robot/pictures/architecture.png" alt="Main architecture" width="600" style="border: 1px solid #ccc; border-radius: 5px;"/>

#### Main Behavior Tree Nodes
<img src="content/rb1-robot/pictures/behavior_tree_nodes.png" alt="Main Behavior Tree Structure" width="600" style="border: 1px solid #ccc; border-radius: 5px;"/>

*Primary behavior tree structure showing the main decision-making workflow*

#### Auxiliary Behavior Tree Nodes
<img src="/content/rb1-robot/pictures/behavior_tree_nodes_auxiliary.png" alt="Auxiliary Behavior Tree Nodes" width="600" style="border: 1px solid #ccc; border-radius: 5px;"/>

*Supporting nodes and auxiliary behaviors that complement the main tree structure*

## Repository Features
- Complete ROS 2 package structure
- Behavior tree XML definitions and nodes
- Web application source code (React + ROSBridge)
- Documentation and setup instructions
- Simulation environment configurations
- Example launch files and test scenarios

## Contributing
Feel free to explore the code, submit issues, or contribute to the project! The repository includes detailed documentation to help you get started with the codebase and understand the architecture.

---

*This project was developed as part of The Construct's Masterclass, demonstrating complete autonomous warehouse automation capabilities using the RB1's built-in lifting platform.*