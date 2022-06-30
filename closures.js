"use strict";

// CLOSURES
// A closure is the closed-over variable environment of the execution context
// in which a function was created, even after that execution context is gone

// Easier definition
// A closure make sures that a function doesnt lose connnection to variables
// that existed at the functions birth place. It always keeps track and
// is attached to the original variables

// Example #1

let f;

const g = function () {
	const a = 23;
	f = function () {
		console.log(a * 2);
	};
};

g();
f();
// output is 46

// g is called to initialize a = 23
// closure f is called but remembers the original variable values
// called closure does calculation

// now lets see if we can call f again with another function

const h = function () {
	const b = 777;
	f = function () {
		console.log(b * 2);
	};
};

h();
f();

// h is called then f function will be called again
// f is reassgined by h
// output is 1554
