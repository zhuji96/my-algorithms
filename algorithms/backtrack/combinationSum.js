function combinationSum(nums, target) {
    const res = [];
    if (!Array.isArray(nums)) {
        return res;
    }
    backtrack(nums, target, 0, [], res);

    return res;
}

function backtrack(nums, target, start, path, res) {
    console.log("stack", nums, target, start, path, res);
    if (target < 0) {
        return;
    }
    if (target === 0) {
        res.push([...path]);
        return;
    }

    for (let i = start + 1; i < nums.length; i++) {
        path.push(nums[i]);
        backtrack(nums, target - nums[i], i, path, res);
        path.pop();
    }
}
