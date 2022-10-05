﻿



It’s much easier to recover from no abstraction than the wrong abstraction

From Quick Tip: What Are Factory Functions in JavaScript
https://www.sitepoint.com/factory-functions-javascript/

## THINGS to look at

http://www.html5rocks.com/en/tutorials/webcomponents/imports/
http://www.w3schools.com/howto/howto_js_animate.asp



## HTML

*  https://www.w3schools.com/tags/default.asp

### Article

* https://www.smashingmagazine.com/2020/01/html5-article-section/
* Same site: https://news.ycombinator.com/item?id=26032896

### Audio

<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>


## BASE

* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
* https://stackoverflow.com/questions/3494954/how-do-i-set-a-pages-base-href-in-javascript
* It all gets too complicated if you are using location.hash = so true

	<base href="http://www.example.com/">
	<base target="_blank" href="http://www.example.com/">


## Canvas

* https://www.w3schools.com/html/html5_canvas.asp
* https://www.w3schools.com/graphics/canvas_reference.asp
* https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas




### Cite

<cite>The Scream</cite>

### datalist

<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>

### DETAILS

outline: none;

<details ontoggle=doIt(); open >
  <summary>Copyright 1999-2014.</summary>
  <p> - by Refsnes Data. All Rights Reserved.</p>
  <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
</details>



### DIV Resize


div {
	resize: both;
	overflow: auto;
}


### Figure

* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
* https://www.w3schools.com/tags/tag_figure.asp


<figure>
  <img src="../html/pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>


### KBD

<em>Emphasized text</em><br>
<strong>Strong text</strong><br>
<code>A piece of computer code</code><br>
<samp>Sample output from a computer program</samp><br>
<kbd>Keyboard input</kbd><br>
<var>Variable</var>



### FORM

- see also Textarea

<input type="text" id="inp" onclick=this.select(); placeholder="Display name" size=20 />

<button onclick="" size="400">Toggle Play/Pause</button>

<input type="button" id="button" name="button1" value="Display button name" size="400" />

<input type="checkbox" id="check" checked>  // checked="checked"
var check = document.getElementById('check');
if ( check.checked ) { doIt(); }

// http://www.w3schools.com/jsref/dom_obj_fileupload.asp

		<input type="file" id="fname" name="file" value="File" />
		<input type="file" id="myFile" multiple size="50" onchange="myFunction()" >

		<input type="radio" onchange="selectCity(this.id);" name="city" id="geneva">Geneva<br>
		<input type="radio" onchange="selectCity(this.id);" name="city" id="san-francisco" checked>San Francisco<br>
		<input type="radio" onchange="selectCity(this.id);" name="city" id="zurich">Zurich

		<input title="Set the " style="width: 200px;" type="range" min="0" max="500" onchange="" step="50" value="300" >
		<input type=number id=inpNum style=width:50px; min=0.01 max=1.0 step=0.05 value=0.5 />



### FORM Type=Range

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
// http://danielstern.ca/range.css/#/

Use oninput: handles both mouse and touch

	<label title="hi there">Do you like peas?
		<output id=out ></output>
		<input type="range" id=inp name="inp" oninput=out.value=this.value style=width:300px >
	</label>

		'<input type="range" id="rangeinput" value="50" onmousemove="rangevalue.value=value"/> '  +
		'<output id="rangevalue">50</output><br>' +

	input[ type = range ] { -webkit-appearance: none; -moz-appearance: none; background-color: #ddd; width: 100%; }
	input[ type = range ]::-moz-range-thumb { background-color: #888; border-radius: 0; width: 10px; }
	input[ type = range ]::-webkit-slider-thumb { -webkit-appearance: none; background-color: #888; height: 20px; width: 10px; }


	input[type=range] { -webkit-appearance: none; background-color: #ddd; width: 100%; }
	input[type=range]::-moz-range-thumb { background-color: #888; border-radius: 0; width: 10px; }
	input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; background-color: #888; height: 20px; width: 10px; }


	.floatright { float: right; }

		'<output id=outRange >5</output><br>' +
		'<input type=range id=inpRange min=0 max=10 step=1 value=5 oninput=outRange.value=value; /> '  +

		<p title='howdy' >
			title <output id=outRange class=floatRight >5</output>
			<input type=range id=inpRange min=0 max=10 step=1 value=5 oninput=outRange.value=value; />


### valueAsNumber

https://www.w3.org/TR/2011/WD-html5-20110525/common-input-element-attributes.html#dom-input-valueasnumber


Still not working in Edge maybe. Use parseFloat... or +


### Range stepUp / stepDown

// Where is there a good use example?

https://www.w3schools.com/jsref/met_range_stepup.asp
https://www.w3schools.com/jsref/met_range_stepdown.asp


### FORM SELECT

// http://www.w3schools.com/jsref/met_select_add.asp << add by code!

<select onchange="" title="select the filed that the colors indicate" size=5  >
	<option selected>aaa aaa aaa</option>
	<option>bbb bbb</option>
	<option>cc cc cc cc</option>
	<option>ddddddd</option>
	<option>eee eee eee eee</option>
</select>


### ICONS

* https://commons.wikimedia.org/wiki/Category:Icons_by_subject < hundreds available
* https://github.com/icons8/flat-color-icons/tree/master/svg
* See also mindmap readme


### IFRAME

align			Sets or returns the value of the align attribute in an iframe
contentDocument	Returns the document object generated by a frame/iframe
contentWindow	Returns the window object generated by a frame/iframe
frameBorder		Sets or returns the value of the frameborder attribute in a frame/iframe
height			Sets or returns the value of the height attribute in an iframe
longDesc		Sets or returns the value of the longdesc attribute in a frame/iframe
marginHeight	Sets or returns the value of the marginheight attribute in a frame/iframe
marginWidth		Sets or returns the value of the marginwidth attribute in a frame/iframe
name			Sets or returns the value of the name attribute in a frame/iframe
noResize		Sets or returns the value of the noresize attribute in a frame
scrolling		Sets or returns the value of the scrolling attribute in a frame/iframe	NOT working
src				Sets or returns the value of the src attribute in a frame/iframe
srcdoc
width			Sets or returns the value of the width attribute in an iframe

http://www.w3schools.com/tags/att_iframe_sandbox.asp

sandbox = 'allow-scripts'

onload

		ifrThree.contentWindow.location.reload(); // true forces all assets to reload



### IMG Images IMG

Random image

* https://commons.wikimedia.org/wiki/Special:Random/Image
* https://picsum.photos/
* https://medium.com/quick-code/how-to-quickly-generate-a-random-gallery-of-images-from-an-unsplash-collection-in-javascript-4ddb2a6a4faf
* https://unsplash.com/


### INPUT type SEARCH

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search

### LABEL

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label

<div class="preference">
	<label for="cheese">Do you like cheese?</label>
	<input type="checkbox" name="cheese" id="cheese">
</div>

<div class="preference">
	<label for="peas">Do you like peas?</label>
	<input type="checkbox" name="peas" id="peas">
</div>

<label>Do you like peas?
  <input type="checkbox" name="peas">
</label>


<label>Do you like peas?
  <input type="radio" name="type"> big
</label>

<label>Do you like peas?
  <input type="radio" name="type"> small
</label>


<label>Do you like peas?
<output>
  <input type="range" >
</label>


### <main>, <header>, <footer> and <nav>


### Mark

<p>Do not forget to buy <mark>milk</mark> today.</p>


### META

<meta http-equiv="refresh" content="3" >
<meta http-equiv="refresh" content="0;url=http://jaanga.github.com/blode/we-have-callbacks/index.html" />
<!-- but why? -->
<meta name='viewport' content='width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0' >

<meta name=viewport content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui' >


### Output

<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0
<input type="range" id="a" value="50">100
+<input type="number" id="b" value="50">
=<output name="x" for="a b"></output>


### Picture

<picture>
  <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width: 465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>


### Template


### TEXTAREA


<textarea id=textArea cols=30 rows=5 placeholder="Stuff" >
		'Iteration system wide engenders economies of scale, cross-media technology, presentation action items and life cycle replication.'
</textarea>


### Time

<time datetime="2008-02-14 20:00">Valentines day</time>



### Video

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>