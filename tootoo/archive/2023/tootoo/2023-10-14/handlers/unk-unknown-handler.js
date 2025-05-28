// copyright 2021 Theo Armour. MIT license.
/* global THREE, COR */
// jshint esversion: 6
// jshint loopfunc: true

UNK = {};

UNK.handle = function () {

	if ( FRX.file ) { console.log( "file", FRX.file.name ); UNK.read(); return; }

	if ( FRX.url ) { console.log( "url", FRX.url.split( "/" ).pop() ); UNK.onChange(); return; }

	if ( FRX.content ) { console.log( "zip", FRX.zipFileName ); UNK.checkLoader(); return; }

};




UNK.read = function () {

	FRX.loadLoaders( UNK, [], UNK.readFile );

};



UNK.readFile = function () {

	// const reader = new FileReader();
	// reader.onload = ( event ) => UNK.display( event.target.result );
	// reader.readAsText( FRX.file );

	const reader = new FileReader();
	reader.onload = ( event ) => UNK.displayIframe( event.target.result );
	reader.readAsDataURL( FRX.file );

};



UNK.onChange = function () {

	divMainContent.innerHTML =
		`<iframe src="${ FRX.url }" height=${ window.innerHeight } style="border:none;width:100%;" ></iframe>`;

};




UNK.checkLoader = function () {

	UNK.displayIframe();

};




UNK.displayIframe = function ( content = FRX.content ) {

	//console.log( "content", content );

	console.log( "FRX.file.type ", FRX.file.type );



	if ( FRX.file?.type?.includes( "application" ) || FRX.file?.type?.includes( "video" ) ) {

		divMainContent.innerHTML =
			`<iframe src="${ decodeURI( content ) }" height=${ window.innerHeight } style="border:none;width:100%;" ></iframe>`;

	} else {

		// wrong guess, try again

		const reader = new FileReader();
		reader.onload = () => divMainContent.innerText = reader.result;
		reader.readAsText( FRX.file );

	}

};


UNK.handle();