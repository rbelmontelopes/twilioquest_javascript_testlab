class Ducktypium {
  constructor(color) {
      this.color=color
      this.calibrationSequence=[]
      switch(color) {case "blue": break; case "yellow": break; case "red": break; default: throw new Error('color not allowed');}
  }
refract(color) {
    
    if (this.color === color) {return color}
    
    if (this.color === "blue") {
        if (color === "red"){return "purple";}
        else if (color === "yellow") {return "green"}}
    
    if (this.color === "yellow") {
        if (color === "blue") {return "green"}
        else if (color === "red") {return "orange"}}
    
    if (this.color === "red") {
        if (color === "blue") {return "purple"}
        else if (color === "yellow") {return "orange"}}
        }
  // your code here

    
calibrate(calibration) {
    let values = [];
    let sorted = [];
    sorted = calibration.sort();      
    sorted.forEach(function(value){values.push(value*3)})
    this.calibrationSequence = values;
}
    
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]