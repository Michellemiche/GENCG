---
title: Experiment 02
date: 2026-09-14
week: 1
tags:
  - image
  - prompting
  - experiment
publish: true
---

## Notes

The journal foundation is in place. Markdown remains comfortable to edit in Obsidian, while experiments can stay in self-contained folders.

Lesson - Change Over Time

My goal was to create a drawing of a spiral which displays one minute as an abstract clock.

let winkel = 0;
let radius = 0;
let startZeit;

let startX;
let startY;

function setup() {
  createCanvas(400, 400);

  startX = random(50, 350);
  startY = random(50, 350);

  startZeit = millis();
  background(0);
}

function draw() {
  fill(0, 0, 0, 5);
  rect(0, 0, width, height);
  // Nach 10 Sekunden neue Spirale
  if (millis() - startZeit >= 60000) {


    winkel = 0;
    radius = 0;

    // Neuer zufälliger Startpunkt
    startX = random(50, 350);
    startY = random(50, 350);

    startZeit = millis();
  }

  let x = startX + cos(winkel) * radius;
  let y = startY + sin(winkel) * radius;

  fill(255);
  noStroke();
  circle(x, y, 5);

  winkel += 0.03;
  radius += 0.08;
}
![[Bildschirmfoto 2026-09-29 um 17.30.38.png]]



As longer as the time passes, the less we can see the spiral
![[Bildschirmfoto 2026-09-29 um 17.29.48.png]]

## Reflection

at some point we can't see what the code is doing so maybe working with colors could help seeing it. Makin a spiral was a little bit challenging but fun :)
