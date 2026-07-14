# Prerequisites

Of course, what counts as a "prerequisite" keeps shifting as your research goes deeper —
mathematics most of all. Math is a bit like the Sharingan: stare at the same stone tablet,
and a different "level" of Sharingan reads something completely different off it.

<figure>

  <img src="images/sharingan.webp" width="800" alt="The Sharingan as a metaphor for how different levels of mathematical maturity read different things off the same material"/>

  <figcaption>Math as the Sharingan — look at the same stone tablet, and each "level" sees something completely different.</figcaption>

</figure>
If all you have is arithmetic, you can still train up as a robot commissioning engineer. Add
linear algebra and calculus, and you can handle the basics of kinematics and dynamics
modeling. Add numerical methods, convex optimization, and differential geometry, and you can
start taking part in work on identification, planning, and learning.

But robotics is a wide field, and different directions need completely different foundations.
Sinking into a "prerequisites" swamp right at the start can cost you more than it's worth.

So here's what I'd suggest: nail down a few of the most basic prerequisites first, and pick up
the rest as the relevant chapters bring them up.

1. **Basic English.** In robotics, many of the classic, approachable textbooks come from
   abroad, and you simply **must** be able to read English-language texts. It'll hurt at
   first, but stick with it for about a month and it becomes second nature. (If you're reading
   this English edition, you've evidently cleared this one already.)

2. **Linear algebra.** Every spatial transformation — really, almost every robotics
   computation — rests on linear algebra, and you'll even want some basic "vector space"
   intuition. My top pick here is Prof. Gilbert Strang's *Linear Algebra*; the lectures are on
   [YouTube](https://www.youtube.com/watch?v=hNDFwVVKVk0&list=PL221E2BBF13BECF6C), and also on
   [NetEase Open Courses](http://open.163.com/special/opencourse/daishu.html) with Chinese
   subtitles. From the very first lecture he gets you looking at problems spatially, instead of
   harping on how to compute determinants.

3. **Calculus.** Anywhere robotics touches derivatives, integrals, or optimization, you'll
   need calculus — so it's another one you can't get around early on. I don't have a great
   video to recommend; maybe take a look at Gilbert Strang's
   [Highlights of Calculus](https://ocw.mit.edu/resources/res-18-005-highlights-of-calculus-spring-2010/)
   (also on [NetEase Open Courses](http://open.163.com/special/opencourse/weijifen.html), in
   Chinese)?

4. **Theoretical mechanics.** Robotics is a daily wrestling match with forces. But most
   robotics textbooks won't carefully derive spatial transforms, the principle of virtual work,
   or the Lagrangian formulation — and this material is fairly abstract, so plenty of
   self-learners get cut down right here, in the dynamics chapter. I don't have a great
   resource for this one either. On XuetangX there's Prof. Gao Yunfeng's
   [Theoretical Mechanics](https://www.xuetangx.com/courses/TsinghuaX/20330334X/_/about)
   (Tsinghua, in Chinese), worth a look. (Though back when I sat in his class, I could never
   quite stay awake.)

5. **Matlab or Python.** Both are very easy to pick up and great for visualizing data. As you
   learn robotics, a scripting language like these lets you knock out a quick implementation of
   an algorithm and check your own derivations against it. You only need the basics here —
   matrix operations and plotting; the fancier usage can wait. Intro courses for both are easy
   to find on Coursera: [Matlab](https://www.coursera.org/learn/matlab),
   [Python](https://www.coursera.org/specializations/python).

6. **Control theory.** Robotics is inseparable from control, even though robotics textbooks
   tend not to say much about it. True, most industrial robots today still run fairly simple
   algorithms — but as a researcher you ought to know some basic control theory: PID,
   state-space equations, observability, controllability, Lyapunov, optimal control, a little
   nonlinear control, and a little intelligent control. For this, take a look at
   [Brian Douglas](https://www.youtube.com/user/ControlLectures/featured)'s videos on YouTube;
   there's also a Chinese-subtitled version on
   [Bilibili](https://www.bilibili.com/video/BV1WT4y1M7rm) (in Chinese).

7. **Digital and analog electronics.** Robotics is a hands-on science: you've only really
   mastered something once you've turned your derived formulas into code and gotten a real
   robot to move the way you intended. Some digital and analog electronics gives you a basic
   grasp of logic circuits — enough that you won't be left wondering why a motor needs a driver
   in front of it. It also makes it easy to throw together a small circuit for control
   experiments when there's no actual robot on hand. Any decent textbook will do; the one I
   used back then was by Prof. Tang Qingyu.

8. **A little microcontroller work.** Digital and analog electronics alone won't get you a
   working control circuit — you also need to turn that knowledge into a real circuit that runs
   your control code, and that means microcontrollers. Buy one of the cheap minimal-system
   boards online that come with servo-motor tutorials, and learn a bit of Arduino or STM32.
   Better still, if you can get into something like RoboMaster or the NXP Cup smart-car
   competition (formerly Freescale), you'll come away with a basic feel for all the embedded
   modules.

9. **Linux and C.** Now that we have the circuit side, we need to turn our formula-code into
   instructions the circuit can run — which brings in embedded programming. I'd learn a bit of
   C here. Embedded work doesn't ask much of your C; a little syntax is enough — something like
   [Getting Started with C](https://akaedu.github.io/book/pt01.html) (in Chinese). But if you
   think you might do more high-level work down the road, better to learn C properly from the
   start. For programming, Linux is a good environment to be in, so this is a fine moment to
   install a Linux system and learn C on it.

10. **Basic 3D design.** When you're building an experimental platform, you'll often need to
    design and machine small parts, and knowing a 3D design tool can dramatically speed up
    development — SolidWorks is a good choice. Pair it with something like a 3D printer and you
    can do rapid prototyping. (And even without a 3D printer, online 3D-printing services are
    easy to find — just send them your design files.)

11. **Bilibili.** Bilibili (bilibili.com) has a surprising wealth of learning material — many
    foreign courses, Coursera courses, and the like show up there as free, subtitled videos,
    alongside plenty of recordings made by people a few steps ahead of you. (in Chinese)

12. **AI tools.** Today's frontier large language models already outstrip the vast majority of
    people on most specialized topics, so lean on AI tools heavily as you learn: have them help
    you understand concepts, write verification code, hunt down authoritative references, and
    talk through the points you're stuck on. It's a real force multiplier. When you get the
    chance, use the best model you can.

Roughly speaking, everything above is about where a third-year undergraduate in automation or
mechatronics should be. Once you have a basic handle on these pieces, you're ready to start in
on robotics itself.
