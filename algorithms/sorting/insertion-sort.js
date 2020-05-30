import Comparator from "../../utils/Comparator.js";
import swap from "../../utils/swap.js";

const comparator = new Comparator();

// 每次循环将值正确插入前面有序序列
export default function insertionSort(originArray) {
	const array = [...originArray];
	for (let i = 1; i <= array.length - 1; i++) {
		let j = i;
		while (j > 0) {
			if (comparator.lessThan(array[j], array[j - 1])) {
				swap(array, j - 1, j);
			}
			j -= 1;
		}
	}
	return array;
}
