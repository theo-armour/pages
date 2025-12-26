// copyright 2021 Theo Armour. MIT license.
/* global THREE, COR */
// jshint esversion: 6
// jshint loopfunc: true

IMG = {};


IMG.handle = function () {

	if ( FRX.file ) { console.log( "file", FRX.file.name ); IMG.read(); return; }

	if ( FRX.url ) { console.log( "url", FRX.url.split( "/" ).pop() ); IMG.onChange(); return; }

	if ( FRX.content ) { console.log( "zip", FRX.zipFileName ); IMG.checkLoader(); return; }

};



IMG.read = function () {

	IMG.readFile();

};



IMG.readFile = function () {

	const reader = new FileReader();
	reader.onload = () => IMG.display( reader.result );
	reader.readAsDataURL( FRX.file );

};



IMG.onChange = function () {

	IMG.display();

};


IMG.checkLoader = function () {

	//IMG.display( FRX.content );

	console.log( "FRX.content", FRX.content );

	const imageURL = window.URL.createObjectURL( FRX.content );
	divMainContent.innerHTML =
		`<a href=${ FRX.url } title="Open this image in a new window" target="_blank" >
		<img src=${ imageURL } style=max-width:100% >
	</a>`;

};



IMG.display = function ( url = FRX.url ) {

	console.log( "FRX.url", FRX.url );

	divMainContent.innerHTML =
		`<a href=${ FRX.url } title="Open this image in a new window" target="_blank" >
		<img src="${ decodeURI( url ) }" style=max-width:100% >
	</a>`;

};



IMG.handle();