After finishing reading of Craig's textbook, I think you should have built a basic structure of about industrial robots in your mind. However, you still may need more hands-on practise, and probably have few ideas on implement knowledge from textbooks to the real/physical robots. After all, robotics is a practical displine, it would be wasting of time and boring if you spent too much time on theory. 

**Get your hands dirty!**

### 4.1 Hands-On

If you were a undergraduate student, it would be very helpful for you to gain some hands-on experience by participating robotics competitions, such as RoboMaster and NXP Cup. You can also try to participate into hands-on STEM clubs in your school. The main purpose is getting familiar with various electronic circuit and developing operation ability.

However, from my experience, I have seen many people who are good at those competitions normally have a lack on basic theoretical study. Because in competition systematic operation ablity is more emphasized than theories, the result usually looks up on some small tricks. Also, the competitions would create a false sense of fullness to people which make them feel they are busy on working everyday, but probably just some repeatable easy work. These reasons will make people trapped into their local minima, can hardly move forward in theoretical study.

Therefore, I have a small suggestion to share: a few of robotics competition or other activities is enough, after that theoretic studies are much more important.

If you have a chance to play some hardware robotics, don't waste your resource, if not you can still play around with simulated robotics in RobotStudio/Vrep/Gazebo.

### 4.2 Penn's Robotics Specialization

Next steps, we suggest you can spend few months on Coursera for the [Robotics](https://www.coursera.org/specializations/robotics) course from University of Pennsylvania. This course has less relatives with robot arms or industrail robots, but we still recommand it since many knowledges of robotics are connected.

- Aerial Robotics: This course focuses on the control topic of four-rotor drone, the motion planning, gesture description and controlling are very helpful for learning robot arm. And the quality providing from this course is great, including simulation models based on numerical values of Matlab which can help beginners to directly see the control effect from their own code.

- Computational Motion Planning: We should say this one's quality is average, not too much you can learn but you can still know some basic motion planning algrithoms such as A* , PRM, Potential Fields, plus principles of collision checking. 

- Mobility: This part is mainly about the control of foot robots. Through this course, on the one hand, you can get a general understanding of the development of foot robot control, so you will be not too hard to understand when you watch the videos from Boston Dynamics. One the other hands, which is also important, you can master the relationship between robot modeling and control, a simplified model can also be very helpful for control.

- Perception: The quality of this course is very good, basically it introduces the camera model, multi-view geometry etc. This content can be helpful if you going to do research on SLAM, 3D vision and calibration. Once you are done, you can make some similar demo like below:

<p align="center">
  <img width="400" src="../Pics/AR.gif"/>
</p>

- Estimation and Learning：Starting with Gaussian distribution, with an introduction of Kalman Filter、Particle Filter and other useful tools get robots to incorporate unversainty into estimating and learnign from a dynamic and changing world. Plus, this course has a plenty of assignments for you to learn how to code the reestablishment of 2D map, so you can use information from laser sensors to build a 2D map of following.

<p align="center">
  <img width="500" src="../Pics/Mapping.jpg"/>
</p>

### 4.3 Robot Operating System (ROS)

So far, you should have established a systematic basic robotics knowledge, and implemented some interesting algorithms with Matlab. But you probably already found, robotics has a huge comprehensive system. As a beginner, it may be not easy to start from build robotics algorithms modules step by step. So, open sources can be a very helpful platform. 

Many of you probably already know that there is a open source project called robot operation system.  [(Robot Operating System, ROS)](https://wiki.ros.org/)。

For studying ROS, there are alreayd many tutorials online. However, I feel they are not appropriate/suitable for mechatronics or automation major students, because of the lack of knowledges in Linux and C++. I suggest those students follow these steps to learn ROS:

- **Linux**：If you don't have any development experience on Linux at all, I will suggest you to start from installing Ubuntu OS, then real through [UNIX Tutorial for Beginners](http://www.ee.surrey.ac.uk/Teaching/Unix/), and get familiar with some fundamental methods of using Linux.

- **Github**：Most of the ROS projects are hosting on [Github](https://github.com/), thus it will be very necessary and useful to learn to use Github and manage your codes with git. Plus, editing some open sources there. Such as [deleting some extra semicolons](https://github.com/stack-of-tasks/pinocchio/pull/672).

- **Fundamental of C++**：If you haven't learnt C++ systematically, I will strongly suggest you to fill this part up firstly. Because of the coding works in ROS are implemented with C++. Hereby, I recommend following course from UCSC for studying C++ [《C++ For C Programmers, Part A》](https://www.coursera.org/learn/c-plus-plus-a)and[《Part B》](https://www.coursera.org/learn/c-plus-plus-b). You can also using Ubuntu as a learning platform for C++, and [Visual Studio Code](https://code.visualstudio.com/) could be a good code editor for you. 

- **Data Structure**：Actually，the knowledges from above are already engough for you to start have fun with ROS. However, for a further study, you can also gain some knowledges of data structure. Here is a course from Tsinghua University that may help you with. [《Data Structures and Algorithms》](https://www.coursera.org/specializations/data-structures-algorithms-tsinghua#courses).

Now, you can start studying ROS without any hisitate. As a open-source project, personally I suggest the best tutorial is from the offical website of ROS: [ROS Tutorials](https://wiki.ros.org/ROS/Tutorials).

Starting with Beginner Level and Intermediate Level to take a understand on the basic communication mechanism and learn how to use tools like catkin, roslaunch, Rviz etc.

Afterwards, you can have fun with the different modules you are interested in.

If would be better and more efficient for you to do some research and development with a robot platform such as TurtleBot, Baxter, Universal Robot etc. You can choose either purchasing a real robot or using a simulation environment, such as Gazebo.

Theoretically, in ROS environment, you can work on a lot of researches irrelated with real time control, for example, SLAM, Naviagation, Motion Planning. However, if you worked with some lower-level design, (e.g controller design), ROS is still incompetent. (If you don't know why, you probably need to recall knowledges from Real-Time Operation System and Robotics Control)