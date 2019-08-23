console.log("============");
console.log("functions.js");
console.log("============");

console.log("");  //blank line

// ==== Callbacks ====

console.log("---------");
console.log("Callbacks");
console.log("---------");

console.log("");  //blank line

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(p1, p2, cb) {
  return cb(p1, p2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(p1, p2) {
  let r = p1+p2;
  console.log(r);
  return r;
}
function multiply(p1, p2) {
  let r = p1*p2;
  console.log(r);
  return r;
}
function greeting(first_name, last_name) {
  let r = `Hello ${first_name} ${last_name}, nice to meet you!`;
  console.log(r);
  return r;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

console.log("");  //blank line


// ==== Closures ====

console.log("--------");
console.log("Closures");
console.log("--------");

console.log("");  //blank line

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Since a closure is a function with references to its surrounding state when called, the parent myFunction() provides the inner nestedFunction() access to it’s scope.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();