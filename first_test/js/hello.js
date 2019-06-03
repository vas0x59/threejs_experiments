var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

scene.background = new THREE.Color( 0xcccccc );
scene.fog = new THREE.FogExp2( 0xcccccc, 0.008 );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.3 );
var targetObject = new THREE.Object3D();
// directionalLight.rotation.z += 90
// directionalLight.target.
targetObject.position.x = 5
targetObject.position.y = 0
targetObject.position.z = 5
scene.add(targetObject);
directionalLight.target = targetObject;
directionalLight.castShadow = true;
  

scene.add( directionalLight );
directionalLight.shadow.mapSize.width = 512;  // default
directionalLight.shadow.mapSize.height = 512; // default
directionalLight.shadow.camera.near = 0.5;    // default
directionalLight.shadow.camera.far = 500;   
// scene.add( directionalLight.target );/

// var light = new THREE.DirectionalLight( 0xffffff );
// light.position.set( 1, 1, 1 );
// scene.add( light );
// var light = new THREE.DirectionalLight( 0x0044aa );
// light.position.set( - 1, - 1, - 1 );
// scene.add( light );
var light = new THREE.AmbientLight( 0xffffff, 1.5 );

scene.add( light );


var renderer = new THREE.WebGLRenderer();
// renderer.shadowMap.enable = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
// renderer.shadowMapSoft = true;

// renderer.shadowCameraNear = 3;
// renderer.shadowCameraFar = camera.far;
// renderer.shadowCameraFov = 50;

// renderer.shadowMapBias = 0.0039;
// renderer.shadowMapDarkness = 0.5;
// renderer.shadowMapWidth = 1024;
// renderer.shadowMapHeight = 1024;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



var controls = new THREE.OrbitControls( camera, renderer.domElement );
// var controls = new THREE.FlyControls( camera );
// controls.movementSpeed = 10;
// controls.domElement = renderer.domElement;
// controls.rollSpeed = Math.PI / 50;
// controls.autoForward = true;
// controls.dragToLook = true;

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// geometry.computeFaceNormals();
// // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial() );
// scene.add( cube );
var objss = gen_city()
objss.forEach(objs => {
    objs.forEach(obj => {
        obj.castShadow = true;
        obj.receiveShadow = true;
        scene.add(obj)
    });
});

// var geom = new THREE.Geometry(); 

// var points = [[1, -1, 0], [2, 3, 0], [1.5, -2, 0], [0, 0, 5]]

// points.forEach(element => {
//     var v1 = new THREE.Vector3(element[0],element[1],element[2]);
//     geom.vertices.push(v1);
//     geom.faces.push( new THREE.Face3( element[0],element[1],element[2] ) );
// });
// console.log(geom.vertices)

// // geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
// geom.computeFaceNormals();

// var object = new THREE.Mesh( geom, new THREE.MeshNormalMaterial() );
// scene.add(object);

camera.position.set( 0, 20, 100 );
// camera.rotation.x -= Math.PI/2;
controls.update();
var animate = function () {
    requestAnimationFrame( animate );

    // camera.rotation.x += 0.01;
    // camera.rotation.y += 0.01;
    // camera.rotation.z += 0.01;
    // controls.update();
    renderer.render( scene, camera );
};

animate();