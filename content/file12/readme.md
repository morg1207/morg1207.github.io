<link rel="stylesheet" href="css/markdown.css">
<a href="https://github.com/Andy-Leo10/warehouse_project" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

# Warehouse project
This project uses Nav2 for autonomous navigation of a robot in a warehouse. The robot is a RB1 robot and the warehouse is a Gazebo simulation. The project is divided into 4 parts: Mapping, Localization, Navigation, and the RB1 app. The project is developed in ROS2 Galactic.

Here is a video demonstration of the project:
<video width="100%" controls>
  <source src="https://github.com/Andy-Leo10/warehouse_project/assets/60716487/4628aa23-c77a-4e4f-ab95-7df550ce822a" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Mandatory
+ Start the simulation in ROS1
```
source ~/simulation_ws/devel/setup.bash
roslaunch rb1_base_gazebo warehouse_rb1.launch
```
+ Start the ROS1 bridge
```
source ~/simulation_ws/devel/setup.bash
roslaunch load_params load_params_base.launch
source /opt/ros/galactic/setup.bash
ros2 run ros1_bridge parameter_bridge
```

## 1 Mapping Launch files
- [x] Start mapping
```
ros2 launch cartographer_slam cartographer.launch.py
rso2 launch cartographer_slam start_rviz_with_arguments.launch.py
ros2 run nav2_map_server map_saver_cli -f NAME
```
- [x] Providing map
```
ros2 launch map_server map_server.launch.py map_file:=warehouse_map_sim.yaml use_sim_time:=True
ros2 launch map_server map_server.launch.py map_file:=warehouse_map_real.yaml use_sim_time:=False
```

## 2 Localization Launch files
- [x] Start localization
```
ros2 launch localization_server localization.launch.py map_file:=warehouse_map_sim.yaml use_sim_time:=True
ros2 launch localization_server localization.launch.py map_file:=warehouse_map_real.yaml use_sim_time:=False
```

## 3 Navigation Launch files
- [x] Pre approach

```
ros2 launch path_planner_server pathplanner.launch.py use_sim_time:=True
ros2 launch path_planner_server pathplanner.launch.py use_sim_time:=False
```

## 4 NAV2 app Launch files
- [x] RB1 working on the warehouse

```
python3 move_shelf_to_ship.py --use_sim_time True
python3 move_shelf_to_ship.py --use_sim_time False
```

## Others
```
ros2 run tf2_tools view_frames
```
```
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args --remap cmd_vel:=/robot/cmd_vel
ros2 topic pub /elevator_up std_msgs/msg/String "{}"
ros2 topic pub /elevator_down std_msgs/msg/String "{}"
```

[rosgraph.pdf](https://github.com/Andy-Leo10/warehouse_project/files/13794902/rosgraph.pdf)
