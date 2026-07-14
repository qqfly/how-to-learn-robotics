# Preface

After interviewing quite a few people who work in robotics research, I noticed something:
**almost none of the students who graduated on the mainland come across as "classically
trained."**

To be fair, if you go by their résumés — most majored in mechatronics or computer science,
some came straight out of labs that actually build robots, many have put in time at robotics
companies — they should all count as "professionals."

But interview after interview, hardly any of them had the complete picture of robotics as a
field. The folks who lay out circuit boards don't know how to do a robot workspace analysis.
The folks who design mechanisms don't know how to put dynamics to work in control. The folks
who write control algorithms don't know what configuration space is. The folks doing motion
planning don't know what Q-learning is. And the folks doing deep reinforcement learning don't
know how to take the control commands they've learned and actually get a real robot to move.

Looking back on my own years as a student, I understand why. When I started my PhD, I
inherited the SmartPal robot from a senior labmate. Leaning on his "hand-me-down code," I even
managed to bluff my way through a few demos for visiting guests:

<figure>

  <img src="images/smart-pal-and-me.webp" width="500" alt="The author standing beside the SmartPal humanoid robot"/>

  <figcaption>Me and the SmartPal robot</figcaption>

</figure>
But when I finally sat down and actually read that hand-me-down code, I discovered that all it
ever sent to the robot was a handful of joint **position** points.

**"Where is the PID???"**

That was my single biggest question at the time. The logic of this code was nothing like the
quadrotors and smart cars I'd tinkered with as an undergrad!

So, question in hand, I made the rounds and asked everyone in the lab. No answer. Later I even
signed up for several robotics-related graduate courses. A year of coursework later, I still
didn't have my answer.

And here's the thing. This was one of the earliest institutions in the country to take up
robotics research, yet its graduate robotics courses only taught us how to set up DH
coordinate frames; for dynamics, we did nothing more than work through a planar three-link
arm. Control and trajectory planning never came up at all — we weren't even asked to solve the
inverse kinematics.

As far as I know, plenty of other research institutions are the same. Robotics education in
China hasn't yet grown into a complete system, so mainland graduates have basically never
received a complete, systematic robotics education; they only pick up whatever a given project
happens to demand, by teaching themselves. And that has produced a whole crowd of robotics
PhDs and master's students who have never once solved a robot's inverse kinematics.

Not that "inverse kinematics" or "trajectory interpolation" are all that hard, mind you. My
point is this: on the mainland, a student who only ever sits in class has no way to master —
or even to bump into — these utterly basic pieces of robotics.

This is fairly common on the mainland. For students who graduated abroad, or in Hong Kong and
Taiwan, it's mostly a non-issue: their robotics curricula are relatively complete, the major
assignments tend to cover the key topics, and most of them require you to write real code.

So yes, most of us are "not classically trained." But in my experience, students on the
mainland are plenty sharp — give them a little correct guidance and they'll teach themselves
this material in no time. So let's take a look at how someone who's "not classically trained"
can go about learning robotics.
