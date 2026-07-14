# Embodied AI

!!! note "This part is a work in progress"

    This part discusses data-driven robotics. The planned chapters: an introduction (the overall
    trend, the current state, and why it might be the direction of the future); a quick tour of
    machine learning (FNN, CNN, Transformer, LLM, as groundwork for what follows); reinforcement
    learning and whole-body control (a proven area of success); imitation learning (theoretically
    incomplete, but with a shot at deployment in limited scenarios); data-driven general-manipulation
    explorations like VLA and the World Action Model (WAM); a sober outlook; and getting started. The
    two sections below are carried over, for now, from the original "Advanced" part, and will be
    restructured together with this part later.

### Machine learning

A lot of the work above has been modeling + identification. There's actually another big class of
work that's data-based: you take a general model and use data to learn and fit it. This is what
people usually call machine learning.

My own learning path for this was:

- Andrew Ng's [Machine Learning](https://www.coursera.org/learn/machine-learning) on Coursera, to
  get the basics of machine learning.

- Geoffrey Hinton's
  [Neural Networks for Machine Learning](https://www.youtube.com/playlist?list=PLoRl3Ht4JOcdU872GhiYWf6jwrk_SNhz9),
  which I watched on Coursera back then, though now it seems you can only find it on YouTube. This
  course basically walks you through several classic kinds of neural network.

- Various open-source platforms. With the foundation above, and after implementing a few classic
  machine-learning algorithms in Matlab, you can go try some deep-learning open-source platforms,
  like [PyTorch](https://pytorch.org/). There are so many people doing machine learning that there's
  a huge amount of material, and it's very easy to teach yourself online.

Of course, we should remember that we're learning machine learning not to switch over to DL, but to
use it as a tool for robotics research:

- Intelligent control: those of you who've studied intelligent control probably remember the use of
  networks like the cerebellar model (CMAC) in control;

- Modeling: for places that are hard to model, it's sometimes worth trying a machine-learning
  approach; for instance, fitting friction with a neural network;

- Vision: robots often need to be combined with vision, and DL has developed rapidly in the vision
  field; borrowing this tool can sometimes let you stand up an experimental prototype very quickly;

- Reinforcement learning: covered in the next section.

In recent years, as the concept of "embodied AI" has developed, some quite impressive results have
appeared. Although they're still in an "overfitting" state, they've achieved many things that
traditional plan-and-control methods struggle with (like lacing shoes and folding clothes), bringing
a lot of new capability to robotics.

### Reinforcement learning

If you've studied reinforcement learning, you've surely been won over by how minimal its theory is:
all of it derives from a single Bellman equation. And reinforcement learning fits human intuition
very well. For these reasons, many people believe reinforcement learning is the future direction for
robots.

Here I'll first sketch how to get started with reinforcement learning, and share my own take at the
end.

First, read the book. Sutton's *Introduction to Reinforcement Learning*<sup>[13]</sup> is the
essential text, the one almost everyone starts with.

You can find a Python implementation of the algorithms on GitHub:
[Python Implementation](https://github.com/ShangtongZhang/reinforcement-learning-an-introduction).

Reading Sutton's book, you can learn step by step how to derive Dynamic Programming, Monte Carlo, TD
Learning, and other methods from the original Bellman equation.

You'll learn that reinforcement learning is about learning, through repeated trial, a lookup table
from State to Action/Value.

Then you wonder whether that lookup table could be simplified, and you learn there's Function
Approximation. If that approximating function is a neural network, then it's the now-hot Deep
Reinforcement Learning.

Of course, none of that is the point. What matters is understanding Markov Decision Processes. You'll
find they can be used not just to solve motion-planning problems (DP ≈ Dijkstra, Monte Carlo ≈ RRT)
but also task-planning problems.

In recent years, with the help of reinforcement learning, robot control (legged robots especially)
has made rapid progress. Unitree's robot motions, for example, are already fully a match for Boston
Dynamics, at least in terms of results. I firmly believe reinforcement learning is the future of
robots.
