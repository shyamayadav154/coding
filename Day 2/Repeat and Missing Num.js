


function repeatedNumber(arr) {

    let obj = new Set()

    let ansArr =[]

    for(let i of arr){
        if(!obj.has(i)){
            // obj[i]=i
            obj.add(i)
        } else{
            ansArr.push(i)
           
        }
    }


    let n = arr.length;

    for(let i=1;i<=n;i++){
        if(!obj.has(i)){
            
           
            ansArr.push(i)
           
        }
    }

console.log(ansArr);
   return ansArr

}
let arr=[9,5,5,3,4,1,2,7,8,10,11,13,14,15,12] 

repeatedNumber(arr)