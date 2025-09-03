# Leonardo Bot: Autonomous Interior Painting Robot

## Project Overview
Leonardo Bot is an innovative autonomous robot designed for automated interior painting. Equipped with a telescopic system for height adjustment and omnidirectional mobility, it can navigate complex indoor environments while performing painting tasks with precision.

## My Role: Autonomy and Simulation Lead
I was responsible for the autonomy and simulation components of this project. My key contributions included:

- **Autonomous Navigation System:** Developed the path planning and obstacle avoidance algorithms
- **Gazebo Simulation Environment:** Created and configured the complete simulation setup in Gazebo Sim
- **Motion Control:** Implemented control systems for the omnidirectional Mecanum wheels
- **Painting Routine Automation:** Programmed the robotic painting patterns and sequences

## Technical Specifications

### Hardware Features
- **Mobility:** Omnidirectional Mecanum wheels for full 360° movement
- **Painting System:** Telescopic mechanism for adjustable height painting (vertical reach)
- **Sensing:** Integrated sensors for environment perception and localization
- **Control:** Robotic operating system for precise motion and task execution

### Capabilities
- Autonomous navigation in interior spaces
- Adaptive painting height adjustment via telescopic system
- Omnidirectional movement for precise positioning
- Pre-programmed and customizable painting routines

## Implementation Status
The project is currently in the implementation phase, with the simulation environment fully functional and real-world testing underway.

## Simulation Demo

### Autonomous Navigation and Painting Routine

<video width="100%" controls>
  <source src="content/leonardo-robot/video/rutine_paint.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*Simulation showing the robot's omnidirectional movement and a short painting routine in Gazebo Sim*

### Telescopic System Operation

<video width="100%" controls>
  <source src="content/leonardo-robot/video/telescopic_robot.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*Close-up of the telescopic mechanism for adjustable height painting*

## Technical Approach
- **Simulation Environment:** Gazebo Sim with custom models and plugins
- **Navigation Stack:** ROS-based autonomy package with customized path planning
- **Control System:** PID controllers for precise telescopic adjustment and painting control
- **Localization:** Adaptive Monte Carlo Localization (AMCL) for indoor positioning

## Next Development Steps
- Integration of real-world sensor data into simulation
- Optimization of painting patterns for efficiency
- Enhanced obstacle avoidance for complex environments
- Transition from simulation to full physical implementation