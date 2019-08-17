// 1. Copy and paste your prototype in here and refactor into class syntax.

console.log("==========");
console.log("classes.js");
console.log("==========");

console.log("");  //blank line

/* ===== Prototype Practice ===== */

console.log("-----------");
console.log("CuboidMaker");
console.log("-----------");

console.log("");  //blank line

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor class named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker2 {
  constructor(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const cuboid = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});

console.log(cuboid);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log("");  //blank line


console.log("---------");
console.log("CubeMaker");
console.log("---------");

console.log("");  //blank line

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
  constructor(attributes) {
    super(attributes);
  }
  volume() {
    return Math.pow(this.length, 3);
  }
  surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
}

const cube = new CubeMaker({length: 4});

console.log(cube);

console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96