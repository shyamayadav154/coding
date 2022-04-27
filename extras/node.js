

function order(cityNodes,cityFrom,cityTo,company){

    let obj =new Map()
    let newArr = new Map()

//    for(let i=0;i<cityNodes;i++){

//       if(company === cityFrom[i]){
//          obj.set(company,{...obj})
//       }
//    }
// console.log(obj);

//    return
    let ta =[]
   
    for (let i = 0; i < cityNodes; i++) {
        
        if(cityFrom[i]=== company){
            ta[company]= cityTo.slice(0,i+1)
        }else{
            ta.push(cityTo[i])
        }
    }

  ta[company].sort()
  let f =  [...new Set(ta.flat())]

    console.log(f);

}



order(5,[1,2,2,2,3],[3,5,3,4,5],2)