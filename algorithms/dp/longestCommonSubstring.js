export default function longestCommonSubstring(string1, string2) {
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

	let longestSubstringLength = 0;
	let longestSubstringColumn = 0;
	let longestSubstringRow = 0;

	for (let rowIdx = 1; rowIdx <= s2.length; rowIdx++) {
		for (let columnIdx = 1; columnIdx <= s1.length; columnIdx++) {
			if (s1[columnIdx - 1] === s2[rowIdx - 1]) {
				matrix[rowIdx][columnIdx] = matrix[rowIdx - 1][columnIdx - 1] + 1;
			} else {
				matrix[rowIdx][columnIdx] = 0;
			}
			if (matrix[rowIdx][columnIdx] > longestSubstringLength) {
				longestSubstringLength = matrix[rowIdx][columnIdx];
				longestSubstringRow = rowIdx;
				longestSubstringColumn = columnIdx;
			}
		}
	}
	if (longestSubstringLength === 0) {
		return "";
	}
	let longestSubstring = "";
	while (matrix[longestSubstringRow][longestSubstringColumn] > 0) {
		longestSubstring = s1[longestSubstringColumn - 1] + longestSubstring;
		longestSubstringRow -= 1;
		longestSubstringColumn -= 1;
	}

	return longestSubstring;
}
