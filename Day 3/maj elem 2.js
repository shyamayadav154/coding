

var majorityElement = function(nums) {
    let obj ={}
    let arr =[]
    
    for(let num of nums){
        obj[num] = obj[num] + 1 || 1;
    }
    console.log(obj);

  for(const key in obj){
      if(obj[key] > Math.floor(nums.length/3)){
            arr.push(Number(key))
      }
  }
    console.log(arr);
};

majorityElement([3,2,3])