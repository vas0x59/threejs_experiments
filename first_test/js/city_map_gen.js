function random(min, max) {
    return min + Math.random() * (max - min);
}

function gen_random_building(build_min, build_max) {
    return [
        random(build_min[0], build_max[0]),
        random(build_min[1], build_max[1]),
        random(build_min[2], build_max[2])
    ];
}
function gen_builds(size, build_min, build_max, percent) {
    var builds = [];
    var max_count = Math.round(((size[0] * size[1]) / (build_max[0] * build_max[1]))*percent);
    for (var i = 0; i < max_count; i++) {
        var build_pos = [random(0, size[0]), random(0, size[1]), 0]
        var build_size = gen_random_building(build_min, build_max)
        builds.push({ "pose": build_pos, "size": build_size });
    }
    return builds
}
function gen_parks(size, park_min, park_max, percent) {
    var builds = [];
    var max_count = Math.round(((size[0] * size[1]) / (park_max[0] * park_max[1]))*percent);
    for (var i = 0; i < max_count; i++) {
        var build_pos = [random(0, size[0]), random(0, size[1]), 0]
        var build_size = gen_random_building(park_min, park_max)
        builds.push({ "pose": build_pos, "size": build_size });
    }
    return builds
}


function draw_builds(builds){
    var cubes = []
    // var cubes = []
    for (var i = 0; i < builds.length; i++){
        var build = builds[i]
        var build_s = build["size"]
        var build_p = build["pose"]
        var geometry = new THREE.BoxGeometry( build_s[0], build_s[2], build_s[1] );
        
        // geometry.computeFaceNormals();
        // var material = new THREE.MeshBasicMaterial( { color: 0xffaa00 } );
        
        var material = new THREE.MeshStandardMaterial( { color: 0xffaa00, flatShading: true, roughness:1, metalness:0.5 } );
        var cube = new THREE.Mesh( geometry, material );
        cube.position.x = build_p[0]
        cube.position.y = build_p[2] + build_s[2]/2
        cube.position.z = build_p[1]
        cubes.push(cube)
    }
    return cubes;
}

function draw_parks(builds){
    var cubes = []
    // var cubes = []
    for (var i = 0; i < builds.length; i++){
        var build = builds[i]
        var build_s = build["size"]
        var build_p = build["pose"]
        var geometry = new THREE.BoxGeometry( build_s[0], build_s[2], build_s[1] );
        
        // geometry.computeFaceNormals();
        // var material = new THREE.MeshBasicMaterial( { color: 0xffaa00 } );
        
        var material = new THREE.MeshStandardMaterial( { color: 0x33af05, flatShading: true, roughness:1, metalness:0.3 } );
        var cube = new THREE.Mesh( geometry, material );
        cube.position.x = build_p[0]
        cube.position.y = build_p[2] + build_s[2]/2
        cube.position.z = build_p[1]
        cubes.push(cube)
    }
    return cubes;
}

function gen_city() {
    var builds = gen_builds([500, 500], [5, 5, 8], [10, 10, 20], 0.6);
    var parks = gen_parks([500, 500], [10, 10,  0.1], [25, 25, 1], 0.6);
    // console.log(builds)
    var objs = []
    objs.push(draw_builds(builds))
    objs.push(draw_parks(parks))
    return objs
}