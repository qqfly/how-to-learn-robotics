看完 Craig 的书后，你应该对工业机器人的原理有了一个大概的概念，但是，你缺乏实际动手经验，不清楚如何将书上的东西应用到实际机器人上。机器人毕竟是一个实践性的学科，一直停留在理论，不仅无用、而且无趣。

**Get your hands dirty!**

### 4.1 动手

如果是本科生的话，非常建议参加一些比赛，如 RoboMaster、飞思卡尔智能车大赛、电子设计大赛等；也可以加入学校的一些科技组织，例如清华的天空工厂。主要是熟悉各种电子电路、培养动手能力。

但是，以我的观察，很多科技比赛大牛，在理论学习上往往比较弱。这主要是因为科技比赛强调的是系统能力，决定比赛结果的往往是一些小 tricks，而非理论知识；而且，比赛容易让人产生一种虚假的充实感，每天都很忙碌，但是可能只是在重复低级工作。这两个原因很容易让人陷入 local minima，无法在理论方面更进一步。

所以，我有个不成熟的小建议：参加比赛和学生科技活动的话，有过两次完整的经历就够了。之后应该迅速将重点转向理论学习。

如果身边有可以玩的机器人硬件，也可以尝试玩一玩，或者在 RobotStudio/Vrep/Gazebo 里玩仿真的机器人。

### 4.2 Penn's Robotics Specialization

在此之后，不妨抽出几个月时间，看看 Coursera 上宾夕法尼亚大学的 [Robotics](https://www.coursera.org/specializations/robotics) 专项课程。这个专项课程与机械臂或者工业机器人关系不大，但是由于机器人很多方面是相通的，所以非常建议看一看。

- Aerial Robotics：这门课主要是介绍四旋翼无人机的控制问题，其中的轨迹规划、姿态描述、控制等对机械臂的学习非常有帮助。而且，这门课的作业质量也非常高，提供了基于 Matlab 的数值仿真模块，可以让初学者直观地看到自己代码的控制效果。

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

### 4.3 ROS

到现在为止，你对机器人的基础知识有了一个比较完整的脉络，而且，也用 Matlab 实现了一些有趣的算法。但是，你发现，机器人是一个非常大的系统，作为初学者，不太可能从头开始一步步搭建机器人所需的各个算法模块。这时候，你就应该开始拥抱伟大的开源世界了。

很多人可能知道，有一个叫做机器人操作系统的开源项目 [(Robot Operating System, ROS)](https://wiki.ros.org/)。

对于学习 ROS，网上可能有不少教程了。但是，我感觉，很多机电、自动化方向的学生并不适合直接开始看 ROS。因为他们缺乏基本的 Linux、C++ 知识。所以，我推荐按照如下步骤进行学习：

- **Linux**：如果完全没有 Linux 开发经验，我建议可以先安装 Ubuntu 系统，然后看 [UNIX Tutorial for Beginners](http://www.ee.surrey.ac.uk/Teaching/Unix/) ，熟悉基本的 Linux 使用方法。

- **Github**：ROS 的大多数项目都是托管在 [Github](https://github.com/) 上的。所以，非常有必要学会使用 Github，学会用 git 管理自己的代码。而且也可以为开源项目做些修改。例如可以像我一样只是[删除多余的分号](https://github.com/stack-of-tasks/pinocchio/pull/672)。

- **C++ 基础**：如果你没有系统学习过 C++，建议先把这部分补齐，因为 ROS 的主要代码都是 C++ 实现的。这里，我推荐学堂在线上清华大学郑莉老师的课程[《C++语言程序设计基础》](http://www.xuetangx.com/courses/course-v1:TsinghuaX+00740043X_2015_T2+sp/about)和[《C++语言程序设计进阶》](http://www.xuetangx.com/courses/course-v1:TsinghuaX+00740043_2x_2015_T2+sp/about)。当然，学习 C++ 的时候就可以在 Ubuntu 下进行，安装一个 [Visual Studio Code](https://code.visualstudio.com/) 是个不错的选择。

- **数据结构**：其实，上面的基础已经足够你学习 ROS 了，但是，为了未来的学习，可以在适当时候学习一些数据结构的知识。数据结构的话，我推荐学堂在线上清华邓俊辉老师 [《数据结构(上)》](http://www.xuetangx.com/courses/course-v1:TsinghuaX+30240184+sp/about)与[《数据结构(下)》](http://www.xuetangx.com/courses/course-v1:TsinghuaX+30240184_2X+sp/about)。

现在，你就可以大胆地去看 ROS 了。作为开源项目，我认为最好的教程就是官网的教程 [ROS Tutorials](https://wiki.ros.org/ROS/Tutorials)。

首先，通过 Beginner Level 和 Intermediate Level 了解 ROS 基本的通讯机制、学会使用 catkin、roslaunch、Rviz 等基本工具。

之后，就可以根据各自的研究兴趣去看不同模块了。

如果有条件，能够配合一些 ROS 支持比较好的平台进行研究的话，可以大大提高学习速度。例如 TurtleBot、Baxter、Universal Robot 之类的。（这就看每个人条件了。）

理论上，在 ROS 环境下，你可以从事绝大多数与实时控制无关的研究，如 SLAM、Navigation、Motion Planning 等。如果你从事的是更加底层的工作，（如控制器设计），目前 ROS 还无法胜任。（如果不清楚为什么，回顾一下实时操作系统、机器人控制方面的知识）。