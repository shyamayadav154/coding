

let  maxLength=(arr,n)=>{


    // let set = new Map(indexOf(arr),arr)
    // console.log(set);
    let maxLen = 0
    let sum = 0
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
       
        sum+= arr[i]
        if(sum === 0){
            maxLen = i + 1
        }else if(map.has(sum)){
            maxLen = Math.max(maxLen,i - map.get(sum))
        }else{
            map.set(sum,i)
        }
        
    }
    console.log(maxLen);
    return maxLen
    // for(num of set){
    //     if(set[num])
    // }

}

let arr = [15,-2,2,-8,1,7,10,23]

maxLength(arr,0)

