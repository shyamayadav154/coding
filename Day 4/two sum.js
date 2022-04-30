


var twoSum = function(nums, target) {

    let map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let find = target - nums[i]
     
        if(map.has(find)){
            console.log([map.get(find),i]);
        }else{
            map.set(nums[i],i)
        }
    }
    console.log(map);
    
};




let nums = [3,2,4]
, target = 6

twoSum(nums,target)