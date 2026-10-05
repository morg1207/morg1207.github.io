// projects-DATA.js — one entry per project card, shown in this order.
//
//   preview  short muted loop (assets/preview/*.mp4); omit to show only the poster image
//   poster   still image for the card (and the loop's first frame)
//   tags     'real' (runs on a real robot), 'sim' (simulation), 'lead' (I led the project)
//   md       detail page opened by "Details"
//   links    extra buttons: { label, url }
//   featured true → full-width card (use for one project only)

export const projects = [
  {
    id: 'rb1',
    featured: true,
    title: 'RB1 Warehouse Autonomy',
    summary: 'Nav2 + behavior-tree mission tested on the real robot: finds the charging station, localizes, detects a shelf with the LiDAR, lifts it and delivers it.',
    role: 'Autonomy & integration developer · The Construct Masterclass',
    status: 'Real robot',
    tags: ['real', 'sim'],
    stack: ['ROS 2 Humble', 'Nav2', 'BehaviorTree.CPP', 'Cartographer', 'Vue.js'],
    preview: 'assets/preview/rb1.mp4',
    poster: 'assets/preview/rb1.jpg',
    md: 'content/rb1-robot/readme.md',
    links: [
      { label: 'Code', url: 'https://github.com/morg1207/rb1_autonomy' },
      { label: 'Video', url: 'https://www.youtube.com/watch?v=rZ5ojMnCDvw' },
    ],
  },
  {
    id: 'rrbot',
    title: 'RRbot — Autonomous Forklift',
    summary: 'Scaled forklift AMR that detects, picks up and unloads pallets on its own. Real prototype with 2× LiDAR, Intel RealSense D435i and a Jetson Nano.',
    role: 'Project lead',
    status: 'Real robot',
    tags: ['real', 'lead'],
    stack: ['ROS 2', 'SLAM', 'Navigation', 'RealSense', 'Jetson Nano'],
    preview: 'assets/preview/forklift.mp4',
    poster: 'assets/img/forklift_real.jpg',
    md: 'content/forklift-robot/readme.md',
    links: [],
  },
  {
    id: 'leonardo',
    title: 'LeonardoBot — Painting Robot',
    summary: 'Mecanum robot with a telescopic arm that paints interior walls, for the construction startup Smart Painter.',
    role: 'Autonomy & simulation lead · Smart Painter',
    status: 'In progress',
    tags: ['sim', 'lead'],
    stack: ['ROS 2', 'Gazebo Sim', 'Mecanum control', 'AMCL'],
    preview: 'assets/preview/leonardo.mp4',
    poster: 'assets/preview/leonardo.jpg',
    md: 'content/leonardo-robot/readme.md',
    links: [],
  },
  {
    id: 'agrobot',
    title: 'AgroBot — Weed Detection',
    summary: 'Agricultural robot that detects and maps weeds in cacao plantations, with YOLO running on a Jetson Nano.',
    role: 'Technical advisor · thesis project',
    status: 'Simulation',
    tags: ['sim'],
    stack: ['YOLO', 'Jetson Nano', 'Outdoor navigation', 'SLAM', 'Kalman filter'],
    poster: 'assets/img/agrobot.jpg',
    md: 'content/agrobot/readme.md',
    links: [],
  },
  {
    id: 'uv',
    title: 'UV Disinfection Robot',
    summary: 'Autonomous mobile robot that disinfects hospital rooms with UV-C light: mapping, path planning and obstacle avoidance.',
    role: 'Technical advisor · thesis project',
    status: 'Simulation → prototype',
    tags: ['sim'],
    stack: ['ROS', 'SLAM', 'Navigation', 'Gazebo'],
    preview: 'assets/preview/uv.mp4',
    poster: 'assets/preview/uv.jpg',
    md: 'content/uv-robot/readme.md',
    links: [],
  },
];
