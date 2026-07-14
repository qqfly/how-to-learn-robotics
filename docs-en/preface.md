# Preface

After interviewing quite a few people who work in robotics research, I keep coming back to one
observation: **most of them, however strong in their own specialty, have never been formally
trained in robotics as a whole.**

On paper, they look the part. Most majored in mechatronics, electrical engineering, or computer
science; some came straight out of labs that build robots; many have worked at robotics
companies. By any résumé, these are professionals.

But interview after interview, few of them have a complete picture of the field. Someone who
lays out circuit boards may never have analyzed a robot's workspace. Someone who designs
mechanisms may never have used dynamics in control. Someone who writes control algorithms may
not have met configuration space. Someone in motion planning may not have run into Q-learning.
Someone in deep reinforcement learning may not know how to turn the policy they've learned into
actual motion on a real robot.

Looking back on my own years as a student, I understand why. When I started my PhD, I inherited
the SmartPal robot from a senior labmate. Leaning on his "hand-me-down code," I even managed to
bluff my way through a few demos for visiting guests:

<figure>

  <img src="images/smart-pal-and-me.webp" width="500" alt="The author standing beside the SmartPal humanoid robot"/>

  <figcaption>Me and the SmartPal robot</figcaption>

</figure>
But when I finally sat down and read that hand-me-down code, I found that all it ever sent to
the robot was a handful of joint **position** points.

**"Where is the PID???"**

That was my biggest question at the time. The logic of this code was nothing like the
quadrotors and smart cars I'd tinkered with as an undergrad.

So, question in hand, I asked around the lab. No answer. Later I took several robotics-related
graduate courses, and a year of coursework later I still didn't have my answer.

Here is the part that stuck with me. This was one of the earliest institutions in China to take
up robotics research, yet its graduate robotics courses covered little more than how to set up
DH coordinate frames; for dynamics, we worked through a single planar three-link arm. Control
and trajectory planning never came up, and we weren't even asked to solve the inverse
kinematics.

As far as I could tell, several other institutions were similar. At least among the people I've
met, robotics training in mainland China often isn't organized as one coherent curriculum; many
graduates picked up whatever a given project happened to need, largely by teaching themselves.
That path can produce genuinely capable engineers who have nonetheless never once worked through
a robot's inverse kinematics.

Not that inverse kinematics or trajectory interpolation are especially hard. The point is
narrower: if you only attend classes, it's easy to finish a program in mainland China without
ever being asked to master, or even encounter, these fairly basic parts of robotics.

The graduates I've met from programs abroad, or in Hong Kong and Taiwan, less often had this
gap; the courses they described tended to cover the main topics and to require real coding. I
wouldn't want to read too much into one person's set of interviews, but the pattern was
consistent enough to be worth naming.

So yes, many of us come to robotics without that structured foundation. In my experience,
though, the students I've worked with are very capable: with a bit of the right guidance, they
pick this material up quickly on their own. So let's look at how someone without a formal
robotics background can go about learning it.
