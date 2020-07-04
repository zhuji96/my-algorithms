function rob(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return 0;
    }
    const dp = [];
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[nums.length];
}

function longestCommonSubsequence(s, t) {
    if (!s || !t) {
        return 0;
    }
    const m = s.length;
    const n = t.length;
    const dp = new Array(m + 1)
        .fill(null)
        .map(() => new Array(n + 1).fill(null));
    for (i = 0; i <= m; i++) {
        for (j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
                continue;
            }
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}

function longestRepeatedSubarray(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    const dp = new Array(m + 1)
        .fill(null)
        .map(() => new Array(n + 1).fill(null));

    let longest = 0;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
                continue;
            }
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = 0;
            }
            longest = Math.max(longest, dp[i][j]);
        }
    }

    return longest;
}

function maximumSubarraySum(nums) {
    const l = nums.length;

    const dp = new Array(l + 1).fill(null);

    dp[0] = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= l; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i - 1], nums[i - 1]);
        maxSum = Math.max(maxSum, dp[i]);
    }

    return maxSum;
}
