import Comparator from "../../utils/Comparator.js";
import swap from "../../utils/swap.js";

const comparator = new Comparator();

// 两两比较将最大值推至最后
export default function bubbleSort(originalArray) {
	const array = [...originalArray];
	const last = array.length - 1;

	for (let end = last - 1; end >= 0; end -= 1) {
		let swapped = false;

		// step 1: 范围[0, last - 1] 最大冒泡至 last
		// step 2: 范围[0, last - 2] 最大冒泡至 last-1
		// ...
		// step n: 范围[0, 0] 最大冒泡至 1，排序终
		for (let currentIdx = 0; currentIdx <= end; currentIdx += 1) {
			const nextIdx = currentIdx + 1;
			if (comparator.lessThan(array[nextIdx], array[currentIdx])) {
				swap(array, nextIdx, currentIdx);

				swapped = true;
			}
		}

		if (!swapped) {
			return array;
		}
	}

	return array;
}
