
# REGEXP

tags #regex

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
* http://www.w3schools.com/jsref/jsref_obj_regexp.asp
* http://www.w3schools.com/jsref/jsref_replace.asp


## Match | Replace
>>> /xxx(.*?)xxx/gi

* (.*?) Parenthesis matches anything in between
* ? = match not remembered
* ? = first match and not greedy match

Notes
* May need to have a backslash: \(.*?)
* choose g for global correctly

.match( /<h1(.*?)>(.*?)<\/h1>/ )

stringWithQuotes.replace(/["']/g, "");

>MNU.files = MNU.tableOfContents.replace( /(.*)\((.*)\)(.*)/gi, '$2' ).split( '\n' );

## Modifiers

RegExp Modifiers
[0-9] replace class of number

/i ~ case insensitive
/g ~ global/greedy
/m ~ multiline

\'' single quote
\"" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f form


(x) Matches 'x' and remembers the match, as the following example shows. The parentheses are called capturing parentheses.

***

## remove double line breaks

* https://stackoverflow.com/questions/10965433/regex-replace-multi-line-breaks-with-single-in-javascript
* https://stackoverflow.com/questions/22962220/remove-multiple-line-breaks-n-in-javascript

text.replace(/\n\s*\n/g, '\n');
text.replace(/\n\s*\n\s*\n/g, '\n\n');
myText = myText.replace(/\n{2,}/g, '\n');​​​​​​​
text.replace(/[\r\n]{4,}/g, "\n\n\n");

## Using variables

``` JavaScript

		fileName = heightMap.src.split( '/' ).pop().toLowerCase();
		var extension = fileName.split( '.' ).pop().toLowerCase();

SEE spider / gbxml viewer / assets / get read me files

function parseFile( text, pattern ){

		const regex = new RegExp( `${ inpString.value }`, "gim" );
		const matches = text.match( regex );

		const regex = new RegExp( pattern, "gim" );
		match = regex.exec( text );
		//console.log( 'match', match );


		if ( match && match.length ) {

			//divContents.innerText += match[ 0 ].slice( match[ 0 ].indexOf( '\n'), -3 );
			divContents.innerText += '\n' + match[ 0 ].slice( 4, -3 );

		}

}


		list = ["South", "North", "Ciudad", "City", "The", "Federat", "Avtonomn", "Misto",
		"Hlavní", "And", "Republika", "Ascension", "Village", "Grad", "And", "British", "Mourne", "Banbridge", "Antártida" ];

		for ( let word of list ) {

			const str = `, (${word })`;
			const re = new RegExp( str, "g" );
			console.log( "re", re );
			response = response.replace( re, "- $1" );

		}
```


## File extension

// Shortcuts

		fileName = heightMap.src.split( '/' ).pop().toLowerCase();
		var extension = fileName.split( '.' ).pop().toLowerCase();

SEE spider / gbxml viewer / assets / get read me files

* https://stackoverflow.com/questions/6582171/javascript-regex-for-matching-extracting-file-extension

?? const name = FSB.fileName.replace( /\.[0-9a-z]+$/i, ".zip" );
