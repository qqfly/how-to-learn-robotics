# Get Your Hands Dirty

### Programming exercises

Once you've finished Craig's book, you should have a rough concept of how industrial robots
work. Now's the time to strike while the iron's hot and quickly work through the modeling and
computation in code.

This part is actually easy: pure code, one computer, and a weekend will get you results. For
tooling, just use Peter Corke's
[Robotics Toolbox for Python](https://github.com/petercorke/robotics-toolbox-python)
(`pip install roboticstoolbox-python`; if you're used to MATLAB, the corresponding
[MATLAB toolbox](https://petercorke.com/toolboxes/robotics-toolbox/) works too). Note that the
toolbox is there to **check your answers**; you write the core formulas yourself:

1. **List the DH parameters, write forward kinematics.** Pick a common six-axis arm (say the
   six-axis arm from the "Kinematics" section of the previous chapter, or a built-in model like
   the PUMA560 or UR5), lay out the DH parameters yourself, write the forward kinematics, and
   check against the toolbox's `fkine` (kinematics);
2. **Compute the Jacobian.** Write it once with the textbook's geometric method, then again
   with numerical differencing, and compare the two; while you're at it, settle "why you can't
   just differentiate the Euler angles" (the Jacobian);
3. **Numerical inverse kinematics.** Write a Jacobian-iteration solver and check it against the
   toolbox's `ikine` family. The MATLAB inverse-kinematics answer from the Jacobian section is a
   ready-made roadmap.

Going further (optional, as your energy allows): the Newton-Euler dynamics recursion for a
three-axis arm, implemented in code and checked against the toolbox's `rne` (dynamics); and the
full derivation of the analytic inverse kinematics for a six-axis arm (kinematics).

If you can get your hands on hardware (in a lab or a company), the single-axis servo platform
mentioned in the "Control" section, plus the reproduction experiments from the "Calibration and
Identification" section, are the exercises that will get you up to speed fastest.

### Getting hands-on

By now your grounding in theory is pretty good, but you lack real hands-on experience, and
you're not yet clear on how to apply what's in the books to an actual robot. Robotics is, after
all, a hands-on discipline; staying stuck in theory is not only unhelpful but also no fun.

**Get your hands dirty!**

If you're an undergraduate, I'd strongly suggest entering some competitions: RoboMaster, the NXP
Cup smart-car competition (formerly the Freescale smart-car contest), the Electronic Design
Contest, and the like. You can also join a campus tech organization, such as Tsinghua's Sky
Factory (天空工厂). The main point is to get familiar with all kinds of electronics, build up
your hands-on ability, and feel the thrill of making a robot move with your own code.

But from what I've seen, many strong competitors are relatively weak on the theory side. That's
mainly because tech competitions reward systems ability, and results often hinge on small tricks
rather than theoretical knowledge; competitions can also give you a false sense of
accomplishment, where you're busy every day but possibly just repeating low-level work. Those
two things make it easy to fall into a local minimum, unable to push any further on the theory.

So here's a half-baked little suggestion: if you're doing competitions and student tech
activities, two full experiences is plenty. After that, it's worth shifting your focus to
theory.

If there's robot hardware around that you can play with, give it a try. And if you get the
chance to touch a real machine, take the teach pendant, jog through a few points, run a
"teach-and-playback" cycle, and get a feel for the daily work of most industrial-robot
application engineers, including just how clunky these machines are to use. If you don't have a
real machine, you can also download ABB's RobotStudio and use the teach pendant inside it to
program a fixed pick-and-place trajectory for a simulated industrial robot. (ABB's software here
is quite well made; in simulation it reproduces the real machine's operating feel and motion
response about as faithfully as you could ask.)

### ROS

By now you have a fairly complete outline of the fundamentals of robotics, and you've
implemented some interesting algorithms in Matlab/Python. But you've realized that a robot is a
very large system, and as a beginner it's not realistic to build up every algorithm module a
robot needs from scratch, step by step. This is the moment to embrace the great open-source
world.

Many of you may know there's an open-source project called the Robot Operating System
[(ROS)](https://www.ros.org/). ROS comes in two generations, ROS 1 and ROS 2; ROS 1's final
release, Noetic, reached end of maintenance in 2025, and the community's development focus
shifted to ROS 2 long ago, so it's fine to learn ROS 2 directly.

There are probably plenty of ROS tutorials online. But I feel a lot of mechatronics and
automation students aren't ready to dive straight into ROS, because they lack basic Linux and
C++ knowledge. So I recommend learning in the following order:

- **Linux.** If you have no Linux development experience at all, I'd suggest installing Ubuntu
  first, then working through the
  [UNIX Tutorial for Beginners](http://www.ee.surrey.ac.uk/Teaching/Unix/) to get comfortable
  with basic Linux usage.

- **GitHub.** Most ROS projects are hosted on [GitHub](https://github.com/), so it's well worth
  learning to use it and to manage your own code with git. You can also make small contributions
  to open-source projects; for instance, you could do what I did and just
  [delete a redundant semicolon](https://github.com/stack-of-tasks/pinocchio/pull/672).

- **C++ basics.** If you've never studied C++ systematically, I'd suggest filling that in first,
  since ROS's main code is written in C++. Here I recommend Prof. Zheng Li's XuetangX courses,
  [Fundamentals of C++ Programming](http://www.xuetangx.com/courses/course-v1:TsinghuaX+00740043X_2015_T2+sp/about)
  and [Advanced C++ Programming](http://www.xuetangx.com/courses/course-v1:TsinghuaX+00740043_2x_2015_T2+sp/about)
  (Tsinghua, in Chinese). You can learn C++ under Ubuntu, of course; installing
  [VSCode](https://code.visualstudio.com/) is a good choice.

- **Data structures.** The basics above are actually enough for learning ROS, but for future
  study you can pick up some data-structures knowledge when the time is right. For that, I
  recommend Prof. Deng Junhui's XuetangX courses,
  [Data Structures (Part 1)](http://www.xuetangx.com/courses/course-v1:TsinghuaX+30240184+sp/about)
  and [Data Structures (Part 2)](http://www.xuetangx.com/courses/course-v1:TsinghuaX+30240184_2X+sp/about)
  (Tsinghua, in Chinese).

Now you can dig into ROS 2 with some confidence. For an open-source project, I think the best
tutorial is the official one, [ROS 2 Tutorials](https://docs.ros.org/).

First, follow the official beginner tutorials to understand ROS 2's basic communication
mechanisms and learn to use core tools like colcon, ros2 launch, and Rviz.

After that, you can look into different modules according to your own research interests.

If you can, doing your research alongside a platform with good ROS support will speed up your
learning a great deal, with something like a TurtleBot, Franka Panda, or Universal Robot. (That
depends on each person's circumstances.)

In principle, under ROS 2 you can directly do most research that isn't tied to hard real-time,
such as SLAM, Navigation, and Motion Planning. As for lower-level real-time control, ROS 2 and
ROS 1 are no longer the same thing. ROS 1 had a centralized Master, custom transport, and no
control over memory allocation, so architecturally it was a non-starter for real-time. ROS 2
switched to DDS's QoS, decentralized node discovery, and a customizable allocator, and it can
run on PREEMPT_RT or an RTOS, which is what finally makes real-time control feasible, though not
out of the box. The default rclcpp executor is neither real-time nor deterministic; you have to
assemble the real-time kernel, a real-time-safe executor, static memory allocation, and
real-time middleware yourself. A more practical rule of thumb: the lowest-level current loop and
torque loop (several kHz and up) run on the drive, an EtherCAT slave, or a microcontroller no
matter which generation of ROS you use, while impedance control, WBC, and MPC at 100 Hz–1 kHz
are well within reach using ros2_control or micro-ROS. (If you're not sure why, go back and
review your knowledge of real-time operating systems and robot control.)
