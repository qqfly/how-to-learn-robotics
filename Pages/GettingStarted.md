What does 'Get Started' in robotics means? It means to know how to make an industrial robot to move. Actually, the research in this area is very mature. You will be advised to read some textbooks from *the last century*. Here I would like to recommend *Introduction to Robotics: Mechanics and Control*<sup>[1]</sup> written by John Craig. You may find from [Youtube](https://www.youtube.com/watch?v=0yD3uBshJB0&list=PL64324A3B147B5578) the open course taught by Oussama Khatib from Standford University. Basically the content of the course does a good match with this textbook.

<p align="center">
  <img width="300" src="../Pics/CraigBook.jpg"/>
</p>

For non-English speakers, I would recommend you to read the English version in stead of  a translated version. As a 'get started', Craig' s book makes it possible to explain the profound things in a simple way. Combined with Khatib' s video, you would be quickly get the basic knowledge for robotics.

I was always telling my junior fellow apprentices that "you will excel at robotics if you can understand the entire book." However, it is still a small number who can finally fulfil that task.

Therefore I would like to change my wording to "you will be very likely to get a good position in a robot company in China. "

In the following sections you will find most of the basic knowledge mentioned above. Due to the limitness of the length of the article, not everything will be included.

### 3.1 Space Transformation

Homogeneous transformation (and homogeneous transformation matrix) is a very fundamental and essential concept in robotics. Here I would like to list some to be especially noted:

- Understand the representation of coordinates, e.g. the representation of frame {B}  relative to frame {A} is $^A_B{T}​$
- Understand the difference between left-multiplication and right-multiplication
- Understand the physical meaning of the columns in a rotation matrix; learn how to do *oral calculation* to the rotation matrix between two frames.
- Understand different represetation methods of pose: RPY, euler-angle, angle-axis, rotation matrix, quaternion, etc. 
- Try to understand angular velocity in robotics, if possible.

### 3.2 Kinematics

<p align="center">
  <img width="600" src="../Pics/RobotKinematics.jpg"/>
</p>

For robotics, a basic process is the calculation of the kinematics:

- Forward kinematics (FK): Given joint values of the robot, calculate the pose of the end-effector respect to robot base frame (or world frame);
- Inverse kinematics (IK): Give a pose of the end-effector, calculate the corresponding joint values.

According to [3.1]() you are aware that the relationship between two frames can be represented by a 4x4 matrix. For FK, if we know the tranformation between each two links, then we can get the end pose by multiplying all the transformation matrices together.

In order to calcualte the relative pose of two links with ease, you have to learn a so-called "D-H" modelling method. In brief, it is a series of rules to establish link frames, each of which can be expressed with 4 parameters (DH parameters).

You may notice that there are variant DH methods, like Standard DH, Modified DH. Just keep in mind that the DH method is to help establish the relative relationship between neighboring links, or you could just follow Craig' s book to learn it (which in Wikipedia is called Modified DH):

<p align="center">
  <img width="500" src="../Pics/ModifiedDH.jpg"/>
</p>
Step 1: Establish the frame

- Axis '''$$z_i​$$''' coincides with joint  $$i​$$ ; 
- $$x_i​$$ is parallel to the common perpendicular of  $$z_i​$$ and  $$z_{i+1}​$$ , which means that $$x_i = z_i \times z_{i+1}​$$. If  $$z_i \parallel z_{i+1}​$$ , then  $$x_i​$$ is defined as the common perpendicular pointing from  $$z_i​$$ to $$z_{i+1}​$$ .
- $$y_i$$ can then be determined by $$x_i$$ and  $$z_i$$ using right-hand law.
- Except from the frames that are fixed to every joint, there will be possibly a base frame {B} and a end-effector frame {E} on the base and on the end effector of the robot, respectively.

Step 2: Calculate the DH parameters

- $$a_i$$ is the distance from  $$z_i$$ to  $$z_{i+1}$$ along the direction of  $$x_i$$ ;
- $${\alpha}_i​$$ is the angle from $$z_i​$$ to $$z_{i+1}​$$ around axis $$x_i​$$ ;
- $$d_i​$$ is the distance from  $$x_{i-1}​$$ to  $$x_{i}​$$ along the direction of  $${z}_i​$$ ;
- $${\theta}_i$$ is the angle from  $$x_{i-1}$$ to  $$x_{i}$$ around axis  $${z}_i$$ .

Step 3: Calculate the transformation matrices

$${^i_{i-1}}T = Rot(x_{i-1}, \alpha_{i-1}) \cdot Trans(x_{i-1},a_i) \cdot Rot(z_i, \theta_i) \cdot Trans(z_i, d_i)$$

<img src="https://latex.codecogs.com/gif.latex?{^i_{i-1}}T&space;=&space;Rot(x_{i-1},&space;\alpha_{i-1})&space;\cdot&space;Trans(x_{i-1},a_i)&space;\cdot&space;Rot(z_i,&space;\theta_i)&space;\cdot&space;Trans(z_i,&space;d_i)" title="{^i_{i-1}}T = Rot(x_{i-1}, \alpha_{i-1}) \cdot Trans(x_{i-1},a_i) \cdot Rot(z_i, \theta_i) \cdot Trans(z_i, d_i)" />

$${^i_{i-1}}T=\begin{bmatrix}cos(\theta_i)&-sin(\theta_i)&0&a_{i-1}\\sin(\theta_i)cos(\alpha_{i-1})&cos(\theta_i)cos(\alpha_{i-1})&-sin(\alpha_{i-1})&-d_isin(\alpha_{i-1})\\sin(\theta_i)sin(\alpha_{i-1})&cos(\theta_i)sin(\alpha_{i-1})&cos(\alpha_{i-1})&d_icos(\alpha_{i-1})\\0&0&0&1\end{bmatrix}$$

<img src="https://latex.codecogs.com/gif.latex?{^i_{i-1}}T=\begin{bmatrix}cos(\theta_i)&-sin(\theta_i)&0&a_{i-1}\sin(\theta_i)cos(\alpha_{i-1})&cos(\theta_i)cos(\alpha_{i-1})&-sin(\alpha_{i-1})&-d_isin(\alpha_{i-1})\sin(\theta_i)sin(\alpha_{i-1})&cos(\theta_i)sin(\alpha_{i-1})&cos(\alpha_{i-1})&d_icos(\alpha_{i-1})\0&0&0&1\end{bmatrix}" title="{^i_{i-1}}T=\begin{bmatrix}cos(\theta_i)&-sin(\theta_i)&0&a_{i-1}\sin(\theta_i)cos(\alpha_{i-1})&cos(\theta_i)cos(\alpha_{i-1})&-sin(\alpha_{i-1})&-d_isin(\alpha_{i-1})\sin(\theta_i)sin(\alpha_{i-1})&cos(\theta_i)sin(\alpha_{i-1})&cos(\alpha_{i-1})&d_icos(\alpha_{i-1})\0&0&0&1\end{bmatrix}" />

Step 4: Forward Kinematics

$${^b_e}{T}={^b_1}T\cdot{^1_2}T\cdot{...}\cdot{^n_e}T$$

<img src="https://latex.codecogs.com/gif.latex?{^b_e}{T}={^b_1}T\cdot{^1_2}T\cdot{...}\cdot{^n_e}T" title="{^b_e}{T}={^b_1}T\cdot{^1_2}T\cdot{...}\cdot{^n_e}T" />

Step 5: Inverse Kinematics

Just by constantly adjusting (left multiply and right multiply) the positions of the above several matrices, try to find the unknowns that can be solved separately. Although cumbersome, but beginners are suggested to calculate the inverse kinematics solution of a six-axis robot arm by hand, and then **implement the algorithm by programming**.

### 3.3 Jacobian

The Jacobian matrix (also called as Jabobian) is a very important and useful concept in robotics. It represents the relationship between the speed of joints  $$\dot{q}$$ and the speed of the end-effector  $$\dot{x}$$：

$$\dot{x}=J\cdot \dot{q}​$$

<img src="https://latex.codecogs.com/gif.latex?\dot{x}=J\cdot&space;\dot{q}​" title="\dot{x}=J\cdot \dot{q}​" />

- If you have not figured out angular velocity yet, I advise you to think about it now. Try to answer the question: why can' t you get the velocity by direct derivation of the Euler angles?
- Understand the calculation process of Jacobian in the textbook. Try to answer the question: is it possible to get the Jacobian by calculating the partial derivatives of the FK transformation matrix?
- Master the technique to calculate the Jacobian with codes.
- If you are familiar with Matlab or Python, you are suggested to use their symbolic calcuation function to find answers to the quesitons above.
- If you know virtual work, then you may also notice that the Jacobian can also represent the relationship between the the force of the end-effector $${F}$$ and the force of joints  $${\tau}$$.

With Jacobian, you may find that now you know how to move the end-effector by adjusting the joint angles. If you review the Inverse Kinematics problems in last section, you will find it quite intuitive: All you need is move the end-effector of the robot towards the target pose.

<p align="center">
  <img width="500" src="../Pics/JacobianIK.jpg"/>
</p>

<!-- TODO: update this pic -->

Yes, that is the numerical method to do robotic kinematics calculations. You can use this method to implement a general solver for inverse kinematics. If you are interested in this topic you can read the post written by me (in Chinese) on '[How the inverse kinematics solution is calculated in Matlab robotics toolbox](https://www.zhihu.com/question/41673569/answer/129670927)'.

It is strongly recommended that every beginner should implement the algorithm by yourself. You have to get your hand dirty if you want to dig deeper in this area.

The method is very brief. However, there are also serveral problems:

- The calculation is expensive. Multiple iterations are needed;
- Only one solution for one time. You cannot extract all the possible solutions;
- Sometimes you may come up with singularities and the result cannot converge.

So in this stage you can get to know more about the singularity problem. Try understand that singularity is determined by the property of robot structure, which cannot be discriminated by different methods of modelling.

### 3.4 Dynamics

<p align="center">
  <img width="500" src="../Pics/NewtonEulerDynamics.jpg"/>
</p>

I believe that many guys quit learning robotics in this chapter:

Outward iterations: $i : 0 \to 5$
$$
\begin{aligned}
{^{i+1}{w}_{i+1}} &= {_{i}^{i+1}{R}}\cdot{^{i}w_{i}} + {\dot{\theta}_{i+1}}\cdot{^{i+1}\hat{Z}_{i+1}}, \\
{^{i+1}{\dot{w}}_{i+1}} &= {_{i}^{i+1}{R}}\cdot{^{i}{\dot{w}}_{i}} + {_{i}^{i+1}{R}}\cdot{^{i}{w}_{i}}\times{\dot{\theta}_{i+1}}\cdot{^{i+1}\hat{Z}_{i+1}} + {\ddot{\theta}}_{i+1}\cdot{^{i+1}\hat{Z}_{i+1}}, \\
{^{i+1}{\dot{v}}_{i+1}} &= {_{i}^{i+1}{R}}({^{i}{\dot{w}}_{i}}\times{^{i}{P}_{i+1}} + {^{i}{w}_{i}}\times({^{i}{w}_{i}}\times{^{i}{P}_{i+1}}) + {^{i}{\dot{v}}_{i}}), \\
{^{i+1}{\dot{v}}_{C_{i+1}}} &= {^{i+1}{\dot{w}}_{i+1}}\times{^{i+1}{P}_{C_{i+1}}} + {^{i+1}{w}_{i+1}}\times({^{i+1}{w}_{i+1}}\times{^{i+1}{P}_{C_{i+1}}}) + {^{i+1}{\dot{v}}_{i+1}}, \\
{^{i+1}{F}_{i+1}} &= {{m}_{i+1}}\cdot{^{i+1}{\dot{v}}_{C_{i+1}}}, \\
{^{i+1}{N}_{i+1}} &= ^{C_{i+1}}{I}_{i+1}\cdot{^{i+1}{\dot{w}}_{i+1}} + {^{i+1}{w}_{i+1}}\times{^{C_{i+1}}{I}_{i+1}}\cdot{^{i+1}{w}_{i+1}}

\end{aligned}
$$

<img src="https://latex.codecogs.com/gif.latex?\\&space;{^{i&plus;1}{w}_{i&plus;1}}&space;&=&space;{_{i}^{i&plus;1}{R}}\cdot{^{i}w_{i}}&space;&plus;&space;{\dot{\theta}_{i&plus;1}}\cdot{^{i&plus;1}\hat{Z}_{i&plus;1}},&space;\\&space;{^{i&plus;1}{\dot{w}}_{i&plus;1}}&space;&=&space;{_{i}^{i&plus;1}{R}}\cdot{^{i}{\dot{w}}_{i}}&space;&plus;&space;{_{i}^{i&plus;1}{R}}\cdot{^{i}{w}_{i}}\times{\dot{\theta}_{i&plus;1}}\cdot{^{i&plus;1}\hat{Z}_{i&plus;1}}&space;&plus;&space;{\ddot{\theta}}_{i&plus;1}\cdot{^{i&plus;1}\hat{Z}_{i&plus;1}},&space;\\&space;{^{i&plus;1}{\dot{v}}_{i&plus;1}}&space;&=&space;{_{i}^{i&plus;1}{R}}({^{i}{\dot{w}}_{i}}\times{^{i}{P}_{i&plus;1}}&space;&plus;&space;{^{i}{w}_{i}}\times({^{i}{w}_{i}}\times{^{i}{P}_{i&plus;1}})&space;&plus;&space;{^{i}{\dot{v}}_{i}}),&space;\\&space;{^{i&plus;1}{\dot{v}}_{C_{i&plus;1}}}&space;&=&space;{^{i&plus;1}{\dot{w}}_{i&plus;1}}\times{^{i&plus;1}{P}_{C_{i&plus;1}}}&space;&plus;&space;{^{i&plus;1}{w}_{i&plus;1}}\times({^{i&plus;1}{w}_{i&plus;1}}\times{^{i&plus;1}{P}_{C_{i&plus;1}}})&space;&plus;&space;{^{i&plus;1}{\dot{v}}_{i&plus;1}},&space;\\&space;{^{i&plus;1}{F}_{i&plus;1}}&space;&=&space;{{m}_{i&plus;1}}\cdot{^{i&plus;1}{\dot{v}}_{C_{i&plus;1}}},&space;\\&space;{^{i&plus;1}{N}_{i&plus;1}}&space;&=&space;^{C_{i&plus;1}}{I}_{i&plus;1}\cdot{^{i&plus;1}{\dot{w}}_{i&plus;1}}&space;&plus;&space;{^{i&plus;1}{w}_{i&plus;1}}\times{^{C_{i&plus;1}}{I}_{i&plus;1}}\cdot{^{i&plus;1}{w}_{i&plus;1}}" title="\\ {^{i+1}{w}_{i+1}} &= {_{i}^{i+1}{R}}\cdot{^{i}w_{i}} + {\dot{\theta}_{i+1}}\cdot{^{i+1}\hat{Z}_{i+1}}, \\ {^{i+1}{\dot{w}}_{i+1}} &= {_{i}^{i+1}{R}}\cdot{^{i}{\dot{w}}_{i}} + {_{i}^{i+1}{R}}\cdot{^{i}{w}_{i}}\times{\dot{\theta}_{i+1}}\cdot{^{i+1}\hat{Z}_{i+1}} + {\ddot{\theta}}_{i+1}\cdot{^{i+1}\hat{Z}_{i+1}}, \\ {^{i+1}{\dot{v}}_{i+1}} &= {_{i}^{i+1}{R}}({^{i}{\dot{w}}_{i}}\times{^{i}{P}_{i+1}} + {^{i}{w}_{i}}\times({^{i}{w}_{i}}\times{^{i}{P}_{i+1}}) + {^{i}{\dot{v}}_{i}}), \\ {^{i+1}{\dot{v}}_{C_{i+1}}} &= {^{i+1}{\dot{w}}_{i+1}}\times{^{i+1}{P}_{C_{i+1}}} + {^{i+1}{w}_{i+1}}\times({^{i+1}{w}_{i+1}}\times{^{i+1}{P}_{C_{i+1}}}) + {^{i+1}{\dot{v}}_{i+1}}, \\ {^{i+1}{F}_{i+1}} &= {{m}_{i+1}}\cdot{^{i+1}{\dot{v}}_{C_{i+1}}}, \\ {^{i+1}{N}_{i+1}} &= ^{C_{i+1}}{I}_{i+1}\cdot{^{i+1}{\dot{w}}_{i+1}} + {^{i+1}{w}_{i+1}}\times{^{C_{i+1}}{I}_{i+1}}\cdot{^{i+1}{w}_{i+1}}" />

It *looks* extremely difficult for multiple-axes robotic kinematics no matter you start with Newton-Euler method or Lagrange method. If you have yet mastered classical mechanics, then you will feel very lagging on every move you make in the further study in robotics.

Therefore, I personally think that you only need a basic concept for this part temporily, and it is not necessary to directly go into the dynamics of the six-axis robots. It is ok if you can do the following:

- Calculate the dynamic model of the three-axis manipulator using the Lagrangian method (the three-axis solution is still within acceptable limits);
- Calculate the dynamics model of the three-axis manipulator using the Newton Euler method. It must be **programmed** to implement the algorithm. It is worth it since the Newton method is much easier to be implemented programmatically. If you want to do dynamics, it is more likely you use Newton method instead of Lagrange method;
- Understand the physical meaning of the moment of inertia, (in the above programming process, there will definitely be corresponding problems, such as the reference coordinate system of angular velocity and moment of inertia);
- Know what parts of the robot dynamics are involved (form form, linkage dynamics, joint dynamics, gravity effects, joint friction, motor dynamics, etc.).

### 3.5 Control

At this time, we have a variety of tools to solve the kinematics of the robot. We know the joint angle values that the robot reachs any state. But how do we make these joints moving? 

First of all, we must know that the world in daily life is ruled by Newtonian mechanics.

$$F = m \cdot a$$

<img src="https://latex.codecogs.com/gif.latex?F&space;=&space;m\cdot{a}" title="F = m\cdot{a}" />

To make things move, we must give it a force.

<p align="center">
  <img width="800" src="../Pics/Slider.jpg"/>
</p>
If we specify a motion trajectory of an object ![](https://latex.codecogs.com/gif.latex?s(t)), we can calculate the acceleration of its entire trajectory ![](https://latex.codecogs.com/gif.latex?\ddot{s}(t))$$\ddot{s}(t)$$, and then calculate the force required to achieve the desired motion: 

$$F(t) = m \cdot \ddot{s}(t)​$$

<img src="https://latex.codecogs.com/gif.latex?F(t)&space;=&space;m&space;\cdot&space;\ddot{s}(t)​" title="F(t) = m \cdot \ddot{s}(t)​" />

In other words, we can calculate the joint torque required for the robot to move through the dynamics.

<p align="center">
  <img width="500" src="../Pics/DCMotor.jpg"/>
</p>
The joint torque can be provided by the motor output. For DC motors, the output torque is proportional to the current. However, there are several issues:

- Dynamics are difficult to calculate;
- The kinetic parameters are not accurate (the moment of inertia and the joint friction are difficult to calculate);
- There may also be various external forces (objects to be grasped, changes in joint dynamics properties, etc.). 

Then that is the work of the control algorithms. we will meet the *PID control algorithm* which you may have heard long long time ago. 

Now, I would recommand that you do this small experiment if you have something like an Arduino or a Raspberry Pi: 

*Try designing a motor servo control system which consists of the DC motor (you can simply control current, torque or PWM of the motor instead of using a step motor or servo motor), the encoder (to get feedback of the rotate angle of the motor), the drivers (to convert digital command to motor control signals) and the controller (to integrate the overall system).*

You may also know a lot about communication, interruption, and runtime.



However, there is another problem: if we send the joint target position directly to the PID controller, then each time it is a step response.

<p align="center">
  <img width="500" src="../Pics/StepAndTraj.jpg"/>
</p>
But wait, are you missing something again? There seems to be accelerations and decelerations (right) , instead of a step (left).

<p align="center">
  <img width="500" src="../Pics/TrajPlanning.jpg"/>
</p>
Now you know you also need *trajectory planning*: Given some points in a trajectory, you have to use some functions to fit this trajectory.

At this stage, you may find that both PID algorithm and dynamics can be used to calculate the force to drive the robotic arm. Then is it possible to combine them together, if we use dynamics first to calculate a torque, and use PID then to eliminate tiny errors of uncertainty?

<p align="center">
  <img width="500" src="../Pics/FeedforwardPID.jpg"/>
</p>
Congratulations, you have found the basic idea of dynamics feed forward based PID control algorithm.

There are still something left uncovered in Craig's book in the corresponding chapters. You can selectively read them since much of the content is a bit out-of-date.