// copyright 2023 Theo Armour. MIT license.
/* global COR, MNUdivShowHide, MNUdivPopUp, detNavMenu */
// jshint esversion:
// jshint loopfunc: true


let MNU = {};


MNU.init = function () {

	MNU.info = `
Menu system<br>
<br>
File: mnu-menu.js<br>
Name space: MNU<br>
Release: 2023-10-13<br>
<button onclick=MNU.getSample()>Testing: add sample menu</button>
`;

	MNU.infoBoxHtm = COR.description ? COR.description : MNU.info;

	MNUdivShowHide.innerHTML = `

	<details id=detNavMenu class="gmd-4">

		<summary id=sumNavMenu class="summary-nav gmd-1" title="click to view or hide menu">
			☰ <span id=spnMenuHelp>show&darr; || hide&uarr; menu</span>
		</summary>

		<nav id="navMenu" class="gmd-4">

			<div id=MNUdivHeader></div>

			<div id=MNUdivExtras>
				<button onclick=document.body.style.fontSize="80%";sumNavMenu.style.width="10rem"; style="font-size:80%;" >A</button>
				<button onclick=document.body.style.fontSize="100%";sumNavMenu.style.width="13rem"; style="font-size:100%;">A</button>
				<button onclick=document.body.style.fontSize="150%";sumNavMenu.style.width="20rem";  style="font-size:150%;">A</button>
			</div>

			<div id=MNUdivContent></div>

			<div id=MNUdivSample></div>

			<div id=MNUdivFooter></div>

		</nav>

	</details>`;

	if ( window.innerWidth < 800 || window.innerHeight < 500 ) {

		//document.documentElement.style.setProperty( "--mnu-width", "35%" );
		//console.log( "bb", 23 );
		sumNavMenu.hidden = false;
		detNavMenu.open = false;

	} else {

		const value = window.getComputedStyle( document.documentElement ).getPropertyValue( '--mnu-width' ); // #999999
		//console.log( "value", value );
		detNavMenu.style.width = value;
		detNavMenu.style.maxWidth = "50%";
		detNavMenu.open = true;
		//navMenu.hidden = false;
		sumNavMenu.hidden = true;
	}

	//${ MNU.addInfoBox( "Files to try" ) }


	MNUdivHeader.innerHTML = `
<header>

	<h1>
		<a id=MNUaSource href=${ COR.urlSource } target="_top" title="Click to go to the source code on GitHub">
			${ COR.iconGitHub }</a>

		<a href="" title="Click this title to reload this page">
			<span id=MNUspnTitle>${ COR.title }</span>
			<span id=MNUspnVersion>${ COR.version }</span></a>

		${ MNU.addInfoBox( MNU.infoBoxHtm, "MNUinfoBox" ) }

	</h1>

</header>`;



	MNUdivFooter.innerHTML = `
<footer>

	<div id=divLog ></div>

	<hr>

	<center>
		<a id=MNUaIcon class=aDingbat href="javascript:MNUspnTitle.scrollIntoView();" title="Scroll to top" >
		${ COR.iconRepo }
		</a>
	</center>

</footer>`;


};



MNU.addInfoBox = function ( text = MNU.infoBoxHtm, id = "" ) {
	//console.log( { text } );
	const htm = `
<span class="info">
	${ COR.iconInfo }
	<div class="infoTooltip gmd-5">
		<div id=${ id } >${ text }</div>
	</div>
</span>`;

	return htm;

};




////////// Everything below is a WIP

MNU.unhidePopUpCentered = function ( html = "howdy" ) {

	MNUdivPopUp.hidden = false;

	MNUdivPopUp.style.top = "50%";
	MNUdivPopUp.style.left = "50%";
	MNUdivPopUp.style.transform = "translate(-50%, -50%)";
	MNUdivPopUp.innerHTML = html;

};



MNU.toggleDarkMode = function ( button ) {

	console.log( "", 23 );

	if ( button.innerHTML.includes( "dark" ) ) {

		//root.style.backgroundColor = "#1e1f23";
		document.body.style.color = "#aaa";
		navMenu.style.backgroundColor = "#555";

		//THR.scene.background = new THREE.Color( 0x222222 );
		//THR.scene.fog.far = 999999;

		//const summaries = document.querySelectorAll(".summary-secondary");
		//console.log( "", summaries );

		Array.from( document.querySelectorAll( "a" ) )
			.forEach( a => a.style.color = "#ccc" );

		Array.from( document.querySelectorAll( "input,select,option" ) )
			.forEach( iso => iso.style.backgroundColor = "#bbb" );

		document.documentElement.style.setProperty( "--color-2-background", "#888" );
		Array.from( document.querySelectorAll( ".summary-primary" ) )
			.forEach( sum => sum.style.backgroundColor = "#888" );

		document.documentElement.style.setProperty( "--color-3-background", "#bbb" );
		Array.from( document.querySelectorAll( ".summary-secondary" ) )
			.forEach( sum => sum.style.backgroundColor = "#bbb" );

		MNUdivPopUp.style.backgroundColor = "#333";

		button.innerHTML = "light";

		return;

	}

	//root.style.backgroundColor = "#1e1f23";
	document.body.style.color = "teal";
	navMenu.style.backgroundColor = "#fafffa";

	//THR.scene.background = new THREE.Color( 0xcce0ff );
	//THR.scene.fog.far = THR.radius * 8;

	const summaries = document.querySelectorAll( ".summary-primary" );
	Array.from( summaries ).forEach( sum => sum.style.backgroundColor = "#eee" );

	MNUdivPopUp.style.backgroundColor = "#eee";

	button.innerHTML = "dark";

};



MNU.getSample = function () {


	if ( !window.MNUdivPopUp ) {

		MNUdivPopUp = document.body.appendChild( document.createElement( 'div' ) );
		//MNUdivPopUp.hidden = true;
		MNUdivPopUp.id = "MNUdivPopUp";

		MNUdivPopUp.style.backgroundColor = "#fff";
		MNUdivPopUp.style.border = "1px solid #8a8";
		MNUdivPopUp.style.borderRadius = "0.5rem";
		MNUdivPopUp.style.padding = "0.5rem";
		MNUdivPopUp.style.position = "absolute";
		// MNUdivPopUp.classList.add( "infoTooltip" );
		MNUdivPopUp.style.display = "block";
	}

	MNU.unhidePopUpCentered();

	const htm = `
<details id=detFile>

	<summary class="summary-primary gmd-1" title="Open files on your device: ">MNU file menu
		<span id=MNUspnFile ></span>
		${ MNU.addInfoBox( "Files to try" ) }
	</summary>

	<div id=FRdivMenuFileReader></div>

	<p>
		<input type=file id=FRinpFile onchange=FR.readFile(this); accept="*">
	</p>

	<div id=FOOdivLog>to be reset</div>

	<div id=FOZdivFileOpenZip></div>

	<div id=divLog></div>

</details>

<details ontoggle="">

	<summary class="summary-primary gmd-1" title="View selected items">
	MNU sample files gallery ${ MNU.addInfoBox( "Files to try" ) }
	</summary>

	<div class=divNavResize>

	<p><button onclick=MNU.toggleDarkMode(this); >toggle dark mode</button></p>

		<p>Sample files you can load, view and experiment with:</p>

		<div id=GFFdivGithubFoldersFiles></div>

		<div id=GFFdivFileInfo></div>

		<br>

	</div>

</details>

<details class=detNavMenuXX id=detView ontoggle="">

	<summary class="summary-primary gmd-1" title="View selected model aspects">
	MNU view menu ${ MNU.addInfoBox( "Files to try" ) } </summary>

	<div class=divNavResize>

		<h3>test 1</h3>
		<div>

			lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi
			tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima
			veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
			commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam
			nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
		</div>

		<h3>test 2 </h3>
		<div>

			lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi
			tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. ut enim ad minima
			veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
			commodi consequatur? quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam
			nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?
		</div>

	</div>

</details>

`;

	MNUdivSample.innerHTML = htm;

};
