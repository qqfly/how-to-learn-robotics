# Advanced Practice

Same rule as always: **Get your hands dirty!** The three advanced chapters gave you the route;
this chapter gives you two things: a systematic set of open courses (to fill in your theory
training), and a hands-on checklist (to build a feel for it).

### Systematic open courses

It's worth setting aside a few months for the University of Pennsylvania's
[Robotics](https://www.coursera.org/specializations/robotics) specialization on Coursera. This
specialization doesn't have much to do with robot arms or industrial robots, but since many
aspects of robotics are shared, I highly recommend it — and several of its courses line up neatly
with this part's main threads:

- Perception: a very high-quality course, essentially covering camera models, multi-view
  geometry, and the like. This material is a big help for future research in SLAM, 3D vision,
  calibration, and so on — it maps to "3D Vision." After finishing it, you'll be able to produce
  effects like the one in the article
  [A demo of how AR works](https://mp.weixin.qq.com/s?__biz=MzA5MDE2MjQ0OQ==&mid=2652786307&idx=1&sn=e71bbca67c7fa69081e863b62b9fd5b4#rd)
  (in Chinese):

<figure>

  <img src="images/ar.webp" width="400" alt="The AR demo in action"/>

  <figcaption>The AR demo in action.</figcaption>

</figure>
- Estimation and Learning: starting from the Gaussian distribution, this course introduces tools
  that are very useful in robot state estimation, like the Kalman filter and particle filter. And
  its major assignment has you write a 2D map-reconstruction program from scratch, so you'll learn
  how to use laser-sensor data to build a 2D map like the one below.

<figure>

  <img src="images/mapping.webp" width="500" alt="A 2D map built from laser-sensor data"/>

  <figcaption>A 2D map built from laser-sensor data.</figcaption>

</figure>
- Aerial Robotics: mainly about the control of quadrotor drones; its trajectory planning,
  orientation description, and control are all very helpful for studying arms. The assignments are
  also very high-quality, providing a Matlab-based numerical simulation module that lets beginners
  see the control effect of their own code directly;

- Computational Motion Planning: this one feels a notch below Aerial Robotics in quality, but it
  gives you a rough sense that there's a Motion Planning direction in robotics, and its major
  assignment includes hand-writing basic motion-planning algorithms like A\*, PRM, and Potential
  Fields, along with a rough idea of the basics of collision checking — it maps to "Autonomous
  Planning";

- Mobility: mainly about the control of legged robots. On one hand, it gives you a rough sense of
  how legged-robot control developed, so you won't be quite so lost watching Boston Dynamics
  videos. More importantly, it teaches you the relationship between robot modeling and control: a
  simplified model can still be a huge help for control — which incidentally lays the groundwork
  for the reinforcement-learning motion control in the Embodied AI part.

Beyond this specialization, two more good resources: for the visual control of arms, see
[Robotics: Vision and Control 3rd (Peter Corke)](https://petercorke.com/rvc3-landing/), which has
Python and Matlab editions and also covers some of the Perception material; and for anything
related to Aerial Robotics, see Prof. Quan Quan of Beihang University's
[drone course series](https://rflysim.com/doc/zh/) (in Chinese), which comes with a simulator.

### The hands-on checklist

The first two items are pure software — one computer and you can start. The accompanying runnable
code will be released alongside the open-source libraries; but there's no need to wait: every item
on this list can be done independently right now with off-the-shelf open-source tools (NumPy/SciPy,
OpenCV, PCL, MoveIt).

1. **Orientation-interpolation experiment** (maps to Modern Robotics, Application 1): implement
   Slerp and the Lie-group Bezier blend, have a rigid body pass through three orientations in turn,
   and plot how the angular-velocity direction changes over time — see with your own eyes that
   "straight-line interpolation jumps at the transition point, while the Bezier blend is
   continuous."

2. **Average-rotation experiment** (maps to the boxed example in Modern Robotics): randomly
   generate a set of rotations, compute the average rotation with all four methods — Euler-angle
   average, quaternion average, tangent-space average, and numerical optimization — and compare the
   results; while you're at it, get fluent with the matrix exponential and logarithm.

3. **Camera calibration + hand-eye calibration** (maps to 3D Vision): use OpenCV to run a complete
   calibration pipeline — 20 photos of a calibration board for the intrinsics, then
   `calibrateHandEye` to solve AX=XB. Without a real machine, you can run the whole flow in
   simulation just the same.

4. **Point-cloud filtering** (maps to the "pitfall" in 3D Vision): take the point cloud from any
   depth camera (or a public dataset), run voxel downsampling + radius filtering with PCL, and
   watch the outliers get cleaned out.

5. **MoveIt planning** (maps to Autonomous Planning): URDF → Setup Assistant → get motion planning
   running in simulation. Once it works, do two little experiments: plan the same problem ten times
   in a row to feel the sampling planner's "different every time"; then add a virtual view cone to
   the scene as an obstacle, reproducing the "don't block the camera" constrained-planning case.

### Keeping up with the frontier

By now, you can already read the vast majority of the latest papers. So you should follow
conferences like RSS, ICRA, and IROS to keep up with the latest progress in robotics, and learn
the latest theory through journals like IJRR and TRO.

You can also subscribe to the relevant keywords through Google Scholar, and it will push the
latest papers to your inbox from time to time.
