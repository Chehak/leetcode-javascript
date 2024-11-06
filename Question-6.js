/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // Handle cases where k > n

    // Split and rearrange the array in one go otherwise it will not work for bigger arrays , it will give error for time limit exceeded
    nums.unshift(...nums.splice(n - k));
  

    return nums;
};
