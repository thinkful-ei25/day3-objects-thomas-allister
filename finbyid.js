'use strict';
const scratchData = [
	{ id: 22, foo: 'bar' },
	{ id: 28, foo: 'bizz' },
	{ id: 19, foo: 'bazz' },
];


function findByID(items, idNum) {
	const ans = items.find(function (item) {
		return item.id === idNum;
	});
	return ans;
}

console.log(findByID(scratchData, 28));