
<script
		src="https://pushme-pullyou.github.io/tootoo-2021/sandbox/libraries/ccapture/r-2021-11-16/ccw-ccapture-webm.js"></script>

# text

## Stats

<a href="javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='https://rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()" title="Mr.doob's Stats.js" >Show fps statistics</a>



## Help

Axis RGB = XYZ directions
Use one/two/three fingers to rotate/zoom/pan the display in 3D
	Or left/scroll/right with your pointing device
Click the three bars( 'hamburger menu icon' ) to slide the menu in and out
Press Control-U/Command-Option-U to view the source code
Press Control-Shift-J/Command-Option-J to see if the JavaScript console reports any errors
Click 'Show fps statistics' to see how many frames per second your computer is giving you


			'<p>Axis RGB = XYZ directions</p>' +
			'<p>Spacebar|click to stop spinning</p>' +
			'<p>Use one|two|three fingers to rotate|zoom|pan display in 3D<br>' +
				'Or left|scroll|right with your pointing device</p>' +
			'<p>Press Control-Shift-J|Command-Option-J to see if the JavaScript console reports any errors</p>' +



## drawGroundGridAxis


	drawGroundGridAxis();

function drawGroundGridAxis() {

// 2018-08-09 https://theo-armour.github.io/snippetssnippets/threejs-draw-things.md

	const geometry = new THREE.BoxGeometry( 100, 100, 5 );
	const material = new THREE.MeshNormalMaterial();
	const ground = new THREE.Mesh( geometry, material );
	ground.position.set( 0, 0, -2.5 );

	const edgesGeometry = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry
	const edgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000 } );
	const edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );
	ground.add( edges );

	scene.add( ground );

	const gridHelper = new THREE.GridHelper( 100, 10 );
	gridHelper.rotation.x = Math.PI / 2;
	scene.add( gridHelper );

	const axesHelper = new THREE.AxesHelper( 50 );
	scene.add( axesHelper );

}



## drawGeometries

* cookbook-threejs/examples/geometry/group-points-of-intersection/group-points-of-intersection-0-02.html

const geometries = [

	["Box", 20, 20, 20 ],
	["Cone", 20, 20, 30],
	["Cylinder", 10, 5, 20 ],
	["Sphere", 10, 50, 20 ],
	["Tetrahedron", 10, 0],
	["Dodecahedron", 10, 0],
	["Icosahedron", 10, 0],
	["Octahedron", 10, 0],
	["Torus", 20, 5, 19, 32 ],
	["TorusKnot", 10, 3 ]
];

let mesh;

<div id=divGeometries ></div>

divGeometries.innerHTML = getButtonsGeometries();


function getButtonsGeometries() {

	htm = geometries.map( ( geometry, index ) =>
	`<p><button onclick="drawGeometries(${ index });" >${ geometry[ 0 ]}</button></p>`
	).join( "" );

	return htm;

}

function drawGeometries( index ) {

	scene.remove( mesh );

	const items = geometries[ index ];
	const geometry = new THREE[ items.shift() + "Geometry" ]( ...items );
	const material = new THREE.MeshNormalMaterial();
	mesh = new THREE.Mesh( geometry, material );

	scene.add( mesh );

}


## drawMultipleMeshes


	drawMultipleMeshes();

function drawMultipleMeshes( count = 50 ) {

// 2018-08-09 / https://theo-armour.github.io/snippets/snippets/threejs-draw-things.md

	const meshes = new THREE.Group();
	//const geometry = new THREE.BoxGeometry( 10, 10, 10 );
	const geometry = new THREE.SphereBufferGeometry( 5 );
	const material = new THREE.MeshNormalMaterial();

	for ( let i = 0; i < count; i++) {

		//const material = new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random(), opacity: 0.5, transparent: true } );
		const mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 100 * Math.random() - 50, 100 * Math.random() - 50, 50 * Math.random() );
		mesh.rotation.set( 6.3 * Math.random(), 1.57 * Math.random(), 3.14 * Math.random() );
		mesh.name = 'cube-' + i;
		//mesh.castShadow = true
		//mesh.receiveShadow = true;


		const edgesGeometry = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry
		const edgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } );
		const edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );
		mesh.add( edges ); // add wireframe as a child of the parent mesh

		meshes.add( mesh );

	}

	// return meshes;
	scene.add( meshes);

}





### GEOMETRY / Multiple

function addGeometry( count = 250 ) {

	const  geometries = [

		new THREE.BoxBufferGeometry( 10, 10, 10 ),
		new THREE.CylinderBufferGeometry( 5, 5, 1, 12 ),
		new THREE.DodecahedronGeometry( 5 ),
		new THREE.SphereBufferGeometry( 5, 12, 8 ),
		new THREE.TorusBufferGeometry( 10, 5 ),
		new THREE.TorusKnotBufferGeometry( 10, 5 )
	];


	for ( let i = 0; j < count i++ ) {

		const geometry = geometries[ Math.floor( Math.random() * geometries.length ) ];
		const material = new THREE.MeshNormalMaterial();

		const mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( Math.random() * 100 - 50, Math.random() * 100 - 50,  Math.random() * 100 - 50);
		mesh.rotation.set( Math.random() * 6, Math.random() * 6, Math.random() * 6  )
		mesh.scale.set( Math.random() * 3, Math.random() * 3, Math.random() * 3 );

		const edgesGeometry = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry
		const edgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } );
		const edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );

		mesh.add( edges );

		scene.add( mesh );

	}

}



function addGeometry() {

	var verticesOfCube = [
		-1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
		-1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
	];

	var indicesOfFaces = [
		2,1,0,    0,3,2,
		0,4,7,    7,3,0,
		0,1,5,    5,4,0,
		1,2,6,    6,5,1,
		2,3,7,    7,6,2,
		4,5,6,    6,7,4
	];

	const geometries = [

		new THREE.BoxBufferGeometry( 10, 10, 10 ),
		new THREE.CylinderBufferGeometry( 5, 5, 1, 12 ),
		new THREE.DodecahedronBufferGeometry( 05 ),
		new THREE.SphereBufferGeometry( 5, 12, 8 ),
		new THREE.TorusBufferGeometry( 10, 5 ),
		new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 )

	];


	for ( let i = 0; i < 250; i++ ) {

		const geometry = geometries[ Math.floor( Math.random() * geometries.length ) ];
		const material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } );

		const mesh = new THREE.Mesh( geometry, material );

		mesh.position.set( Math.random() * 100 - 50, Math.random() * 100 - 50,  Math.random() * 100 - 50);
		mesh.rotation.set( Math.random() * 6, Math.random() * 6, Math.random() * 6  )
		mesh.scale.set( Math.random() * 3, Math.random() * 3, Math.random() * 3 );

		const edgesGeometry = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry
		const edgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 5 } );
		const edges = new THREE.LineSegments( edgesGeometry, edgesMaterial );

		mesh.add( edges );

		scene.add( mesh );

	}

}


### GEOMETRY / PlaneBufferGeometry

PlaneGeometry(width, height, widthSegments, heightSegments)
starts at top / left and goes right and down


	function createCylinder( radius, height, columns, rows ) {

		var radius = radius ? radius : 20;
		var height = height ? height : 50;
		var columns = columns ? columns : 120;
		var rows = rows ? rows : 1;
		var v = function( x, y, z ){ return new THREE.Vector3( x, y, z ); };

		geometry = new THREE.PlaneBufferGeometry(  1, 1, columns, rows );

		vertices = geometry.attributes.position.array;

		var count = 0;

		for ( var i = 0; i <= rows; i++ ) {

			var theta = 2 * Math.PI / columns;

			for ( var j = 0; j <= columns; j++ ) {

				vertices[ count++ ] = radius * Math.cos( theta * j );
				vertices[ count++ ] = i * height / rows;
				vertices[ count++ ] = radius * Math.sin( theta * j );

			}

		}

		geometry.computeFaceNormals();
		geometry.computeVertexNormals();

		return geometry;

	}


## Math Function Plot

	function drawPlane() {

		let geometry, material, mesh;

		geometry = new THREE.PlaneGeometry( 100, 100, 100, 100 );

		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 * Math.PI ) );

		for ( let i = 0; i < geometry.vertices.length; i++ ) {

			vertex = geometry.vertices[ i ];

			vertex.y = 10 * Math.sin( vertex.x / 10 ) + 5 * Math.cos( vertex.z / 10 ) ;

		}

		geometry.computeFaceNormals();
		geometry.computeVertexNormals();

		material = new THREE.MeshNormalMaterial( { side: 2 } );
		mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );

	}



## LIGHT

//https://github.com/mrdoob/three.js/issues/11387


function addSomeLights() {

	lightAmbient = new THREE.AmbientLight( 0x888888 );
	lightAmbient.name = "lightAmbient";
	scene.add( lightAmbient );

	lightDirectional = new THREE.DirectionalLight( 0xffffff, 0.75 );
	lightDirectional.name = "lightDirectional";
	lightDirectional.position.set( 1, 1, 1 ).normalize();
	scene.add( lightDirectional );

	var helper = new THREE.DirectionalLightHelper( lightDirectional, 50, 0xff00ff  );

	scene.add( helper );

}

## Lights 1

// https://threejs.org/docs/#api/lights/DirectionalLight
// https://threejs.org/docs/#api/lights/shadows/DirectionalLightShadow


		renderer.shadowMap.enabled = true;

		mesh.castShadow = true
		mesh.receiveShadow = true;

		let lightAmbient, lightDirectional, lightPoint;
		lightAmbient = new THREE.AmbientLight( 0x444444 );
		scene.add( lightAmbient );

		const size = 100
		lightDirectional = new THREE.DirectionalLight( 0xffeedd, 1 );
		lightDirectional.position.set( -size, size, size );
		lightDirectional.shadow.camera.scale.set( 13, 15, 0.5 );
		lightDirectional.castShadow = true;
		scene.add( lightDirectional );

		scene.add( new THREE.CameraHelper( lightDirectional.shadow.camera ) );


## Lights addlights

		const lightAmbient = new THREE.AmbientLight( 0x444444 );
		scene.add( lightAmbient );

		const lightDirectional = new THREE.DirectionalLight( 0xffffff, 1 );
		lightDirectional.shadow.mapSize.width = 2048;  // default 512
		lightDirectional.shadow.mapSize.height = 2048;
		lightDirectional.castShadow = true;
		scene.add( lightDirectional );

		const lightPoint = new THREE.PointLight( 0xffffff, 0.5 );
		lightPoint.position = new THREE.Vector3( 0, 0, 1 );
		camera.add( lightPoint );
		scene.add( camera );

## Lights 2
// 2017-04-02 ~ http://jaanga.github.io/cookbook-threejs/templates/add-lights/template-threejs-lights-r2.html

	function addLights( size ) {


		let lightAmbient, lightDirectional, lightPoint;
		size = size ? size : 100;

		lightAmbient = new THREE.AmbientLight( 0x444444 );
		scene.add( lightAmbient );

		lightPoint = new THREE.PointLight( 0xffffff, 0.95 );
		camera.add( lightPoint );
		lightPoint.position = new THREE.Vector3( 0, 0, 1 );
		scene.add( camera );


		lightDirectional = new THREE.DirectionalLight( 0xffffff, 0.5 );
		lightDirectional.position.set( -size, size, size );
		lightDirectional.shadow.camera.scale.set( 13, 15, 0.5 );


		d = 100;
		lightDirectional.shadow.camera.left = -d;
		lightDirectional.shadow.camera.right = d;
		lightDirectional.shadow.camera.top = d;
		lightDirectional.shadow.camera.bottom = -d;

		lightDirectional.shadow.camera.near = 0;
		lightDirectional.shadow.camera.far = 2 * d;

		lightDirectional.shadow.bias = -0.001; // default 0 ~ distance from corners?


		lightDirectional.shadow.mapSize.width = 2048;  // default 512
		lightDirectional.shadow.mapSize.height = 2048;

		lightDirectional.castShadow = true;
		scene.add( lightDirectional );

		scene.add( new THREE.CameraHelper( lightDirectional.shadow.camera ) );


	}



## Shadows

	function addShadows() {

// 2017-01-02 ~ http://jaanga.github.io/cookbook-threejs/templates/add-lights/template-threejs-lights-r3.html

		renderer.shadowMap.enabled = true;

		scene.traverse( function ( child ) {

			if ( child instanceof THREE.Mesh ) {

				child.castShadow = true
				child.receiveShadow = true;

			}

		} );




## Gnomen

	function drawGnomen() {

		let gnomen;
		let geometry, material;

		geometry = new THREE.CylinderGeometry( 0, 2, 30, 24 );
		material = new THREE.MeshPhongMaterial( {
			color: 0xffffff * Math.random(),
			specular: 0xffffff * Math.random(),
			shininess: 1
		} );

		gnomen = new THREE.Mesh( geometry, material );
		gnomen.position.set( 0, 15, 0 );
		gnomen.castShadow = true;
		gnomen.receiveShadow = true;

		return gnomen;

	}



## Pointer

	function drawPointer3D() {

		var geometry, material, mesh;

		geometry = new THREE.CylinderGeometry( 10, 5, 80, 3 );
		geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 50, 0 ) );
		geometry.merge( new THREE.CylinderGeometry( 12, 0, 20, 3 ) );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationX( -0.5 * pi ) );
		geometry.applyMatrix( new THREE.Matrix4().makeRotationY( - pi ) );
		material = new THREE.MeshNormalMaterial();

		mesh = new THREE.Mesh( geometry, material );
		mesh.scale.multiplyScalar( 0.5 );

		return mesh;

	}



## Trylon and Perisphere

	function initTrylonPerisphere() {

// https://en.wikipedia.org/wiki/Trylon_and_Perisphere

		var geometry, material, mesh;

		trylonPerisphere = new THREE.Object3D();
		trylonPerisphere.name = 'trylonPerisphere';

// Perisphere
		geometry = new THREE.SphereGeometry( 25, 50, 50 );
		material = new THREE.MeshPhongMaterial( {
			color: 0xffffff * Math.random(),
			specular: 0xffffff * Math.random(),
			shininess: 10
		} );
		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 20, 0 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;

		trylonPerisphere.add( mesh );

// Trylon
		geometry = new THREE.CylinderGeometry( 0, 8, 100, 3 );
		material = new THREE.MeshPhongMaterial( {
			color: 0xffffff * Math.random(),
			specular: 0xffffff * Math.random(),
			shininess: 1
		} );

		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( -15, 50, -30 );
		mesh.castShadow = true;
		mesh.receiveShadow = true;

		trylonPerisphere.add( mesh );

		trylonPerisphere.scale.set( 0.4, 0.4, 0.4 );
		trylonPerisphere.position.set( -25, 0, -50 );

		scene.add( trylonPerisphere );

	}



## toggleStonehenge

	function toggleStonehenge() {

		var stonehenge = scene.getObjectByName( 'stonehenge' );
		var stonehengeHelpers = scene.getObjectByName( 'stonehengeHelpers' );

		if ( stonehenge === undefined ) {

			stonehenge = new THREE.Object3D();
			stonehengeHelpers = new THREE.Object3D();

			stonehenge.name = 'stonehenge';
			stonehengeHelpers.name = 'stonehengeHelpers';

			number = 20;
			angle = 6.283 / number;
			radius = 200;
			for ( var i = 0; i < number; i++ ) {
					var geometry = new THREE.BoxGeometry( 15, 100, 30 );
					var color = 0xffffff * Math.random();
					var material = new THREE.MeshPhongMaterial( { color: color, side: 2 });
					var mesh = new THREE.Mesh( geometry, material );
					mesh.castShadow = true;
					mesh.receiveShadow = true;
					mesh.rotation.y = - angle * i;
					mesh.position.set( radius * Math.cos( angle * i ) , 50, radius * Math.sin( angle * i )  );

					stonehenge.add( mesh );

					helper = new THREE.EdgesHelper( mesh );
					stonehengeHelpers.add( helper );

			}

			number = 9;
			angle = 6.283 / number;
			radius = 200;

			for ( var i = 0; i < number; i++ ) {
				var geometry = new THREE.BoxGeometry( 15, 20, 100 );
				var color = 0xffffff * Math.random();
				var material = new THREE.MeshPhongMaterial( { color: color, side: 2 });
				var mesh = new THREE.Mesh( geometry, material );
				mesh.castShadow = true;
				mesh.receiveShadow = true;

				mesh.rotation.y = -angle * i;
				delta = 0.01 *  Math.random();
				mesh.position.set( radius * Math.cos( ( delta + angle ) * i ) , 110, radius * Math.sin( ( delta + angle ) * i )  );

				stonehenge.add( mesh );

				helper = new THREE.EdgesHelper( mesh );
				stonehengeHelpers.add( helper );

			}

			stonehenge.scale.set( 0.1, 0.1, 0.1 );
			scene.add( stonehenge, stonehengeHelpers );

		} else {

			scene.remove( stonehenge, stonehengeHelpers );

		}

	}




## Placards

// 2018-08-09 ~ https://github.com/jaanga/jaanga.github.io/tree/master/cookbook-threejs/examples/placards


			placard = drawPlacard( '', 0.05, 120, 100, 10, 0 );
			scene.add( placard );


// 2019-12-14 theo-armour.github.io/snippets/snippets/threejs-draw-things.md

function drawPlacard( text = "testing 123", scale = "0.2", color = "#ff0000", x = 20, y = 20, z = 20 ) {


	const placard = new THREE.Object3D();
	const v = ( x, y, z ) => new THREE.Vector3( x, y, z );

	const texture = canvasMultilineText( text, { backgroundColor: 120}   );
	const spriteMaterial = new THREE.SpriteMaterial( { map: texture, opacity: 0.9, transparent: true } );
	const sprite = new THREE.Sprite( spriteMaterial );
	sprite.position.set( x, y, z ) ;
	sprite.scale.set( scale * texture.image.width, scale * texture.image.height );

	const geometry = new THREE.Geometry();
	geometry.vertices = [ v( 0, 0, z ),  v( x, 0, z ) ];
	const material = new THREE.LineBasicMaterial( { color: 0xaaaaaa } );
	const line = new THREE.Line( geometry, material );

	placard.add( sprite, line );

	return placard;


	function canvasMultilineText( textArray, parameters ) {

		parameters = parameters || {} ;

		const canvas = document.createElement( 'canvas' );
		const context = canvas.getContext( '2d' );
		let width = parameters.width ? parameters.width : 0;
		const font = parameters.font ? parameters.font : '48px monospace';
		const color = parameters.backgroundColor ? parameters.backgroundColor : 120 ;

		if ( typeof textArray === 'string' ) textArray = [ textArray ];

		context.font = font;

		for ( let i = 0; i < textArray.length; i++) {

			width = context.measureText( textArray[ i ] ).width > width ? context.measureText( textArray[ i ] ).width : width;

		}

		canvas.width = width + 20;
		canvas.height =  parameters.height ? parameters.height : textArray.length * 60;

		context.fillStyle = 'hsl( ' + color + ', 80%, 50% )' ;
		context.fillRect( 0, 0, canvas.width, canvas.height);

		context.lineWidth = 1 ;
		context.strokeStyle = '#000';
		context.strokeRect( 0, 0, canvas.width, canvas.height );

		context.fillStyle = '#000' ;
		context.font = font;

		for ( let i = 0; i < textArray.length; i++) {

			context.fillText( textArray[ i ], 10, 48  + i * 60 );

		}

		const texture = new THREE.Texture( canvas );
		texture.minFilter = texture.magFilter = THREE.NearestFilter;
		texture.needsUpdate = true;

		return texture;

	}

}


## Draw Line & Points


	line = getLine( getPointsCircle );
	scene.add( line );

}


function getLine( func ) {

	scene.remove( line );

	const points = func();

	const  geometry = new THREE.Geometry();
	geometry.vertices = points;

	const material = new THREE.LineBasicMaterial( { color: 0x000000 } );
	line = new THREE.Line( geometry, material );

	return line;

}



function getPointsCircle() {

	const radius = 20;
	const pointCount = 20;
	const points = [];
	const delta = 2 * Math.PI / pointCount;

	for ( let i = 0; i < pointCount + 1; i++ ) {

		const x = radius * Math.cos( i * delta );
		const y = radius * Math.sin( i * delta );
		const z = 30;

		points.push( new THREE.Vector3( x, y, z ) );

	}

	return points;

}




function getPointsStar() {

	const radius = 10;
	const pointCount = 20;
	const points = [];
	const delta = 2 * Math.PI / pointCount;

	for ( let i = 0; i < pointCount; i++ ) {

		const x = ( 50 * Math.random() + radius ) * Math.cos( i * delta );
		const y = 40;
		const z = ( 50 * Math.random() + radius ) * Math.sin( i * delta );
		points.push( new THREE.Vector3( x, y, z ) );

	}

	return points;

}




## Sprites

function getSprite() {

	const spriteMap = new THREE.TextureLoader().load( "sprite.png" );
	const spriteMaterial = new THREE.SpriteMaterial( { color: 0xff0000, map: spriteMap } );
	sprite = new THREE.Sprite( spriteMaterial );


	return sprite;

}


### drawRandomLines

				<button onclick=drawRandomLines(); >draw random lines</button>


	function drawRandomLines( count = 10 ) {

		var v = function ( x, y, z ){ return new THREE.Vector3( x, y, z ); };

		let vertices = [];
		for ( var i = 0; i < count; i++ ) {

			vertices.push( v( 100 * Math.random() - 50, 0, 100 * Math.random() - 50 ) );

		}

		const geometry = new THREE.Geometry();
		geometry.vertices = vertices || [ v( -10, 0, 0 ),  v( 0, 10, -10 ), v( 10, 0, 0 ) ];
		const material = new THREE.LineBasicMaterial( { color: 0x000000 } );
		const line = new THREE.Line( geometry, material );

		scene.add( line );
//		return line;

	}




### Nice Path - Line

see jaanga.github.io/cookbook-threejs/examples/animation/camera-actions-select

* https://github.com/mrdoob/three.js/blob/master/examples/webgl_materials_cubemap_dynamic.html


	function drawNicePath() {

		var segments = 30;

		var geometry, vertices, material, line;
		var v = function ( x, y, z ){ return new THREE.Vector3( x, y, z ); };
//		var v = function() { return new THREE.Vector3; }

		geometry = new THREE.Geometry();
		vertices = geometry.vertices;

		for ( var i = 0; i < 2 * segments * Math.PI + 1; i++ ) {

			vertices.push( v(
				Math.sin( i * 7 / segments ) * 30,
				Math.cos( i * 3 / segments  ) * 30,
				Math.sin( i * 2 / segments  ) * 30 )
			);

		}

		material = new THREE.LineBasicMaterial( { color: 0x000000 } );
		line = new THREE.Line( geometry, material );

		scene.add( line );
//		return line;

	}



