# CSS

<link href="mystyle.css" rel="stylesheet" >

## CSS External style sheet

https://www.w3schools.com/css/css_howto.asp

<link rel="stylesheet" type="text/css" href="mystyle.css">



### CHARACTERS

* ascii character name:
	* https://www.freeformatter.com/html-entities.html#math-symbols
	* https://www.w3schools.com/charsets/ref_html_8859.asp
	* https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references >> all!
	* https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references
* http://unicode.org/emoji/charts/full-emoji-list.html
* http://www.unicode.org/charts/
* https://en.wikibooks.org/wiki/Unicode/List_of_useful_symbols


☎
©
🔃
🔭
📈
🛈  &#x2139; &#x24D8; i in circle


☰ hamburger / trigram for heaven &#9776;

🗀 &#x1f5c0;
📁 &#x1f4c1;

✎ &#9998; pencil

🖉 &#x1f589; &#128393;

new tab/external link: &#x1F5D7; 🗗  or ❐ &#x2750; or ⧉ &#x29c9;

link &#128279; 🔗 or &#x1f517;

⌂ home: &#x2302;

🕷  &#x1f577; spider
🕸 &#x1f578; spider web
recycle: &#21BB;
Currency: &pound;  &euro;
Arrows: &uArr;  &laquo; &raquo;
Arrows in circle: CCW &#8634; CW &#8635;
Dingbats &#10070; &#10087; ❦ nice: &#x2766;
❧ ❦
Hands: black: L &#x261A; R &#x261B; / White L &#x261C; U &#x261D; R &#x261E; D &#x261F; / V=sign &#x270C;
&malt;
&spades;
&xcirc;
&phone;

http://fontawesome.io/icons/

* code-cookbook/0-cookbook-general/string%20manipulation/characters-interesting.html
- see bottom for rotating characters by degrees.


## Emoji

For GitHub Pages sites built on GitHub.com, emoji images are served from the GitHub.com CDN, with a base URL of https://assets-cdn.github.com, which results in emoji image URLs like https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png.

Complete list of github markdown emoji markup
* https://gist.github.com/rxaviers/7360908 -
* https://assets-cdn.github.com/images/icons/emoji/octocat.png
* https://www.webpagefx.com/tools/emoji-cheat-sheet/

Unicode
* https://api.github.com/emojis
	* https://platform.github.community/t/add-ability-to-query-raw-text-with-unicode-emojis/4603
* https://yutannihilation.github.io/list_of_github_emojis/github_emojis.html

Compare
* https://emojipedia.org/

Purposeful

* https://github.com/dannyfritz/commit-message-emoji
* https://gist.github.com/parmentf/035de27d6ed1dce0b36a

More
https://gist.github.com/endolith/157796





## Colors

https://www.w3schools.com/colors/colors_names.asp



## CSS Docs

https://developer.mozilla.org/en-US/docs/Web/CSS/unset

css: { top: unset; }

<link href="style.css" rel="stylesheet" >

fit-content

* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference
* https://www.w3schools.com/css/default.asp


## CSS Pseudo-classes

https://www.w3schools.com/css/css_pseudo_classes.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes



## Button and Range

	body { font: 12pt monospace; margin: 0 auto; max-width: 800px; }
	a { color: crimson; text-decoration: none; }
	a:hover, a:focus { color: #f1f1f1; }


	button, input[ type=button ] { background-color: #ddd; border: none; color: #322; cursor: pointer; padding: 3px 15px; }
	button:hover { background: #ccc; color: #fff }

	input[ type=range ] { -webkit-appearance: none; -moz-appearance: none; background-color: #ddd; box-sizing: border-box; width: 100% }
	input[ type=range ]::-moz-range-thumb { background-color: #888; border-radius: 0; width: 10px; }
	input[ type=range ]::-webkit-slider-thumb { -webkit-appearance: none; background-color: #888; height: 20px; width: 10px; }


html { --mnu-back-col: lightgray; --menu-width: 250px; }

width: calc( 100% - var( --menu-width ) )

		const width = getComputedStyle(document.documentElement).getPropertyValue( '--mnu-width' );


## Blur



## CSS BORDERS

outline: none;

* https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

box model

* { box-sizing: border-box; height: 100% vertical-align: top; }

use window.clientWidth << takes scrollbar into account


border-width, border-style, and border-color.
none
hidden
dotted
dashed
solid
double
groove
ridge
inset
outset
dotted solid double dashed
dotted solid

## Center

.thing {
  display: grid;
  place-items: center;
}

http://codepen.io/shshaw/full/gEiDt
.Absolute-Center {
  width: 50%;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}



## Dark mode

* https://tombrow.com/dark-mode-website-css
* https://gosink.in/javascript-css-toggle-dark-light-theme-based-on-your-users-preferred-scheme/

:root {
	font-size: 80%;
	font-family: 'Lato', sans-serif;
	--color: #6ec071; /* #4a9d36; */
	--colorLight: #b7dfb8; /* #93cf95; hsla(79, 61%, 70%, 1); #9bcc31; */
	--background-color:  #f7f6ee; /* #f7f8f9; */
	--secondary-color: rgb(240, 250, 244);
	--mnu-width: 22rem;

}

@media (prefers-color-scheme: dark) {
	:root {
	  --background-color: #1e1f23;
	  --secondary-color: #235528;
	  --text-dark: #efefef;
	  --text: #c4c5c9;
	  --text-light: #6c6d71;
	  --text-lighter: #8e8f93;
	}
  }



## Flexbox

* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://www.w3schools.com/css/css3_flexbox.asp
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
* https://medium.freecodecamp.org/learn-css-flexbox-in-5-minutes-b941f0affc34

	.container { display: flex; }

	.container > div { border: 1px solid red; margin: 5px; padding: 10px; }


## Font-size

* em is relative to the font-size of its direct or nearest parent,
* rem is relative to the html (root) font-size.


## Font-family

Google Fonts: https://fonts.google.com/
Font Library: https://fontlibrary.org/
Adobe Edge: https://edgewebfonts.adobe.com/

<link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">

body {background-color: #ffffff; color: #555; font-family: 'inconsolata'; font-size: 15px; height: 100%;
	line-height: 18px; margin: 0px; overflow: hidden; }


## Overflow

overflow
overflow-x
overflow-y visible|hidden|scroll|auto|no-display|no-content;


## Resize

	overflow: auto;
	resize: vertical;

.iframe-resize {
	height: 400px;
	overflow: hidden;
	resize: both;
	width: 100%;
}


## Transform Scale Origin

https://www.sitepoint.com/a-primer-on-css3-transforms/

.divIframe { border: 0px solid red; height: 960px; width: 960px; transform: scale( 0.25 );
	transform-origin: 0 0; }  // or  top left instead og 0 0

## Transform Scale Origin

https://www.sitepoint.com/a-primer-on-css3-transforms/

.divIframe { border: 0px solid red; height: 960px; width: 960px; transform: scale( 0.25 );
	transform-origin: 0 0; }  // or  top left instead og 0 0

## VAR

--mnu-width: 20rem;
left: var(--mnu-width);
width: calc(100% - var(--mnu-width));


***

## CSS & JavaScript


element.getBoundingClientRect()

* https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

window.getComputedStyle()

getComputedStyle

## Variables in JavaScript

* https://www.w3schools.com/css/css3_variables.asp
* https://developer.mozilla.org/en-US/docs/Web/CSS/var
* https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
* https://stackoverflow.com/questions/36088655/accessing-a-css-custom-property-aka-css-variable-through-javascript


var bodyStyles = window.getComputedStyle(document.body);
var fooBar = bodyStyles.getPropertyValue('--foo-bar'); //get

document.body.style.setProperty('--foo-bar', newValue);//set


// setter
document.documentElement.style.setProperty('--myVariable', 'blue');

// getter
document.documentElement.style.getPropertyValue('--myVariable');

root = document.querySelector(":root");

getComputedStyle(element).getPropertyValue("--my-var");




## CSS Switch

<link rel="stylesheet" id="stylesheet" type="text/css" href="style1.css">
			<p><button onclick=stylesheet.href="style1.css"; >style 1</button></p>

			<p><button onclick=stylesheet.href="style2.css"; >style 2</button></p>

https://www.w3schools.com/w3css/w3css_color_themes.asp



## CSS load with function

function loadCss() {

	const css = document.head.appendChild( document.createElement('link') );
	css.rel = "stylesheet";
	css.href = "style.css";
	console.log( 'css', css );

}



### CSS Random Gradient Background

// height not always necessary
// IMPORTANT to check

	document.body.style.cssText += ' height: ' + window.innerHeight + 'px; ';

	function setRandomGradientBackground() {

		var col1 = Math.random().toString(16).slice(2, 8);
		var col2 = Math.random().toString(16).slice(2, 8);
		var col3 = Math.random().toString(16).slice(2, 8);
		var x = ( Math.random() * window.innerWidth ).toFixed(0);
		var y = ( Math.random() * window.innerHeight ).toFixed(0);

		document.body.style.backgroundImage = 'radial-gradient( circle farthest-corner at ' + x + 'px ' + y + 'px, #' + col1 + ' 0%, #' + col2 + ' 50%, #' + col3 + ' 100%)';

	}

	setRandomGradientBackground();


