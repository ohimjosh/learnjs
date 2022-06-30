"use strict";

// ARRAYS

const currencies = new Map([
	[`USD`, `United States dollar`],
	[`EUR`, `Euro`],
	[`GBP`, `Pound sterling`],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Simple Array Methods
let arr = [`a`, `b`, `c`, `d`, `e`];

// SLICING ARRAYS
// call array then the method

// slicing itself makes a copy of the array and does not change original
const copyArr = arr.slice();
console.log(copyArr);

// you can also copy arrays with spread operator
const spreadcopyArr = [...arr];

console.log(arr.slice(2));

// returns the last element
console.log(arr.slice(-1));

// returns c and d
// parameters for slice is begin and end
// the end returns one before inputted index
console.log(arr.slice(2, 4));

// SPLICING ARRAYS
// when you splice an array it is like cutting
// it will remove the elements from the original array

console.log(copyArr);

// returns c,d and e
console.log(arr.splice(2));

// returns a and b
// no longer has c,d and e in array
console.log(arr);

// usually splice is used to delete elements from an array
// commonly for deleteing the last element
arr.splice(-1);

// now only a is returned and b is removed
console.log(arr);

// REVERSING ARRAYS
arr = [`a`, `b`, `c`, `d`, `e`];
console.log(arr);
const arr2 = [`j`, `i`, `h`, `g`, `f`];

// once you reverse the array it will mutate the original keeping it reversed
console.log(arr2.reverse());

// CONCAT ARRAYS
// does not mutate original array
const letters = arr.concat(arr2);
console.log(letters);

// you can also use spread operator to concat
const spreadLetters = [...arr, ...arr2];
console.log(spreadLetters);

// JOIN ARRAYS
// convert array to string and add a separator
// for our example it is separated by -

console.log(letters.join(` - `));
