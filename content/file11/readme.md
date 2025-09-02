<link rel="stylesheet" href="css/markdown.css">
<a href="https://github.com/Andy-Leo10/manipulation_project" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

# Manipulation project
This project uses Moveit2 to control a UR3e robot in a Gazebo simulation. The robot is able to pick and place objects in a warehouse. The project is divided into two parts: Forward Kinematics (FK) and Inverse Kinematics (IK) with Perception. The first part uses a fixed position to pick and place objects. The second part uses perception to detect objects and plan the pick and place actions.

Here is a video demonstration of the project:
<video width="100%" controls>
  <source src="https://github.com/Andy-Leo10/manipulation_project/assets/60716487/e5a08704-20b6-412d-92f0-49e8a993472b" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Run the simulation
```
source ~/ros2_ws/install/setup.bash
ros2 launch the_construct_office_gazebo warehouse_ur3e.launch.xml
```
Check if everything is correct
```
ros2 control list_controllers
ros2 topic echo /joint_states
```

## Launch most importants nodes v.FK
+ Move Group
```
ros2 launch my_moveit_config move_group.launch.py use_sim_time:=True
ros2 launch real_moveit_config move_group.launch.py use_sim_time:=False
```
+ Robot Interface 
```
ros2 launch my_moveit_config moveit_rviz.launch.py
ros2 launch real_moveit_config moveit_rviz.launch.py
```
+ Custom Task: Pick & Place
```
ros2 launch moveit2_scripts pick_and_place.launch.py use_sim_time:=True
ros2 launch moveit2_scripts pick_and_place.launch.py use_sim_time:=False
```

## Launch most importants nodes v.IK&Perception
+ Move Group
```
ros2 launch my_moveit_config move_group.launch.py use_sim_time:=True
ros2 launch real_moveit_config move_group.launch.py use_sim_time:=False
```
+ Robot Interface 
```
ros2 launch my_moveit_config moveit_rviz.launch.py
ros2 launch real_moveit_config moveit_rviz.launch.py
```
+ Custom Task: Pick & Place
```
ros2 launch moveit2_scripts pick_and_place_perception.launch.py
ros2 launch moveit2_scripts pick_and_place_perception_real.launch.py
```

## Test Perception 
+ Start the action 
```
ros2 run simple_grasping basic_grasping_perception_node --ros-args -p debug_topics:=true
ros2 run simple_grasping basic_grasping_perception_node_real --ros-args -p debug_topics:=true
```
+ Call the action 
```
ros2 action send_goal /find_objects grasping_msgs/action/FindGraspableObjects "{plan_grasps: false}"
```

## Others
GUI for arms
```
sudo apt-get update
sudo apt-get install ros-humble-rqt-joint-trajectory-controller
ros2 run rqt_joint_trajectory_controller rqt_joint_trajectory_controller
```
URDF Tree 
```
ros2 run tf2_tools view_frames
```
Capture positions
```
ros2 topic echo /joint_states
ros2 run tf2_ros tf2_echo base_link tool0
```
Generate new cube in simulation
```
ros2 run gazebo_ros spawn_entity.py -file /home/user/ros2_ws/src/manipulation_project/grasp_box.urdf -x 5.28 -y -3.84 -z 1.0 -entity grasp_box_x
```

### Perception
![description: perception](content/file11/pictures/perception.png)

### Pick
![description: pick](content/file11/pictures/pick.png)

### Place
![description: place](content/file11/pictures/place.png)

### Recording

<video width="100%" controls>
    <source src="content/file11/pictures/recording.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
