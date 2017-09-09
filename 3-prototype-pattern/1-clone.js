var Plane = function () {
    this.blood = 100;
    this.attackLevel = 1;
    this.defenseLevel = 1;
}

var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;

// Object.create will redirect ref to original object
var clonePlane = Object.create(plane)
console.log('clonePlane: ' + JSON.stringify(clonePlane));
console.log('clonePlane.__proto__: ' + JSON.stringify(clonePlane.__proto__));

plane.blood = 700;

console.log('clonePlane: ' + JSON.stringify(clonePlane));
console.log('clonePlane.__proto__: ' + JSON.stringify(clonePlane.__proto__));