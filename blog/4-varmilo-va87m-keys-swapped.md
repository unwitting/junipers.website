---
title: Ctrl and Caps Lock or Win and Fn keys on Varmilo VA87M keyboard swapped
date: 2025-01-01
---

This is a very short guide to fixing behaviour with that seems to happen occasionally in the Varmilo VA87M keyboard.

This might or might not help with other Varmilo keyboards experiencing similar difficulties: I'm not sure. Sorry!

## The problem

If you are running Windows (I'm on Windows 10) and any of the following is happening to you:

* Caps Lock and left Ctrl seem to be swapped: when you press left Ctrl, it toggles the Caps Lock light
* Your Win key doesn't seem to work (eg to open the Start menu)
* Your Fn and Win key seem to be swapped

then you may be experiencing the same problem I was.

## The solution

There are no drivers to download and install for this keyboard, so that isn't the way to go. Instead, we deal with internal state held in the keyboard's electronics.

1. Put the keyboard back to factory defaults by pressing and holding **Fn** and **Escape** for three seconds, until the Caps Lock light flashes a few times.
    1. If that _didn't_ make the lights flash, then it'll be because your Fn key is not where it should be. It's likely where your left Win key is: try holding **left Win** and **Escape** for three seconds instead.
    2. If even that doesn't work, then I don't know where your Fn key has ended up: try holding various keys and Escape for a few seconds each until you successfully manage a reset.
2. Hold **Fn** and **A** for three seconds, until the Caps Lock light flashes a few more times.

Everything should now be back to working as expected.

## What did I just do?

First, you reset the keyboard to default settings.

Then, you put it into the right mode. In theory, the keyboard can operate in "Windows mode" and "Mac mode". However, I've found that "Mac mode" seems to be the one we want for Windows... To try "Windows mode", hold **Fn** and **W** (instead of **A**) in step 2. Like I say, this is the wrong layout for me on windows but if "Mac mode" doesn't work well it might be worth a try.
