// copyright 2022 Theo Armour. MIT license.
/* global COR, MNU, GRVdivDetails, GRVdivFolders, GRVdivGitHubRepoTreeView, divPopUp, navMenu */
// jshint esversion: 6
// jshint loopfunc: true

const GRV = {};

GRV.info = `
Right-click folder names to bring up the context menu to open and close multiple folders.<br>
<br>
File: grv-github-repo-tree-view.js<br>
Name space: GRV<br>
Release: 2022-10-16<br>
<button onclick=GRV.test()>Testing: view all files in this repository</button>
<button onclick=GRV.getRepos() > get Repo new</button >`;

GRV.intro = `
<p>This menu displays a tree view of all folders and files in the selected GitHub repository.</p>
`;
GRV.menuAll = "Display all the folders and files in the repository";
GRV.menuCurated = "Display curated list of folders and files";

GRV.getFiles = GRV.getFilesAll;


GRV.init = function () {

	COR.ignoreFolders = COR.defaultIgnoreFolders.slice() || [];

	GRV.getFiles = COR.filesAll === true ? GRV.getFilesAll : GRV.getFilesCurated;
	GRV.getMenu = COR.filesAll === true ? GRV.menuCurated : GRV.menuAll;

	GRV.urlApi = `https://api.github.com/repos/${ COR.user }/${ COR.repo }/git/trees/${ COR.branch }?recursive=1`;
	GRV.urlSource = `https://github.com/${ COR.user }/${ COR.repo }/tree/${ COR.branch }/`;

	GRV.accessToken = localStorage.getItem( 'githubAccessToken' ) || "";

	//GRV.base = "https://api.github.com/repos/pushme-pullyou/tootoo-2022/contents/",

	GRV.links = undefined;


	const htm = `
<details id=GRVdet>

	<summary id=GRVsumRepo class="summary-primary gmd-1" title="View selected items">
		<span id=GRVsumTitle >${ COR.repo } folders & files</span>
		${ MNU.addInfoBox( GRV.info ) || "" }
	</summary>

	<div class=divNavResize>

	<div id=GRVdivIntro >${ GRV.intro }</div>

		<div id=GRVdivGitHubRepoTreeView></div>

		<p><button id=GRVbutMenu onclick=GRV.toggleMenu() >${ GRV.getMenu }</button></p>

	</div>

</details>`;

	if ( !window.GRVdivDetails ) {

		GRVdivDetails = MNUdivContent.appendChild( document.createElement( 'div' ) );

	}

	GRVdivDetails.innerHTML = htm;

	GRV.getRepo();
};



GRV.getRepo = function () {

	GRV.requestFile( GRV.urlApi, GRV.onLoadTree );

};



GRV.toggleMenu = function () {

	if ( !GRVbutMenu.innerText.includes( "curated" ) ) {

		GRVbutMenu.innerHTML = GRV.menuCurated;
		GRV.getFiles = GRV.getFilesAll;
		COR.ignoreFolders = [];


	} else {

		GRVbutMenu.innerHTML = GRV.menuAll;
		GRV.getFiles = GRV.getFilesCurated;
		COR.ignoreFolders = COR.defaultIgnoreFolders;
	}

	//console.log( "", GRV.getFiles );

	GRV.getRepo();

};



GRV.requestFile = function ( url = GRV.urlApi, callback = GRV.onLoadTree ) {

	//"https://api.github.com/repos/heritage-happenings/heritage-happenings.github.io/git/trees/master?recursive=1";

	const xhr = new XMLHttpRequest();
	xhr.open( "GET", url, true );
	if ( GRV.accessToken ) {

		xhr.setRequestHeader( "Authorization", "token " + GRV.accessToken );

	}
	xhr.responseType = "json";
	xhr.onerror = ( xhr ) => console.log( "error:", xhr );
	//xhr.onprogress = ( xhr ) => console.log( "bytes loaded:", xhr.loaded );
	xhr.onload = ( xhr ) => callback( xhr.target.response );
	xhr.send( null );

};



GRV.onLoadTree = function ( json ) {
	//console.log( "json", json );

	const tree = json.tree.slice();

	const subtrees = tree.filter( item => item.type === "tree" )
		.map( subtree => subtree.path.split( "/" ) );

	const folders = [];

	for ( let path of subtrees ) {

		let count = 0;

		for ( let ignore of COR.ignoreFolders ) {

			if ( path[ 0 ] === ignore ) { count++; }

		}

		if ( count === 0 ) { folders.push( path ); }

	}

	const files = tree.filter( obj => obj.type === "blob" ).map( subtree => subtree.path );

	GRV.files = files;

	const htm = `
	<div id=GRVdivFolders >
		<!-- <p>Use right-click menu to open or close all folders</p> -->
		${ GRV.subtreesToDetails( folders, files ).join( "" ) }
	</div>`;

	let filesRoot;

	if ( GRV.getFiles === GRV.getFilesCurated ) {

		filesRoot = files
			.filter( file => !file.includes( "/" ) )
			.filter( file => !COR.ignoreFiles.includes( file ) )
			.filter( file => COR.filterFiles.includes( file.split( "." ).pop().toLowerCase() ) )
			.map( ( item, i ) => `
				<div class=GRVdiv >
					<a href="#${ item }" >
					${ item
					.split( "." )
					.shift()
					.split( "-" )
					.filter( x => x.length > 0 )
					.map( x => ( x.charAt( 0 ).toUpperCase() + x.slice( 1 ) ) )
					.join( " " ) }
					</a>
				</div>`);

		//.replace( /-/g, " " ) }</a>

	} else {

		filesRoot = files
			.filter( file => !file.includes( "/" ) )
			//.filter( file => file.endsWith( ".md" ) )
			//.filter( file => COR.filterFiles.includes( file.split( "." ).pop().toLowerCase() ) )
			.map( ( item, i ) => `
		<div class=GRVdiv >
			<a href="${ GRV.urlSource }${ item }" title="Source code on GitHub. Edit me!" target="_blank" >
			${ COR.iconGitHub }</a>
			<a href="#${ item }" >${ item.split( "/" ).pop() }</a>
			<a href="readme.html#${ COR.pathContent }${ item }" title="Link to just this file. Open file in new tab." target="_blank" >
			${ COR.iconExternalFile }</a>
		</div>`);

	}

	//<a href="notesy.html#${ GRV.base }${ item }" title="Link to just this file. Open file in new tab." target="_blank" >

	GRVdivGitHubRepoTreeView.innerHTML = filesRoot.join( "" ) + htm;

	window.addEventListener( "hashchange", GRV.onHashChange, false );

	//GRVdivFolders.addEventListener( "contextmenu", GRV.onContextMenu );

	GRV.onHashChange();

};



GRV.onHashChange = function () {

	//console.log( "grv hash", 23, GRV.links );

	if ( !GRV.links ) {

		GRV.links = Array.from( GRVdivGitHubRepoTreeView.querySelectorAll( "a" ) );

	}

	GRV.links.forEach( link => link.parentNode.classList.remove( "highlight" ) );

	const fileName = location.hash ? location.hash.slice( 1 ) : COR.defaultFile;
	//console.log( "fileName", fileName );

	item = GRV.links.find( a => a.getAttribute( "href" ).includes( fileName ) );
	//console.log( "item", item );

	if ( item ) {

		item.parentNode.classList.add( "highlight" );

		let parentNode = item.parentNode;

		while ( parentNode && parentNode.id !== "detNavMenu" ) {
			//console.log( "parentNode",  parentNode );

			parentNode.open = true;

			parentNode = parentNode.parentNode;

		}

		if ( !fileName.includes( "README" ) && fileName !== COR.defaultFile ) {

			item.scrollIntoView();

		}

	}

};



GRV.subtreesToDetails = function ( subtrees, files ) {
	//console.log( "subtrees", subtrees );
	//console.log( "files", files );

	let lengthSlicePrevious = 0;

	const htmArr = subtrees.map( ( subtree, index ) => {
		//let closer = "</details>";
		let closer = "";

		// WIP
		// const arr = subtree.split( "/" );
		// const subtreeTitle = arr.pop();
		// const subtreeSlice = arr;
		//const subtreeSliceJson = JSON.stringify( subtreeSlice );

		const subtreeTitle = subtree.slice( -1 )[0].split( "-" )
			.filter( x => x.length > 0 )
			.map( x => ( x.charAt( 0 ).toUpperCase() + x.slice( 1 ) ) )
			.join( " " );

		const subtreeSlice = subtree.slice( 0, -1 );
		//const subtreeSliceJson = JSON.stringify( subtreeSlice );

		if ( subtreeSlice.length === lengthSlicePrevious ) {
			closer = "</details>";
			//console.log( "len same", subtreeSlice   );
		}

		if ( subtreeSlice.length < lengthSlicePrevious ) {
			const diff = lengthSlicePrevious - subtreeSlice.length + 1;
			closer = Array( diff ).fill( "</details>" ).join( "" );
			//console.log( "len shorter", subtreeTitle, diff, subtreeSlice, subtreeSlice.length, lengthSlicePrevious );
		}

		lengthSlicePrevious = subtreeSlice.length;

		//console.log( "lengthSlicePrevious", lengthSlicePrevious );

		const GRVclass = lengthSlicePrevious !== 0 ? "summary-tertiary" : "summary-secondary";
		const filesHtm = GRV.getFiles( subtree, files );

		const detOpen = "";

		return `
		${ closer }
		<details id=GRVdet${ index } class="GRVdet" onToggle = GRV.onDetToggle("${ subtreeTitle }") ${ detOpen }>
			<summary class=${ GRVclass } >${ subtreeTitle }</summary>
			${ filesHtm.join( "" ) }
		`;
	} );

	return htmArr;
};



GRV.onDetToggle = function ( title ) {
	//console.log( "title", title );
	//console.log( "hash", location.hash );

	if ( !location.hash.includes( title ) ) {

		const readme = GRV.files.find( file => file.endsWith( title + "/README.md" ) );

		if ( readme ) { location.hash = readme; }

	}

};



GRV.getFilesAll = function ( subtree, files ) {
	//console.log( "files", files );
	//console.log( "subtree", subtree );

	const str = subtree.join( "/" );

	const filtered = files
		.filter( file => file.slice( 0, file.lastIndexOf( "/" ) ) === str )
		//.filter( file => !COR.ignoreFiles.includes( file.split( "/" ).pop().toLowerCase() ) )
		.map( item => `
		<div class=GRVdiv>
			<a href="${ GRV.urlSource }${ item }" title="Source code on GitHub" target="_blank" >
			${ COR.iconGitHub }</a>
			<a href="#${ item }" title="">${ item.split( "/" ).pop() }</a>
			<a href="readme.html#${ COR.pathContent }${ item }" title="Open file in new tab"  target="_blank" >
			${ COR.iconExternalFile }</a>
			</div>`);

	return filtered;
};

//			<a href="notesy.html#${ GRV.base }${ item }" title="Open file in new tab"  target="_blank" >

GRV.getFilesCurated = function ( subtree, files ) {
	// console.log( "subtree", subtree );
	//console.log( "files curated", files );

	const str = subtree.join( "/" );

	//console.log( "str", str );

	const filtered = files
		.filter( file => file.slice( 0, file.lastIndexOf( "/" ) ) === str )
		.filter( file => COR.filterFiles.includes( file.split( "." ).pop().toLowerCase() ) )
		.filter( file => !COR.ignoreFiles.includes( file.split( "/" ).pop().toLowerCase() ) )
		.map( item => `
		<div style="margin: 5px 0;" >
			<a href="#${ item }" title="" onclick="JavaScript:if(window.innerWidth<640||window.innerHeight<500){navMenuDet.open=false;}" >
			${ item.split( "/" ).pop().split( "." ).shift()
				.split( /[-_]/ )
				.filter( x => x.length > 0 )
				.map( x => ( x.charAt( 0 ).toUpperCase() + x.slice( 1 ) ) )
				.join( " " ) }</a>

			<a href="readme.html#${ COR.pathContent }${ item }" title="Open file in new tab"  target="_blank" >
			${ COR.iconExternalFile }</a>
		</div>`);

	//.replace( /-/g, " " ) }</a>
	return filtered;

};



////////////

GRV.onContextMenu = function ( event ) {

	event.preventDefault();

	console.log( "event", event.target.parentNode );

	//el = event.target.parentNode;

	if ( !window.divPopUp ) {

		divPopUp = document.body.appendChild( document.createElement( 'div' ) );

	}

	divPopUp.classList.add( "infoTooltip" );
	//divPopUp.style.cssText = `border: 1px solid red; width: 10rem; position: absolute;`
	divPopUp.style.display = "block";
	divPopUp.style.left = event.pageX - 10 + "px";
	divPopUp.style.top = event.pageY - 10 + "px";
	divPopUp.style.zIndex = "50";

	const htm = `

	<div><button onclick=GRV.toggleChildren(GRVdivFolders,true); >open all</button></div>
	<div><button onclick=GRV.toggleChildren(GRVdivFolders,false); >close all</button></div>
	<hr>
	<div><button onclick=GRV.toggleChildren(${ event.target.parentNode.id },true); >open children</button></div>
	<div><button onclick=GRV.toggleChildren(${ event.target.parentNode.id },false); >close children</button></div>
	`;

	divPopUp.innerHTML = htm;

	window.addEventListener( "click", GRV.onClick );

};



GRV.toggleChildren = function ( element = GRVdivFolders, boole = false ) {

	//console.log( "el", element, element.querySelectorAll( "details" ) )

	element.open = boole;

	element.querySelectorAll( "details" ).forEach( detail => detail.open = boole );

};



GRV.onClick = function () {

	divPopUp.style.display = "none";

	divPopUp.innerHTML = "";

	window.removeEventListener( "click", GRV.onClick );

};


////////////

GRV.test = function () {

	const links = GRVdivGitHubRepoTreeView.querySelectorAll( "a" );
	console.log( "links", links );

	//console.log( "GRV.links", GRV.links );

	let i = 1;

	nextLink();

	function nextLink () {

		GRV.links[ i ].click();

		if ( i < GRV.links.length - 2 ) {

			i += 3;

			setTimeout( nextLink, 1000 );

		} else {

			console.log( "number of files opened:", ( i - 1 ) / 3 );

		}
	}
};



GRV.filterFiles = function () {

	md = GRV.files.filter( file => file.endsWith( ".md" ) );

};



GRV.repos = [
	[ "heritage-happenings", "heritage-happenings.github.io", "master", "", false, [ "archive", "drafts", "journal", "lib", "lib-templates", "zzz-residents" ], [ "md", "htm", "jpg", "png" ] ],
	[ "theo-armour", "theo-armour.github.io", "master", "" ],
	[ "theo-armour", "sdg-2021", "main", "" ],
	[ "ladybug-tools", "3d-models", "master", "https://www.ladybug.tools/3d-models/" ],
	[ "ladybug-tools", "spider-2021", "main", "https://www.ladybug.tools/spider-2021/" ],
	[ "ladybug-tools", "spider-2020", "master", "https://www.ladybug.tools/spider-2020/" ],
	[ "ladybug-tools", "spider", "master", "https://www.ladybug.tools/spider/" ],
	[ "ladybug-tools", "spider-covid-19-viz-3d", "main", "https://www.ladybug.tools/spider-covid-19-viz-3d/" ],
	[ "ladybug-tools", "spider-gbxml-tools", "master", "https://www.ladybug.tools/spider-gbxml-tools/" ],

];



GRV.getRepos = function () {

	const htm = GRV.repos.map( repo => `<button
	onclick=GRV.getRepoNew({user:"${ repo[ 0 ] }",repo:"${ repo[ 1 ] }",branch:"${ repo[ 2 ] }",base:"${ repo[ 3 ] }",menu:"${ repo[ 4 ] }",folders:"${ repo[ 5 ] }",files:"${ repo[ 6 ] }"})>${ repo[ 0 ] } / ${ repo[ 1 ] }</button>` );

	MNUdivExtras.innerHTML = htm + "<br><br>";

};



GRV.getRepoNew = function ( obj = {} ) {

	COR.user = obj.user || "theo-armour";
	COR.repo = obj.repo || "2022";
	COR.branch = obj.branch || "main";

	COR.filesAll = obj.menu || true;

	COR.defaultIgnoreFolders = obj.folders.split( "," ) || [ "apps" ];
	//console.log( "folder", COR.defaultIgnoreFolders[ 0 ] );

	COR.filterFiles = obj.files || [ "md" ];

	GRV.init();

	GRVdet.open = true;

	const url = COR.repo.startsWith( COR.user ) ? `https://${ COR.user }.github.io/` : `https://${ COR.user }.github.io/${ COR.repo }/`;
	COR.urlBaseContent = obj.base || url;
	//console.log( "COR.urlBaseContent", COR.urlBaseContent );

	// if ( window.FXH.loaded ) {

	// 	location.hash = "";
	// 	FXH.onHashChange();

	// }

};