---
title: Issues with Yamaha PSR-EW310 keyboard sustain pedal MIDI
date: 2023-07-22
---

This is a very short guide to fixing a very annoying bug with the way that some Yamaha keyboards handle (or rather, don't handle) the MIDI data representing an attached sustain pedal.

My keyboard is a Yamaha PSR-EW310, but I'm aware that this issue affects other models, including the Yamaha PSR-E373.

Everything I'm going to write here, I learned from this video: [Yamaha PSR-E373: Fix For Sustain Pedal Issues With MIDI](https://www.youtube.com/watch?v=OJA36845n_Q) by _Piano Tone_. I'm just putting here in text form to add a bit of SEO for anybody searching for a solution like I was a week or so ago.

## The problem

If you've tried to hook your keyboard up to a DAW like GarageBand on your iPad or Macbook via USB, you might have noticed that while it works when you press the keys, the sustain pedal doesn't seem to register correctly. For me, it simply didn't sustain in the DAW.

As it turns out, the keyboard _is_ sending some data when you press the pedal, but it appears to be sending the "pedal down" signal followed almost immediately by the "pedal up", so the software doesn't register the pedal correctly.

But there is a workaround!

The keyboard can be made to properly handle the sustain pedal signals, but only when it's in a slightly different mode from the default.

## The solution

The following are instructions specific to the PSR-EW310, but you can likely follow along if you have a similar Yamaha model (and maybe its manual nearby).

1. Open the keyboard's functions menu by pressing the grey _FUNCTION_ button.
2. Keep pressing the _FUNCTION_ button until you get to function number _048: DuoMode_.
3. Press the grey _YES / +_ button to turn "duo mode" on.
4. Keep pressing the _FUNCTION_ button until you get to function number _053: DuoROct_.
5. Press the grey _YES / +_ button until the setting is _0_ (it would have defaulted to _-1_).
6. Keep pressing the _FUNCTION_ button until you get to function number _054: DuoLOct_.
7. Press the grey _N0 / -_ button until the setting is _0_ (it would have defaulted to _2_).
8. Keep pressing the _FUNCTION_ button until you get to function number _055: DuoMode_.
9. Press the grey _YES / +_ or _N0 / -_ buttons until the setting is _1 Balance_.

That should do it!

Annoyingly, when you restart your keyboard it will forget all of these settings and revert them all to default, so here's how to save the settings to a preset so that you can reload them in future.

1. Hold the _REGIST MEMORY_ button until _MemNo.?_ appears on the screen.
2. Press whichever number you want from _1-9_: this will be the memory slot you save the settings to.
3. When you see _OverWr?_ on the screen, press the grey _YES_ button.

You've now saved the full set of changes you made under that number.

When you reload your keyboard, do the following to apply all those settings again:

1. Press (don't hold) the _REGIST MEMORY_ button.
2. When you see _LoadNo.?_ on screen, press the number you saved to before.

## What did I just do?

You put the keyboard into "duo mode". This is a mode meant for two people to play at the keyboard at the same time, sitting side by side. For some reason, the keyboard correctly handles sending the pedal data over USB when in duo mode but not in its default mode.

Normally, it splits the keyboard down the middle (around middle C I think). The left is one player's, and the right is the other's. However, the pitch is also changed: the left side is raised by two octaves and the right is lowered by one. This is so that one player doesn't have a very low set of notes available and one only high.

When you set the _DuoROct_ and _DuoLOct_ to _0_, you made it so that neither side is altered. The keyboard effectively acts as it does as standard, though internally it thinks it's separated into two halves still.

Finally, you set the "duo mode" to balanced, which affects where the sound comes from: in duo mode we sometimes get the left side of the keyboard coming from only the left stereo speaker, and vice versa on the right. Balanced forces it to come out of both speakers evenly.
