/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/


var merge = function(nums1, m, nums2, n) {
    nums1.length = m
    nums1.push(...nums2)
    nums1.sort((a,b)=> a-b) 
};


//Learnings 
/*Why using concat its not working because , concat does'nt modify the original array in place and
it requires a new array and then assign the values to them 
and using spread it modify the array in place...*/
