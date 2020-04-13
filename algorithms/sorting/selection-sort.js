import Comparator from "../../utils/Comparator";

const comparator = new Comparator();

export default function selectionSort(originalArray) {
    // Clone original array to prevent its modification.
    const array = [...originalArray];
    const last = array.length - 1;

    for (let i = 0; i <= last - 1; i += 1) {
        let minIndex = i;

        // Find minimum element in the rest of array.
        for (let j = i + 1; j <= last; j += 1) {
            if (comparator.lessThan(array[j], array[minIndex])) {
                minIndex = j;
            }
        }

        // If new minimum element has been found then swap it with current i-th element.
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }

    return array;
}
