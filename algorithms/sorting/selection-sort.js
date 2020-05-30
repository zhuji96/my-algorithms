import Comparator from "../../utils/Comparator.js";
import swap from "../../utils/swap.js";

const comparator = new Comparator();

// 每次选择最小置于最前
export default function selectionSort(originalArray) {
	const array = [...originalArray];
	const last = array.length - 1;

	for (let i = 0; i <= last - 1; i += 1) {
		// step1: 在[1, last]中，找到比 idx0 小的 下标标记为minIndex，继续寻找比minIndex小的，最后minIndex指向最小，与 idx0 交换
		// step2: 在[2, last]中，找到比 idx1 小的 下标标记为minIndex，继续寻找比minIndex小的，最后minIndex指向最小，与 idx1 交换
		// ...
		let minIndex = i;

		for (let j = i + 1; j <= last; j += 1) {
			if (comparator.lessThan(array[j], array[minIndex])) {
				minIndex = j;
			}
		}

		if (minIndex !== i) {
			swap(array, i, minIndex);
		}
	}

	return array;
}
