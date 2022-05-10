


var longestConsecutive = function(nums) {
    if (nums.length <= 1) return nums.length;
    let set = new Set(nums)
   
    // console.log(set);

    let longestStreak = 0;
    for(let num of set){
     
        let cs = 1;
        if(!set.has(num-1)){
                var currentNum = num;
        
                while (set.has(currentNum+1)) {
                    currentNum++;
                    cs++;
                    console.log(cs);
                }
        }
        longestStreak = Math.max(longestStreak,cs)
    }
    console.log(longestStreak);
    return longestStreak
};



// let nums = [100,4,200,1,3,2,1]
// let nums = [9,1,4,7,3,-1,0,5,8,-1,6]

let nums = [0,-1]

longestConsecutive(nums)


// nums.sort((a,b)=>a-b)
//    console.log(nums);
//    let mc=1
//    let max=0
//  for (let i = 0; i < nums.length; i++) {
//      if(nums[i]+1 === nums[i+1]){
//         mc++
//      }else if(nums[i] === nums[i+1]){
//          continue
//      }else{
//         max=Math.max(max,mc)
//         mc=1
//      }
     
//  }
//  console.log(max)
//  return max