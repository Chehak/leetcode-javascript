/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;  // Handle empty array case

    let writeIndex = 1;  // Start from the second position since the first element is always unique

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {  // Compare with the previous element
            nums[writeIndex] = nums[i];  // Write unique elements to the writeIndex
            writeIndex++;  // Move the writeIndex forward
        }
    }

    return writeIndex;  // Return the number of unique elements (k)
};
