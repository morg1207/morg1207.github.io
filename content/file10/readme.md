<link rel="stylesheet" href="css/markdown.css">
<a href="https://github.com/Andy-Leo10/Dijkstra-Planner" target="_blank"><strong> → GO TO GITHUB REPOSITORY</strong></a>

# Dijkstra Planner Plugin
This project is a ROS2 plugin that implements the Dijkstra algorithm for path planning. The plugin is designed to work with the ROS2 Navigation2 stack. The plugin is implemented in C++ and is based on the nav2_core::GlobalPlanner interface.

Switch to the branch with Dijkstra Planner

    cd ~/ros2_ws/src/path_planning_checkpoint
    git switch project-work

Terminal 1

    export MY_ROBOT=mp_400; export MAP_NAME=neo_track1
    export GAZEBO_MODEL_PATH=/home/user/ros2_ws/src/neobotix_ros2/neo_simulation2/models:/home/user/ros2_ws/src:/home/user/ros2_ws/src/neobotix_ros2
    ros2 launch neo_simulation2 simulation.launch.py

Terminal 2

    ros2 launch neo_nav2 neo_nav2_full.launch.xml


Here is a video demonstration of the project:
<video width="100%" controls>
  <source src="https://github.com/Andy-Leo10/Dijkstra-Planner/assets/60716487/c2fc5522-587a-4077-b94a-963932a01219" type="video/mp4">
  Your browser does not support the video tag.
</video>


---
For pushing branches:
    
    git push -u origin project-work
---
# Dijkstra Class

| Method | Description |
| --- | --- |
| `configure` | Configures the planner. It's called when the planner is being initialized. |
| `cleanup` | Cleans up the planner. It's called when the planner is being shut down. |
| `activate` | Activates the planner. It's called when the planner is being activated. |
| `deactivate` | Deactivates the planner. It's called when the planner is being deactivated. |
| `createPlan` | Given a start and goal pose, it computes a plan (path) and returns it. |
| `dijkstraShortestPath` | Performs Dijkstra's shortest path algorithm on a costmap to find the shortest path from a start cell to a goal cell. |
| `fromWorldToGrid` | Converts world coordinates (in meters) to grid map coordinates. |
| `fromGridToWorld` | Converts grid map coordinates to world coordinates (in meters). |
| `gridCellxyToIndex` | Converts grid cell coordinates to a linear index value. |
| `fromIndexToGridCellxy` | Converts a linear index value to grid cell coordinates. |
| `find_neighbors` | Identifies neighbor nodes by inspecting the 8 adjacent nodes. |
| `print_map` | Prints the contents of a map. Useful for debugging. |


| Member Variable | Description |
| --- | --- |
| `node_` | Shared pointer to the lifecycle node. |
| `costmap_ros_` | Shared pointer to the ROS costmap. |
| `tf_` | Shared pointer to the TF2 buffer. |
| `interpolation_resolution_` | The resolution for interpolation. |
| `global_frame_`, `name_` | The global frame of the costmap and the name of the planner. |
| `costmap_` | Pointer to the values in the occupancy grid. |
| `origin_x_`, `origin_y_` | The x and y values of the origin of the costmap. |
| `resolution_` | The resolution of the costmap. |
| `width_`, `height_` | The width and height of the costmap in number of grid cells. |
| `map_size_` | The total size of the costmap in number of grid cells. |
| `initialized_` | The initialization status of the instance variables. |


# Algorithm
## Part 1
Repeat the following while **open_list** is not empty:

1. Extract the node with the smallest **g_cost** from **open_list** and call it **current_node**
2. Mark it as visited by adding it into **closed_list**
3. Check if **current_node** is the target node, and if so, go to phase II; otherwise, continue with step 4
4. Find the **neighbors** of the **current_node**

For each node in the list of neighbors of current_node:

5. If a neighbor is inside **closed_list**, skip it and pick the next neighbor
6. Case I: If a neighbor is inside **open_list**:
- If the new **g_cost** value is smaller than the current **g_cost** value:
  - Update its **g_cost**
  - Update its **parent** node
7. Case II: If a neighbor is not inside open_list:
- Set its **g_cost**
- Set its **parent** node
- Add it to **open_list**

When we are done considering all **neighbors** of **current_node**, go to step 2.

## Part 2
Build the path from start to end.
- Trace back from the target node to the start node, using each node's parent node.
