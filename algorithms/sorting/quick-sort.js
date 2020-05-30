import Comparator from "../../utils/Comparator.js";
import swap from "../../utils/swap.js";

const comparator = new Comparator();

export default function quickSort(originArray) {
	const array = [...originArray];

	const x = array.shift();
	const center = [x];
	const smaller = [];
	const bigger = [];

	while (array.length > 0) {
		const current = array.shift();
		if (comparator.lessThan(current, x)) {
			smaller.push(current);
		} else if (comparator.equal(current, x)) {
			center.push(current);
		} else {
			bigger.push(current);
		}
	}
	let smallerSorted = quickSort(smaller);
	let biggerSorted = quickSort(bigger);
	return [...smallerSorted, ...center, ...biggerSorted];
}

export function quickSortInPlace(
	array,
	lowIdx = 0,
	highIdx = array.length - 1
) {
	if (lowIdx < highIdx) {
		const partitionIdx = partitionArray(array, lowIdx, highIdx);
		quickSort(array, lowIdx, partitionIdx - 1);
		quickSort(array, partitionIdx + 1, highIdx);
	}
}

function partitionArray(array, lowIdx, highIdx) {
	const pivot = array[highIdx];
	let partitionIdx = lowIdx;
	for (let currentIdx = lowIdx; currentIdx < highIdx; currentIdx++) {
		if (comparator.lessThan(array[currentIdx], pivot)) {
			swap(array, currentIdx, partitionIdx);
			partitionIdx += 1;
		}
	}
	swap(array, partitionIdx, highIdx);
	return partitionIdx;
}
