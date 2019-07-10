Certainly, the prerequisite knowledge of robotics keeps updating with the deepening of your research, especially in mathematics. We can see math as "Sharingan", you will have different views on the same thing when you on different level of Sharingan. 

<p align="center">
  <img width="800" src="../Pics/Sharingan.jpg"/>
</p>

With basic knowledge of robotics, you may be qualified for a position of Robot Commissioning Engineer；With the knowledge of Linear Algebra、Calculus, you are able to master the fundamental content like Kinematics、Dynamics modelling；And you can start to involve in some project work including recognition, motion planning and robot programming/teaching, after you completed studies in computing method, convex optimization and differential geometry.

However, robotics is a complex and multi-disciplinary subject,  as a result of that, the basic knowledge for different directions of robotics can be totally different. Here, instead of some general prerequisites, we won't recommend people for some "specific prerequisite", and don't get yourself trapped at the beginning. We believe you will find your direction during the processing of learning. 

So, here are some recommended basic prerequisite knowledges by myself, and all the rest knowledges will be mentioned in subsequent pages:

1. **Linear Algebra**: We need linear algebra to calculate all spatial transformation and other robotics related computations, even sort of the basic thought of「Linear Space」. Hereby, for learning linear albegra, we highly recommend the public online lectures from Prof. Gilbert Strang, which can be found on [Youtube](https://www.youtube.com/watch?v=hNDFwVVKVk0&list=PL221E2BBF13BECF6C). This course teaches you how to look at a problem from the perspective of space instead of calculating the result only.

2. **Calculus**: In robotics, calculus is very important since we need it for all of the calculation of detivative, intergratio and optimization. It makes calculus and robotics closely related. Here we recommend you the lectures from Gilbert Strange's <[Highlights of Calculus](https://ocw.mit.edu/resources/res-18-005-highlights-of-calculus-spring-2010/)> on MIT Open Courseware.

3. **Mechanics & Robotics**: The learning process of robotics is also a experience of learning mechanics. However, normally robotics relative textbooks won't derive theories and fomulas such as Spatial Transformation、Principle of Virtual Work (PVW)、Lagrange. Many beginners may even end up their self-learning process at here, due to the complexity and abstration of dynamics mostly. I would recommend two online courses from MIT which are free, <[Mechanics: Kinematics and Dynamics](https://www.edx.org/course/mechanics-kinematics-and-dynamics)> and <[Introduction to Robotics](https://ocw.mit.edu/courses/mechanical-engineering/2-12-introduction-to-robotics-fall-2005/)>. These two courses cover almost all the topics you need for begining. If you want to take a step further, I also found these two textbooks were very useful during my learning experience, 《Engineering Mechanics: Dynamics》 & 《Introduction to Robotics: Mechanics and Control》.
<!-- TODO: Improve <<theoretical mechanics>>  -->

<p align="center">
  <img width="500" src="../Pics/Robotics and Mechanics.jpg"/>
</p>
   
4. **Matlab or Python**: Both of these two programming languages are quite easy to get started，and implement data visulization. In the learning process of robiotics, some algrithom can be easily implemented using this kind of scripting languages to verify the derived result. At this moment, we only need to handle the operations of matrix and visulization, you can obatin the advanced usage of them in later studies. Here are two introductory courses to these two programming language from Coursera: [Matlab](https://www.coursera.org/learn/matlab)、[Python](https://www.coursera.org/specializations/python).

5. **Control Theory**: Control theory is a very important topic during studying robotics, but most of the robotics textbooks won't cover it. Currently most of the industrial robots are still using simple algrithoms, but as a researcher, it is necessary to obtain some fundamental control theories, including but not limited to PID, equation of state, objectivity, controllability, Lyapunov, optimum control and some knowledges of non-linear control and intelligent control. Here is a useful link from [Brian Douglas](www.youtube.com/channel/UCq0imsn84ShAe9PBOFnoIrg) on Youtube.

<p align="center">
  <img width="500" src="../Pics/Electrical and Control.jpg"/>
</p>

6. **Analog & Digital Circuits**: 机器人是一门实践科学，只有当你把你推导的公式写成代码、并最终让实际机器人按照你的想法动起来的时候，才说明你掌握了相关知识。数电模电的知识可以让你对逻辑电路有个基本了解，不至于后面连为什么电机前面要加一个驱动器都不知道；同时，在身边没有实际机器人的情况下，自己搭个小电路做一些控制实验也是非常方便的。这块知识可以随便找本教材看看，例如我当时用的是唐庆玉老师的教材。

7. **Microcontroller (MCU)**: For design and set up a control circuit system, besides the theories of analog & diginal circuits knowledge, you also need to know how to use them in a real circuit and control it with running some codes. A microcontroller would be a good start for that. 要想搭建简单的控制电路，只有数电模电知识是不够的，还要能将这些知识转换成实际的电路，并且能运行控制代码，那么就需要会单片机。对于单片机，可以网上随便买一些带伺服电机控制教程的最小系统板，学学 Arduino 或 STM32，当然，如果能参加个 RoboMaster 或者飞思卡尔智能车大赛什么的是最好了，可以对embedded system嵌入式的各个模块有个基本了解。

8. **Linux and C Programming**: The next step is to 现在有了电路部分，我们需要将convert equations and codes into the 公式代码变成instruction in circuit电路指令，这就涉及embedded system programming的编程了。这块建议学一点 C programming is the key of embedded system, but the requirement is not too high语言。嵌入式对 C 的要求其实并不高，随便学点syntax就够了，例如[《C语言入门》](https://akaedu.github.io/book/pt01.html)。However, if you want to involve in some high level work or research of robotics in the future, you better need some solid knowledge in C programming. 但是，如果未来想做一些更加上层的工作，最好一开始就把 C 学好。学编程，BTW, Linux, especially Ubuntu, is a great platform for learning programming, so try to start with the Linux system and learn programming with C on it. More importantly, ROS (Robot Operation System) runs on Ubuntu, and you will find C++ is also very useful for robot research and development. 是个不的选择，所以，这时候，可以尝试安装个 Linux 系统，在上面学习 C 语言。

9. **Basic 3D Design**: During the design of experimental platform, we usually need to machine some customized components, a CAD design software such as Solidworks can speed up the design process. 3D printer can reduce the process time of prototype machining. (3D printers are very common in North America, most of the universities provide 3D print service, even free for some of the universities. For the rest of regions, you can try to find some 3D print services online, and send your 3D file to them).

The above contents are pretty much all  of the knowledges need to obtain for third-year university students major in Automation or Mechatronics engineering student. After that, you may begin the studies of robotics. 