export default function longestCommonSubsequence(string1, string2) {
	const s1 = [...string1];
	const s2 = [...string2];
	const matrix = Array(s2.length + 1)
		.fill(null)
		.map(() => Array(s1.length + 1).fill(null));

	for (let columnIdx = 0; columnIdx <= s1.length; columnIdx++) {
		matrix[0][columnIdx] = 0;
	}

	for (let rowIdx = 0; rowIdx <= s2.length; rowIdx++) {
		matrix[rowIdx][0] = 0;
	}

	for (let rowIdx = 1; rowIdx <= s2.length; rowIdx++) {
		for (let columnIdx = 1; columnIdx <= s1.length; columnIdx++) {
			if (s1[columnIdx - 1] === s2[rowIdx - 1]) {
				matrix[rowIdx][columnIdx] = matrix[rowIdx - 1][columnIdx - 1] + 1;
			} else {
				matrix[rowIdx][columnIdx] = Math.max(
					matrix[rowIdx - 1][columnIdx],
					matrix[rowIdx][columnIdx - 1]
				);
			}
		}
	}

	if (matrix[s2.length][s1.length] === 0) {
		return [""];
	}
	let longestSequence = [];
	let columnIdx = s1.length;
	let rowIdx = s2.length;
	while (columnIdx > 0 && rowIdx > 0) {
		if (s1[columnIdx - 1] === s2[rowIdx - 1]) {
			longestSequence.unshift(s1[columnIdx - 1]);
			columnIdx -= 1;
			rowIdx -= 1;
		} else if (matrix[rowIdx][columnIdx] === matrix[rowIdx - 1][columnIdx]) {
			rowIdx -= 1;
		} else {
			columnIdx -= 1;
		}
	}

	return longestSequence;
}
