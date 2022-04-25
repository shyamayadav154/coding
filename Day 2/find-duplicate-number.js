

var findDuplicate = function(nums) {

    let obj ={}
 
    for(let i of nums){
        if(!obj[i]){
            console.log(i);
            obj[i]=true
        }else{
            console.log("answer",i);
            return (i)
        }
    }

};

let nums = [1,3,4,2,2]

findDuplicate(nums)