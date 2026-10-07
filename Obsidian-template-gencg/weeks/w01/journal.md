---
title: Instructions & Systems
date: 2026-09-14
week: 1
tags:
  - instructions
  - systems
  - journal
publish: true
---

> [!important] Complete this week's exercises and reflections yourself
> Lesson 01 is a **Human-only** session: do not use generative AI to invent rules, write or debug the p5.js exercise, or write your process notes. This page is only a structure for documenting your own work.

- [Lesson 01: Instructions & Systems](https://digitalideation.github.io/gencg_h2601/lessons/lesson01_intro/)
- [Journal guidelines](https://github.com/digitalideation/gencg_h2601/blob/refactor_2026/lessons/extra/journal.md)

## Evidence checklist

Keep evidence of the process, not only the successful result.

- [ ] Original drawing or idea
- [ ] First instruction set
- [ ] First execution by another person
- [ ] Moments of confusion or ambiguity
- [ ] Revised instructions
- [ ] Second execution
- [ ] Small rule system
- [ ] Sketch or diagram of the system
- [ ] p5.js translation

<!-- Add images to ./sketches/ and embed them like this:
![[./sketches/your-file-name.jpg]]
-->

## 1. Exploration & Experimentation

### Human → Human

**Original idea**

![[b 1.jpeg]]

**First instruction set**

1.Zeichne eine diagonale Linie
2.Parallel zu dieser Linie zeichne zu ihrer rechten Seite weitere Linien. Sie sollten immer kürzer werden.
3.Nach dem letzten Strich rechts, zeichne einen Kreis
4.Links von der ersten Linie die du gezeichnet hast, zeichne ein Dreieck. Eine Seite des Dreiecks sollte parallel zur ersten Linie sein.
5.In der unteren Ecke des Dreiecks zeichne drei Kreise vertikal von klein zu gross.


**First execution**

![[WhatsApp Image 2026-09-15 at 17.43.49.jpeg]]

**Where did interpretation differ?**

- the paper was not in the same direction
- the circle is in another place
-

**Revised instructions**

1. 
2.
3.
4.
5.
6.

**Second execution**

### Human → Human

**Original idea**

![[4. Michelle 1.pdf]]

**First instruction set**

1. The paper is in horizotal position
2. In the middle of the paper there is a circle
3. Draw a line in the circle like when in a clock the big line shows 5 to
4. Draw a rectangle around the circle, it should not be much bigger than the circle 
5. In the top right corner of the rectangle there is a filled circle that covers the edge
6. Draw 8 horizontal lines under the rectangle that get smaller and under the last one draw 5 circles which get bigger
7. On the left of the rectangle draw a big triangle. In this triangle draw 3 more triangle that get smaller


**First execution**

![[5. Lösung Phariya 1.pdf]]

**Where did interpretation differ?**

- the position of the triangles was not clearly definded

### Small rule system

- **Starting condition:**
- **Action:**
- **Relationship:**
- **Variation:**
- **Constraint:**
- **Stopping rule:**

<!-- Add a sketch or diagram of the system. -->

### Human → Computer
![[Pasted image 20260922172904.png]]
What did a human understand automatically that the computer needed you to specify?

- the clock referense could not be used for the js I had to work with angles
-

```js
// Add your own p5.js translation here.function setup() {

  createCanvas(windowHeight, windowHeight/2)

}

  

function draw() {

  background(244, 243, 239)

  noFill();

  circle(width/2, height/2, 100)

  rectMode(CENTER);

  

  rect(width/2, height/2, 150)

  fill(0);

  circle(width/2 + 75, height/2 - 75, 30)

  noFill();

  triangle(width/2-80, height/2 + 75, 10, height/2 + 75, 10, 10);

  let x1 = width/2;

  let y1 = height/2;

  let angle = PI*1.65;

  let len = 45;

  

  // Calculate end coordinates

  let x2 = x1 + cos(angle) * len;

  let y2 = y1 + sin(angle) * len;

  line(x1, y1, x2, y2);

  
  

  let l1 = width/2-70;

  let g1 = height/2 + 90;

  line(l1, g1,l1 + 140, g1)

}

  

function windowResized() {

  resizeCanvas(windowWidth, windowHeight)

}
```

**Parameters tested**

| Parameter | Values tried | What changed |
| --------- | ------------ | ------------ |
|           |              |              |
|           |              |              |

**Technical challenges or failed attempts**

- The lines under the rectangle are gettting smaller but are getting smaller from the middle point of the line. I was not able to do that without mathematics as i have to define the first point and the las point of a line and can't say from middle point 20 in one direction an 20 in the other direction

## 2. Influences & References

Choose at least one work, artist, or idea from the lesson or your own research.

- **Artist / work:**
- **Link or citation:**
- **What I noticed:**
- **How it connects to my experiment:**

Possible starting points from the lesson include Sol LeWitt, Conditional Design, George Brecht, Alison Knowles, and Yoko Ono.

## 3. Algorithmic Thinking

**What stays fixed?**

-

**What can vary?**

-

**Describe the system in plain language or pseudocode**

```text
START

ADD YOUR RULES HERE

STOP WHEN ...
```

**How do the rules produce the visual result?**

<!-- Explain the relationship between your instructions and the outcome. -->

## 4. Critical Reflection

- One thing my executor interpreted differently was...
- One rule I changed was...
- One ambiguity I decided to keep was...
- One thing I had to make explicit for the computer was...
- What worked or surprised me?
- What did not work, and why?
- What would I explore next?

## Next steps

- [ ] Save all drawings and outputs
- [ ] Check that images and links work
- [ ] Choose one question to carry into Week 2
