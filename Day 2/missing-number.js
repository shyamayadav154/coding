

var missingNumber = function(nums) {
    let map = new Set(nums);

    let n = nums.length + 1;

    for(let i=0;i<n;i++){
        if(!map.has(i)){
            
            console.log(i);
            return i
        }
    }
   
};
let nums = [0,1]
missingNumber(nums)