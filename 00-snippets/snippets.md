## Snippets

// copyright 2023 Theo Armour. MIT license.
/* global COR, main, divMainContent, showdown */
// jshint esversion: 6
// jshint loopfunc: true

Unicode Character “≡” (U+2261) https://www.compart.com/en/unicode/U+2261

## Summary

<details>
<summary>Summary</summary>

* Conceptualizing random endpoints 
* Document-centric projections.

</details>

## Range

``` JavaScript
<label title="do it"> Slider / Range <output id=out >50</output>
	<input [ type=range ] id=rng oninput=outInp.value=value;>
</label>
```

## info

``` JavaScript

<span class="info"><img class=infoImg height=30px
		src="https://pushme-pullyou.github.io/assets/svg/noun_Information_585560.svg">
	<span class="infoTooltip gmd-5">
		Howdy! test test test test test abc 123
	</span>
</span>
```

## Request File

``` JavaScript
function requestFile ( url = "https://theo-armour.github.io/", callback = onLoad ) {

	xhr = new XMLHttpRequest();
	xhr.open( "GET", url, true );
	xhr.responseType = "text";
	xhr.onerror = ( xhr ) => console.log( "error:", xhr );
	//xhr.onprogress = ( xhr ) => console.log( "bytes loaded:", xhr.loaded );
	xhr.onload = ( xhr ) => callback( xhr.target.response );
	xhr.send( null );

}



function onLoad ( response ) {

	console.log( "response", response );

	divContent.innerText = response;

}

```

## History

``` JavaScript
if ( location.protocol === "https:" ) {

 window.history.pushState( "", "", "./" + location.hash );

}

```

## aDingbat

```
.aDingbat {
	text-decoration: none;
	font-size: 2rem;
}
```

***


<center title="Hello! Click me to go up to the top" ><a class=aDingbat href=javascript:window.scrollTo(0,0);> ❦ </a></center>
