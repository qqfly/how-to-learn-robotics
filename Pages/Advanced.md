至此，你已经是一个不错的机器人工程师了。但是，如果你想从事研发工作，就需要学习更多专业知识。当然，这部分就跟大家的研究方向关系比较密切了，我没法一一细说。只大概介绍一些。

另外，非常建议入手一本《Springer Handbook of Robotics》<sup>[2]</sup>。接触一个新的领域时，在 Handbook 里找到相应的章节，通过它了解基本的大纲，并利用提供的参考文献快速补齐知识。

### 5.1 数学

这时候，你的数学基础基本不允许你更进一步了。所以，你需要补充数学知识。

- **数值计算方法**：很多时候，我们都是通过计算机来实现算法功能的，所以，你必须了解基本的数值计算方法，如数值微分、数值积分等。这部分可以看《Numerical Methods for Engineers》<sup>[3]</sup>

- **凸优化**：这个世界很多问题都不容易找到解析解，我们得用优化方法来计算。所以，你必须了解如何建立优化模型，并知道如何用代码进行求解。这里，我推荐 Stanford 的公开课[《Convex Optimization》](https://lagunita.stanford.edu/courses/Engineering/CVX101/Winter2014/about)

- **李群李代数**：优化方法经常要使用梯度信息，但是，你发现很多时候你不知道怎么定义梯度。李群李代数是一个非常经典的数学工具，可以非常方便地描述 SO(3)、SE(3) 空间中的对象。到这里，你之前对于四元数、角速度之类的疑问将一扫而空。这部分的学习资料，我会在后面补充。

### 5.2 Modern Robotics

<p align="center">
  <img width="500" src="../Pics/ModernRobotics.jpg"/>
</p>

李群李代数对于很多工科学生可能一时无法接受。这里，我推荐从 Modern Robotics 开始，这是一本面向本科生的教材，非常浅显。

你可以在[网上](http://hades.mech.northwestern.edu/index.php/Modern_Robotics)找到它的所有信息，Coursera 上也有对应的课程：[《Modern Robotics》](https://www.coursera.org/specializations/modernrobotics)。

上完这门课，你能掌握旋量（Screw）这一全新的建模方式，同时，你会发现机器人运动学、动力学建模变得如此简单、干净。

这时候，你已经触碰到了一点点李群李代数。之后就可以去看一些针对工科生的李群李代数教材，如[《Notes on Differential Geometry and Lie Groups, I & II》](http://www.cis.upenn.edu/~jean/gbooks/manif.html)

### 5.3 控制

这时候，你可能已经尝试搭建过一些机器人平台，了解了一些基本的控制理论。但是，你发现实际的机器人并不理想，动力学模型可能非常不精确。于是，你需要做机器人的**参数辨识**。于是，你可以去看 Khalil 的教材《Modeling, identification and control of robots》<sup>[4]</sup>。其中，你需要了解各种滤波算法（计算加速度）、各种数值优化算法。而且，如果需要对机器人的运动学参数进行标定，你会发现李群李代数可以非常方便地定义各种相关的雅可比。

现在，你有了一个相对精确的动力学模型，但是你发现，在给机器人控制器做轨迹规划的时候，需要给出速度、加速度约束。你感觉这其中有什么不对。是的，机器人系统中实际上并不存在什么速度、加速度约束，我们所有的操作都是针对电机力矩的。也就是说，我们只有力矩约束。

那么，问题来了：在力矩约束下，如何让机器人实现最快的运动。于是你就入了**最优控制**的坑。在这里，各种数值优化方法将非常有用。

现在你能把单独的一个机器人控制好了，但你发现，机器人一旦跟环境发生接触，只用机器人模型就不够了。你需要对环境进行建模。但是，环境是无法精确建模的。于是，你开始学各种**力控**、**阻抗控制**之类的内容。相应地、你就可以实现一些所谓协作机器人的功能了:[《听说现在协作机器人很火，所以我也做了1/7个》](https://mp.weixin.qq.com/s/hkZjZItqyfwG6k0cwRm9kA)

<p align="center">
  <img width="500" src="../Pics/CollisionDetection.gif"/>
</p>

### 5.4 运动规划

现在，你能让机器人按照你的要求运动了。但是，你感觉机器人还是太难用了，必须人工指定经过的路径点，否则机器人可能就会与环境发生碰撞。你想，有没有可能让机器人自己找到这些路径点。

于是，你来到了运动规划的领域。

当然，一个很自然的想法是，有没有可能直接构建一个目标函数，用优化的方法计算出需要的轨迹。但是，世界有时候并没有那么可爱。运动规划问题常常是一个非凸问题，无法优化直接求解。所以，对于机械臂，可以有各种 Sampling-based 算法；当然，也有人将其近似成多个凸问题进行优化求解，在比较简单的场景下效果还算不错。

运动规划的大致介绍可以看我以前写过的文章：[《运动规划 | 简介篇》](https://mp.weixin.qq.com/s/_fE760XxFlvrkzYEpslYvA)。

<p align="center">
  <img width="500" src="../Pics/PlanningBooks.jpg"/>
</p>

更详细的介绍最好看教材，如《Principles of Robot Motion》<sup>[5]</sup> 和《Planning Algorithms》<sup>[6]</sup> 都是不错的教材。

另外，这部分一定要配合着编程来做。[The Open Motion Planning Library](http://ompl.kavrakilab.org/) 是个不错的参考，相信你在学 ROS 的时候也或多或少了解过一些。

只要你理解得足够深入，便会理解前面李群李代数的作用。例如：

（1）运动规划是在 Configuration Space 里进行的，而大多数常见机构的 Configuration Space 都是一个 Lie Group：多关节机器人的关节空间（Torus(n)），无人机（SE(3)），机器人末端操作物体的相关约束（SE(3)）。于是，我们只要定义各种 Lie Group 的基本性质，就可以用统一的规划算法来进行规划了。具体可以看 Ompl 里 State space 的使用。

（2）当我们的规划涉及到一些约束，如让机器人末端保持水平（拿着一杯水）。一种方法是用传统的方法。如 OpenRave 里的一个实现：[ConstraintPlanning](http://openrave.org/docs/0.8.2/openravepy/examples.constraintplanning/)， 在关节空间随机采样一个点，然后投影到最近的任务空间上，之后用 Jacobian 迭代的方式将随机点连接到 RRT 树上。

<p align="center">
  <img width="300" src="../Pics/TaskConstrainedRRT.jpg"/>
</p>

但是，我们可以从另一个角度看问题。机器人的末端姿态就是一个 SE(3) 李群。保持末端水平，可以认为是一个 R3 空间与 SO(2) 空间的半直积，这也是一个李群。于是，我们可以直接在李群内或者 Tangent Space 上跑一个 RRT，例如 Tangent Bundle RRT<sup>[7]</sup> 与 AtlasRRT<sup>[8]</sup>

<p align="center">
  <img width="500" src="../Pics/AtlasRRT.jpg"/>
</p>

### 5.5 机器学习

前面很多工作都是在做建模+辨识的工作。实际上还有一大类工作是基于数据的，也即，给一个通用模型，用数据进行学习拟合。也就是大家常说的机器学习了。

对于此，我个人的学习路径如下：

- Coursera上吴恩达的[《机器学习》](https://www.coursera.org/learn/machine-learning)，了解基本的机器学习内容。

- Geoffrey Hinton 的[《Neural Networks for Machine Learning》](https://www.youtube.com/playlist?list=PLoRl3Ht4JOcdU872GhiYWf6jwrk_SNhz9)，之前是在 Coursera 上看的，现在似乎只能在 Youtube 上找到了。这门课基本可以把几种经典的神经网络过一遍。

- 各种开源平台。有了前面的基础，也在 Matlab 中实现过几种经典机器学习算法，你就可以去尝试一些深度学习开源平台了，如 [TensorFlow](https://www.tensorflow.org/)。做机器学习的人太多了，所以资料也非常多，在网上非常容易自学。

当然，我们要知道，我们学机器学习，并不是为了转到 DL 方向上，而是用它来为机器人研究提供工具的：

- 智能控制：相信学习过智能控制的小伙伴，应该还记得小脑模型之类的网络在控制中的应用；

- 建模：对于一些不好建模的地方，有时候不妨试试机器学习的方法，例如，用神经网络拟合摩擦力；

- 视觉：机器人经成需要跟视觉结合在一起，而 DL 在视觉领域发展迅速，有时候借用这一工具，可以非常快地搭建实验原型；

- 强化学习：这个下章介绍。

### 5.6 强化学习

如果研究过强化学习，肯定会被其极简的理论所折服：所有的理论衍生自一个 Bellman equation。而且，强化学习非常符合人的直觉。因此，很多人认为强化学习是机器人的未来方向。

对此，我不做过多评论。我只大概介绍如何入门强化学习。

首先，就是看书。Sutton 的《Introduction to reinforcement learning》<sup>[9]</sup> 可以说是必读圣经了。

你可以在 Github 找到 Python 版本的算法实现 [Python Implementation](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

阅读 Sutton 的书，你可以一步步了解如何从最初的 Bellman 方程推导出 Dynamic Programming、Monte Carlo、TD Learning 等方法。

你知道了强化学习就是要通过不断尝试来学习得到一个从 State 到 Action/Value 的查找表。

于是，你就想，有没有可能简化这个查找表，于是，你知道了有 Function Approximation。如果这个近似函数是神经网络，那么就是现在很火的 Deep Reinforcement Learing 了。

当然，这些不重要。重要的是理解 Markov Decision Processes。你会发现，它不仅可以用来解决运动规划问题（DP ≈ Dijkstra、Monte Carlo ≈ RRT），还可以用来解决任务规划问题。

### 5.7 最新论文

至此，你已经能够阅读绝大多数最新的论文了。所以，你应该关注类似 RSS、ICRA、IROS 等相关会议，了解机器人领域的最新进展；通过 IJRR、TRO 等期刊学习最新的理论。

当然，你也可以通过 Google Scholar 订阅相应的关键词，它会不定期将最新的论文推送到你的邮箱。