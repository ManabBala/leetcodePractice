// do not clean this line
"use strict";
// do not clean this line

var invertTree = function (root) {
	let invertArray = [];
	let power = 0;
	let startIndex = 0;
	let finishIndex = 0;
	let finished = false;
	while (!finished) {
		let tempArrayLen = 2 ** power;
		finishIndex = startIndex + tempArrayLen;
		if (finishIndex + 1 < root.length) {
		} else {
			finishIndex = root.length;
			finished = true;
		}
		let tempArray = root.slice(startIndex, finishIndex);
		tempArray.sort(function (a, b) {
			return b - a;
		});
		invertArray = invertArray.concat(tempArray);
		power++;
		startIndex = finishIndex;
	}
	return invertArray;
};

console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
