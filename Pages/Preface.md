It has been six months since our startup company **[RVBUST INC.](http://www.rvbust.com)** was founded. After a series of meetings with the interviewees who work in robotics, a conclusion came to me, that most of the graduates from mainland are *untutored*; they do not receive systematic training for working on robotics.

Truthfully, if you look only at their work/education experience, you may find that most of them graduated from mechatronics, computer science, and even from the robot laboratories; some of them worked for robot companies. In this sense, these people are supposed to be *tutored*.

However, what I observed from the interview is, that most of the interviewees do not possess a complete knowledge system about robots - the guy who works on circuit schematic and PCB does not know how to do analysis in robot task space; the guy who designs mechanisms has no idea on how to implement dynamics in robot control; the guy who programs the control algorithm fails to understand the concept of configuration space; the guy who studies motion planning has not looked at Q-learning; the guy who plays with deep learning has no clue how to make robot move with the learned commands from the network.

I can really understand such phenomenon by my PhD candidate learning experience.  When I started my PhD research, I took over the SmartPal robot platform from my senior fellow apprentice. Relying on the source codes he left me, I once did some demonstrations in front of the foreign guest:

<p align="center">
  <img width="500" src="../Pics/SmartPalAndMe.jpg"/>
</p>

However, when I finally started to read these *ancestral* codes, what I found was shocking: the commands that I was sending to the robot were just some joint positions.

Hey, wait, wait, where is the PID?

That was the biggest question I had at the time. The logic within this code was *completely* different from the UAV, smart car, blah blah ... that I had played in my undergraduate courses. 

With this question, I asked in the whole lab and didn't get any answer. Even after a year of graduate study, during which I took several courses in robotics, I still didn't get the answer.

Indeed, even in place like my university, which is among the first three institute in China mainland to teach robotics, the graduates are only taught how to establish D-H coordinate and how to calculate dynamics for a 3-DoF manipulator. They would neither have any chance to calculate the inverse kinematics, nor be taught anything about control and motion planning during their graduate study.

As far as I know, this is a common case in many other institute in China mainland. No complete teaching system of robotics has been formed in our country. Therefore, there are seldom Chinese students who have been trained systematically for robotics; they only possess part of the knowledge by self-learning during their project experience. This leads to the fact that there are a large quantity of graduates/PhD graduates who are  in robotics but are out of basic knowledge for inverse kinematics.

Here I am not emphasizing how hard it is to learn the inverse kinematics or trajectory interpolation. What I hope to express is the fact that, in China mainland, the student cannot master, or even get in touch with this fundamental knowledge of robotics.

Although many of the readers are untutored, there would be no many barriers to master all the knowledge you need for studying robotics. Now let's get started to see how the 'untutored' should learn robotics. 