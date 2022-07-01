"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
	if (movement > 0) {
		console.log(`You deposited ${movement}`);
	} else {
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
}

// with count
for (const [i, movement] of movements.entries()) {
	if (movement > 0) {
		console.log(`Movement ${i + 1}: You deposited ${movement}`);
	} else {
		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
	}
}

console.log(`==================== For Each ====================`);
// Using forEach
// A higher order function that requires a callback function inorder to tell
// it what to do

// forEach loops over the array and for each iteration it will execute the
// called back function
// the elements within the array will be passed as arguments for the function
movements.forEach(function (movement) {
	if (movement > 0) {
		console.log(`You deposited ${movement}`);
	} else {
		console.log(`You withdrew ${Math.abs(movement)}`);
	}
});

// forEach iterations
// 0: function(200)
// 1: function(450)
// 2: function(-400)

// adding count to forEach
// first parameter is the current element
// second is index
// third is the entire array we are looping through

// without count
/*
movements.forEach(function (mov) {
	if (mov > 0) {
		console.log(`You deposited ${mov}`);
	} else {
		console.log(`You withdrew ${Math.abs(mov)}`);
	}
});
*/

movements.forEach(function (mov, i, arr) {
	if (mov > 0) {
		console.log(`Movement ${i + 1}: You deposited ${mov}`);
	} else {
		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
	}
});

// in forEach you cannot create break statements
