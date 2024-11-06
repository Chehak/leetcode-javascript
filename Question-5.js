// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//Solution 1
var majorityElement = function(nums) {
     let candidate = null;
   let count = 0;
   for(let num of nums){
       if(count==0){
           candidate=num
       }
       count+= (num==candidate) ? 1 :-1
   }
   return candidate
};

//Solution 2
var majorityElement = function(nums) {
    let obj={}
    for(let i=0;i<nums.length;i++){
        if(obj.hasOwnProperty(nums[i])){
           obj[nums[i]]++
        }else{
            obj[nums[i]]=0
        }
    }
     const keyWithHighestValue = Object.keys(obj).find(
    key => obj[key] === Math.max(...Object.values(obj))
);
return Number(keyWithHighestValue)
};
console.log(majorityElement([3,2,3,4,4,4]))
