 intervals.sort((a,b)=>a[0]-b[0])
  console.log(intervals)
  let previous = intervals[0]
  let result = []
  
  for(let i=0;i<intervals.length;i++){
    
    if(previous[1]>=intervals[i][0]){
        previous = [previous[0],Math.max(previous[1],intervals[i][1])]
    }else{
        result.push(previous)
        previous=intervals[i]
    }
    
  }
     //   intervals[i+1] intervals[i]
      result.push(previous)
    console.log(result)
    return result