# Dragon Quest

<figure>

  <img src="images/the-brave.webp" width="500" alt="A hero, sword raised, off to slay the dragon"/>

  <figcaption>A hero, off to slay the dragon.</figcaption>

</figure>
By now you know how to make a robot move, and you've gained deep knowledge in some area of robotics.
And so, like a hero who's just slain his first slime, you raise your sword, ready at any moment to
plunge it into the dragon's heart.

But just then, someone runs over and dumps a bucket of cold water on your head:

These days, any company can spend a little money to have someone draw up a robot blueprint, get it
machined at a factory, buy a few motors and reducers and other parts, drop in a general-purpose
controller, and off it runs. Who needs dynamics, optimal control, or motion planning?

Even the big four robot makers (ABB, FANUC, KUKA, and Yaskawa) get by with DH for modeling — at most a bit of kinematic calibration
and dynamics identification — and put most of their energy into application integration. Who needs
Lie groups, convex optimization, or reinforcement learning?

**"There are no dragons in this world!"**

But here's what I want to say: in robotics, as long as physical labor in industry and agriculture
hasn't been fully automated, the dragon exists:

<figure>

  <img src="images/teaching.webp" width="500" alt="Teaching a robot point by point with a teach pendant"/>

  <figcaption>Teaching a robot point by point with a teach pendant.</figcaption>

</figure>
When you see that the vast majority of robots are still taught, bit by bit, the way shown above, you
get a powerful feeling: "This is the dragon!"

<figure>

  <img src="images/teaching-device.webp" width="500" alt="An assortment of mutually incompatible teach pendants"/>

  <figcaption>All sorts of mutually incompatible teach pendants.</figcaption>

</figure>
When you see how many robot companies there are in the world, each with its own assorted, mutually
incompatible programming languages and teach pendants, you get a powerful feeling: "This is the
dragon!"

<figure>

  <img src="images/chinese-factory.webp" width="500" alt="Repetitive labor on a factory assembly line"/>

  <figcaption>Repetitive labor on a factory line.</figcaption>

</figure>
When you see how many people your age and mine are still doing repetitive, dull work in factories,
you get a powerful feeling: "This is the dragon!"

Yes — in robotics, there are still plenty of dragons. And so you pick up your sword and set off
again, full of enthusiasm.

Suddenly, you realize that everything you learned before was how to slay a "**spherical dragon in a
vacuum**," and you have no idea how to slay a real one.

So you should keep learning. Go find more slimes to practice on, and put the swordsmanship you've
learned to use on a real battlefield.

Later, you run into a new problem: your old sword doesn't have "industrial-grade strength." ROS
crashes all the time, Orocos doesn't handle
[Eigen alignment](http://eigen.tuxfamily.org/dox/group__TopicStructHavingEigenMembers.html), there
are no good 3D sensors, industrial robots don't open up their low-level interfaces, and so on.

And so you realize you need to forge your own real sword from scratch.

But this isn't something you can do alone; you need a team — someone to mine the coal, someone to
smelt the steel, someone to forge, someone to sharpen the blade...

Nowadays, a new band of heroes has set out with new-style weapons — they want the sword to learn to
swing itself (yes, exactly the things discussed in the [Embodied AI](embodied-ai.md) part). The
dragons are still the same few. An extra rack of new weapons in the armory is always a good thing.
