# 具身智能

!!! note "本部分整理中"

    这一部分讨论数据驱动的机器人技术。计划中的章节：导言（整体趋势、当前状态、为什么它可能是未来方向）；机器学习快速介绍（FNN、CNN、Transformer、LLM，为后面铺垫）；强化学习与全身控制（已被验证的成功领域）；模仿学习（理论不算完备、但在限定场景有落地可能）；VLA、World Action Model（WAM）等数据驱动的通用操作探索；冷静的展望；上手。下面两节暂从原「进阶」部分原文迁来，后续将随本部分一起重构。

### 机器学习

前面很多工作都是在做建模+辨识的工作。实际上还有一大类工作是基于数据的，也即，给一个通用模型，用数据进行学习拟合。也就是大家常说的机器学习了。

对于此，我个人的学习路径如下：

- Coursera上吴恩达的[《机器学习》](https://www.coursera.org/learn/machine-learning)，了解基本的机器学习内容。

- Geoffrey Hinton 的[《Neural Networks for Machine Learning》](https://www.youtube.com/playlist?list=PLoRl3Ht4JOcdU872GhiYWf6jwrk_SNhz9)，之前是在 Coursera 上看的，现在似乎只能在 Youtube 上找到了。这门课基本可以把几种经典的神经网络过一遍。

- 各种开源平台。有了前面的基础，也在 Matlab 中实现过几种经典机器学习算法，你就可以去尝试一些深度学习开源平台了，如 [PyTorch](https://pytorch.org/)。做机器学习的人太多了，所以资料也非常多，在网上非常容易自学。

当然，我们要知道，我们学机器学习，并不是为了转到 DL 方向上，而是用它来为机器人研究提供工具的：

- 智能控制：相信学习过智能控制的小伙伴，应该还记得小脑模型之类的网络在控制中的应用；

- 建模：对于一些不好建模的地方，有时候不妨试试机器学习的方法，例如，用神经网络拟合摩擦力；

- 视觉：机器人经常需要跟视觉结合在一起，而 DL 在视觉领域发展迅速，有时候借用这一工具，可以非常快地搭建实验原型；

- 强化学习：这个下节介绍。

近年来，随着`具身智能`概念的发展，出现了一些相当不错的效果——虽然还处于“过拟合”的状态，但它实现了很多传统规控方法很难做到的事（如穿鞋带、叠衣服等），给机器人领域带来了不少新东西。

### 强化学习

如果研究过强化学习，肯定会被其极简的理论所折服：所有的理论衍生自一个 Bellman equation。而且，强化学习非常符合人的直觉。因此，很多人认为强化学习是机器人的未来方向。

这里，我先大概介绍如何入门强化学习，最后再谈谈我的看法。

首先，就是看书。Sutton 的《Introduction to reinforcement learning》<sup>[9]</sup> 可以说是必读圣经了。

你可以在 Github 找到 Python 版本的算法实现 [Python Implementation](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction)

阅读 Sutton 的书，你可以一步步了解如何从最初的 Bellman 方程推导出 Dynamic Programming、Monte Carlo、TD Learning 等方法。

你知道了强化学习就是要通过不断尝试来学习得到一个从 State 到 Action/Value 的查找表。

于是，你就想，有没有可能简化这个查找表，于是，你知道了有 Function Approximation。如果这个近似函数是神经网络，那么就是现在很火的 Deep Reinforcement Learning 了。

当然，这些不重要。重要的是理解 Markov Decision Processes。你会发现，它不仅可以用来解决运动规划问题（DP ≈ Dijkstra、Monte Carlo ≈ RRT），还可以用来解决任务规划问题。

近年来，在强化学习的帮助下，机器人控制（尤其是足式机器人）实现了飞速进步。例如宇树的机器人动作，至少从效果上已经完全不逊色于 Boston Dynamics 了。我坚信，强化学习技术是机器人的未来。
