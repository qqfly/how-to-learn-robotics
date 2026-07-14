# Advanced

By now you're a pretty decent robotics engineer. But if you want to go into R&D, you'll need to
pick up more specialized material. This part ties much more closely to your particular research
direction, so I can't spell it all out one piece at a time — I can only sketch the route for
you.

I'd also strongly suggest getting a copy of the *Springer Handbook of Robotics*<sup>[3]</sup>.
When you step into a new area, find the relevant chapter in the Handbook, use it to get the
basic outline, and use the references it provides to fill in the gaps quickly.

### Three main threads

Let me first make the scope of this part clear. If the introductory part was about the
traditional "teach-and-playback" arm — how to get a robot moving, and moving well — then the
advanced part is about giving the robot some capacity for autonomous decision-making, so it can
cope with a changing environment: **perception-based planning and control** (what the industry
here calls 规控, "plan-and-control"). It's organized around three main threads, one chapter
each:

- **The mathematical language** — [Modern Robotics](modern-robotics.md): the space of
  orientations and poses is not Euclidean; the language of screws, the product of exponentials,
  and groups clears up the questions the introductory part left open, all at once, and hands
  you two handy weapons (orientation interpolation and constraint-space construction);
- **Perception** — [3D Vision](3d-vision.md): connecting the "see → locate → act" chain, with
  the focus on calibration and pose estimation, ending on a closed-loop visual-servoing case
  study;
- **Decision-making** — [Autonomous Planning](motion-planning.md): moving from teaching to
  autonomy — configuration space, the map of algorithms, planning under constraints, and the
  reality of getting a planner onto the production line.

The closing [Advanced Practice](advanced-practice.md) chapter pairs these three with a
hands-on checklist. The three chapters can be read in order, or dipped into as needed.
