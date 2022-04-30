

var fourSum = function(nums, target) {

    let map = new Map()
    let sarr = nums.sort()

    for (let i = 0; i < nums.length; i++) {
       
        
    }

    function sumTwo(arr,t){
            let map = new map()

            for (let i = 0; i < arr.length; i++) {
                
                for (let j = i+1; j < arr.length; j++) {
                    
                    for (let k = j+1; j < arr.length; k++) {

                    let find = target - nums[i] + nums[j] + nums[k]
                    if(map.has(find)){
                        console.log([map.get(find),map.get(i)]);
                    }else{
                        map.set(nums[i],i)
                    }
                    
                }
                  
              }
            }
    }
    
};


let nums = [1,0,-1,0,-2,2], target = 0
fourSum(nums,target)