# Inkscape

tags #inkscape #sw #draw #svg

## Documents

* https://en.wikipedia.org/wiki/Inkscape
* https://inkscape.org/
* https://inkscape-manuals.readthedocs.io/en/latest/
	* https://gitlab.com/inkscape/inkscape-docs/manuals/blob/master/Inkscape-Beginners-Guide/source/index.rst
* Keys: https://inkscape.org/doc/keys.html
* https://inkscape-manuals.readthedocs.io/en/latest/
* http://tavmjong.free.fr/INKSCAPE/MANUAL/html/index.php

More
* https://news.ycombinator.com/item?id=31403532


## About

* Looks like most power of any of the apps
* Extensive learning curve

## Setup

Light theme: Preferences > Interface > Theming > uncheck use dark theme

Vertical pan > select Ctrl
Canvas zoom > unselect Ctrl
zoom by scroll wheel: Preferences > Interface > Keyboard > tab Modifiers > Canvas


## File Menu > Document Properties

Tip: Resize to Content

### background Opaque

* https://graphicdesign.stackexchange.com/questions/2197/how-can-i-export-as-png-without-alpha/77515#77515

> Go to Document properties → Page and click on "Background color" (bottom of popup). Adjust "alpha" there. Setting the background color to #ffffffff sets the background to white and opaque. Setting it to #000000ff creates an opaque black background.

### Front Page

US Paper
width 279.4
height 215.9

bounding box
x: 2.5mm
y: 2.5mm
w: 274?
h: 209mm

## Edit Menu

### Copying

Control-C
Ctrl-D: duplicate
Alt-D: clone

Shift + Alt + D, Edit ‣ Clone ‣ Unlink Clone or by clicking on the corresponding icon Unlink clone icon in the command bar.

To select the original of a clone, you can press Shift + D


## View Menu

Pan: scroll wheel press

### Zoom

* 1: zoom 1:1
* 2: zoom 1:2
* 3: zoom to selection
* 4: zoom to drawing
* 5: zoom to page
* 6 || Ctrl-E  zoom to page width
* Ctrl-4: center page in view (without changing zoom level)

## Path Menu

* Draw multiple paths then join the ends
  * continuous line makes copy and formatting much easier

### Stroke to Path

* Creates a new path from the edges of a path with width

### Trace Bitmap

* For vectors use > centerline tracing (autotrace)

## Filters

2022-05-18

dark glass melted rainbow ripple /  cracked glass tinted raindow daerk glass
dragee melted rainbow eroded metal
warp rainbow guache ripple metal

flex metal dragee
### Bevels

With wide path
* Bloom
* bright metal
* Dark Glass
* Electron Microscopy - layered OK
* Glowing Metal
* Matt Bevel - layered OK
* Melted Jelly - layered OK
* Melted Jelly Mat - layered OK
* Stained Glass
* Translucent

### Blur

* double

### Bumps

* Bubbly Bumps
* Thick wax

### Color

no effects with extra width

### Distort

all interesting but very strong

* Chalk and sponge

### Materials

* Enamel Jewelry
* Flex metal

### Morphology

* Cool outside

### Overlays

No width

* colorize turbulent


### Protrusions

* Ink Bleed


### Ridges

* dragge - good soft widener
* mettallized ridge

### Textures

* Bark
* Guache
* Riddled ~ warped drops

## Snap

* Button at top right
* That's it ???

* http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Snapping.html

***

Hardware

## Display Incorrect offset

* https://bugs.launchpad.net/inkscape/+bug/1188211
* https://gitlab.com/inkscape/inbox/-/issues/2429
* https://gitlab.com/inkscape/inkscape/-/issues/1892

Workaround:

* Set all displays to identical resolution * zoom
* Disable any monitors that cannot adapt to the requires settings

## Menu Issues

Menu drop-downs + tablet drawing disappears appear on the wrong screen workaround

* Always set Inkscape monitor to right of main monitor
* Move Inkscape back and forth between monitor 1 and monitor 2.
* In windows display settings, choose your top left most monitor. Mark it 'make this my main display'.
