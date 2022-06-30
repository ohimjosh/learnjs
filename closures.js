"use strict";

// CLOSURES

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

// g is called to initialize a = 23
// closure f is called but remembers the original variable values
// called closure does calculation
