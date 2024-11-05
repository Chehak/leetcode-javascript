/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    for(let i=0;i<nums.length;i++){
        let current = nums[i];
        const occurences = nums.filter(num=>num===current).length;
        if(occurences>2){
            let count=0;
            nums.forEach((ele,index)=>{
                if(ele==current){
                    count++;
                    if(count>2){
                        nums.splice(index,1);
                        i--
                    }
                }
            })
        }
    }

};

//this is my solution but it has no good time and space complexity
