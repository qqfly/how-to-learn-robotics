After finishing reading of Craig's textbook, I think you should have built a basic structure of about industrial robots in your mind. However, you still may need more hands-on practise, and probably have few ideas on implement knowledge from textbooks to the real/physical robots. After all, robotics is a practical displine, it would be wasting of time and boring if you spent too much time on theory. 

**Get your hands dirty!**

### 4.1 Hands-On

If you were a undergraduate student, it would be very helpful for you to gain some hands-on experience by participating robotics competitions, such as RoboMaster and NXP Cup. You can also try to participate into hands-on STEM clubs in your school. The main purpose is getting familiar with various electronic circuit and developing operation ability.

However, from my experience, I have seen many people who are good at those competitions normally have a lack on basic theoretical study. Because in competition systematic operation ablity is more emphasized than theories, the result usually looks up on some small tricks. Also, the competitions would create a false sense of fullness to people which make them feel they are busy on working everyday, but probably just some repeatable easy work. These reasons will make people trapped into their local minima, can hardly move forward in theoretical study.

Therefore, I have a small suggestion to share: a few of robotics competition or other activities is enough, after that theoretic studies are much more important.

If you have a chance to play some hardware robotics, don't waste your resource, if not you can still play around with simulated robotics in RobotStudio/Vrep/Gazebo.

### 4.2 Penn's Robotics Specialization

在此之后，不妨抽出几个月时间，看看 Coursera 上University of Pennsylvania的 [Robotics](https://www.coursera.org/specializations/robotics) 专项课程。这个专项课程与机械臂或者工业机器人关系不大，但是由于机器人很多方面是相通的，所以非常建议看一看。

Next steps, we suggest you can spend few months on Coursera for the [Robotics](https://www.coursera.org/specializations/robotics) course from University of Pennsylvania. This course has less relatives with robot arms or industrail robots, but we still recommand it since many knowledges of robotics are connected.

- Aerial Robotics：这门课主要是介绍四旋翼无人机的控制问题，其中的轨迹规划、姿态描述、控制等对机械臂的学习非常有帮助。而且，这门课的作业质量也非常高，提供了基于 Matlab 的数值仿真模块，可以让初学者直观地看到自己代码的控制效果。This topic 

- Computational Motion Planning：这门课的水平感觉不如前一个，但是通过这门课可以大概知道机器人里有 Motion Planning 这个方向，同时大作业也包括了手写 A*、PRM、Potential Fileds 等基本的 Motion Planning 算法，同时可以大概了解一下 Collision Checking 的基本原理。

- Mobility：这部分主要是介绍足式机器人的控制问题。通过这门课，一方面可以大致了解足式机器人控制的发展脉络，这样看起 Boston Dynamics 的视频也不会那么一脸懵逼了。同时，更重要的是，掌握机器人建模与控制的关系：一个简化的模型，也可能对控制起非常大帮助。

- Perception：这门课质量非常不错，基本是介绍相机模型、多视几何之类的内容。这方面内容可以对大家未来从事 SLAM、3D 视觉、标定等方面的研究非常有帮助。学完之后，大家就可以做出类似[《AR原理演示》](https://mp.weixin.qq.com/s?__biz=MzA5MDE2MjQ0OQ==&mid=2652786307&idx=1&sn=e71bbca67c7fa69081e863b62b9fd5b4#rd)文章中的效果了：

<p align="center">
  <img width="400" src="../Pics/AR.gif"/>
</p>

- Estimation and Learning：这门课从高斯分布开始，介绍了 Kalman Filter、Particle Filter 等在机器人状态估计中非常有用的工具。而且，这门课的大作业会让你从零开始编写 2D 地图重建的程序，你可以知道如何利用激光传感器信息获得下面这样的 2D 地图。

<p align="center">
  <img width="500" src="../Pics/Mapping.jpg"/>
</p>

### 4.3 Robot Operating System (ROS)

So far, you should have established a systematic basic robotics knowledge, and implemented some interesting algorithms with Matlab. But you probably already found, robotics has a huge comprehensive system. As a beginner, it may be not easy to start from build robotics algorithms modules step by step. So, open sources can be a very helpful platform. 

Many of you probably already know that there is a open source project called robot operation system.  [(Robot Operating System, ROS)](https://wiki.ros.org/)。

For studying ROS, there are alreayd many tutorials online. However, I feel they are not appropriate/suitable for mechatronics or automation major students, because of the lack of knowledges in Linux and C++. I suggest those students follow these steps to learn ROS:

- **Linux**：如果完全没有 Linux 开发经验，我建议可以先安装 Ubuntu 系统，然后看 [UNIX Tutorial for Beginners](http://www.ee.surrey.ac.uk/Teaching/Unix/) ，熟悉基本的 Linux 使用方法。

- **Github**：ROS 的大多数项目都是托管在 [Github](https://github.com/) 上的。所以，非常有必要学会使用 Github，学会用 git 管理自己的代码。而且也可以为开源项目做些修改。例如可以像我一样只是[删除多余的分号](https://github.com/stack-of-tasks/pinocchio/pull/672)。

- **Fundamental of C++**：如果你没有系统学习过 C++，建议先把这部分补齐，因为 ROS 的主要代码都是 C++ 实现的。这里，我推荐学堂在线上清华大学郑莉老师的课程[《C++语言程序设计基础》](http://www.xuetangx.com/courses/course-v1:TsinghuaX+00740043X_2015_T2+sp/about)和[《C++语言程序设计进阶》](http://www.xuetangx.com/courses/course-v1:TsinghuaX+00740043_2x_2015_T2+sp/about)。当然，学习 C++ 的时候就可以在 Ubuntu 下进行，安装一个 [Visual Studio Code](https://code.visualstudio.com/) 是个不错的选择。

- **Data Structure**：其实，上面的基础已经足够你学习 ROS 了，但是，为了未来的学习，可以在适当时候学习一些数据结构的知识。数据结构的话，我推荐学堂在线上清华邓俊辉老师 [《数据结构(上)》](http://www.xuetangx.com/courses/course-v1:TsinghuaX+30240184+sp/about)与[《数据结构(下)》](http://www.xuetangx.com/courses/course-v1:TsinghuaX+30240184_2X+sp/about)。

现在，你就可以大胆地去看 ROS 了。As a open-source project, personally I suggest the best tutorial is from the offical website of ROS: [ROS Tutorials](https://wiki.ros.org/ROS/Tutorials).

首先，通过 Beginner Level 和 Intermediate Level 了解 ROS 基本的通讯机制、学会使用 catkin、roslaunch、Rviz 等基本工具。

之后，就可以根据各自的研究兴趣去看不同模块了。

如果有条件，能够配合一些 ROS 支持比较好的平台进行研究的话，可以大大提高学习速度。例如 TurtleBot、Baxter、Universal Robot 之类的。（这就看每个人条件了。）
If would be better and more efficient for you to do some research and development with a robot platform such as TurtleBot, Baxter, Universal Robot etc. You can choose either purchasing a real robot or using a simulation environment, such as Gazebo.

理论上，在 ROS 环境下，你可以从事绝大多数与实时控制无关的研究，如 SLAM、Navigation、Motion Planning 等。如果你从事的是更加底层的工作，（如控制器设计），目前 ROS 还无法胜任。（如果不清楚为什么，回顾一下Real-Time Operation System and Robotics Control实时操作系统、机器人控制方面的知识）。
Theoretically, in ROS environment, you can work on a lot of researches irrelated with real time control, for example, SLAM, Naviagation, Motion Planning. However, if you worked with some lower-level design, (e.g controller design), ROS is still incompetent. (If you don't know why, you probably need to recall knowledges from Real-Time Operation System and Robotics Control)