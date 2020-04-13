import Comparator from "../../utils/Comparator";

const comparator = new Comparator();

export default function bubbleSort(originalArray) {
    let swapped = false;
    // Clone original array to prevent its modification.
    const array = [...originalArray];
    const last = array.length - 1;

    for (let end = last - 1; end >= 0; end -= 1) {
        swapped = false;

        // step 1: 范围[0, last - 1] 最大冒泡至 last
        // step 2: 范围[0, last - 2] 最大冒泡至 last-1
        // ...
        // step n: 范围[0, 0] 最大冒泡至 1，排序终
        for (let current = 0; current <= end; current += 1) {
            // Swap elements if they are in wrong order.
            const next = current + 1;
            if (comparator.lessThan(array[next], array[current])) {
                [array[current], array[next]] = [array[next], array[current]];

                // Register the swap.
                swapped = true;
            }
        }

        // If there were no swaps then array is already sorted and there is
        // no need to proceed.
        if (!swapped) {
            return array;
        }
    }

    return array;
}
