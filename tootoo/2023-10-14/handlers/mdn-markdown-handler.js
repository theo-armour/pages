// copyright 2021 Theo Armour. MIT license.
/* global THREE, COR */
// jshint esversion: 6
// jshint loopfunc: true

MDN = {};

MDN.src = "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js";


MDN.handle = function () {

	if ( FRX.file ) { console.log( "file", FRX.file.name ); MDN.read(); return; }

	if ( FRX.url ) { console.log( "url", FRX.url.split( "/" ).pop() ); MDN.onChange(); return; }

	if ( FRX.content ) { console.log( "zip", FRX.zipFileName ); MDN.checkLoader(); return; }

};



MDN.read = function () {

	FRX.loadLoaders( MDN, MDN.src, MDN.readFile );

};



MDN.readFile = function () {

	const reader = new FileReader();
	reader.onload = () => MDN.display( reader.result );
	reader.readAsText( FRX.file );

};



MDN.onChange = function () {

	FRX.loadLoaders( MDN, MDN.src, MDN.request );

};


MDN.checkLoader = function () {

	FRX.loadLoaders( MDN, MDN.src, MDN.display );

};



MDN.request = function ( url = FRX.url ) {

	//console.log( "url", url );

	const xhr = new XMLHttpRequest();
	FRX.addListeners( xhr );
	xhr.open( "get", FRX.url, true );
	xhr.onload = () => { MDN.display( xhr.responseText) };
	xhr.send( null );

	return xhr;

};



MDN.display = function ( content = FRX.content) {

	showdown.setFlavor( "github" );

	const options = { excludeTrailingPunctuationFromURLs: true, ghMention: true, rquestImgDimensions: true, simplifiedAutoLink: true, simpleLineBreaks: true, emoji: true, openLinksInNewWindow: true };

	const txt = content.replace( /\<!--@@@/, "" ).replace( /\@@@-->/, "" );
	const htm = new showdown.Converter( options ).makeHtml( txt );
	divMainContent.innerHTML = `
<div style="border:0px solid red; margin: 0 auto; padding: 0 1rem; max-width: 40rem;" >
${ htm }
</div>`;

	FRX.timeEnd = performance.now();

	//console.log( "FRX time load", ( FRX.timeEnd - FRX.timeStart ).toLocaleString() );


};



MDN.handle();