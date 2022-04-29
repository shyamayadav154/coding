

function order(cityNodes,cityFrom,cityTo,company){

   let obj = {}

   for(let i=0;i<cityNodes;i++){

    if(!obj[cityFrom[i]]){
        obj[cityFrom[i]] = [cityTo[i]]
        obj[cityTo[i]] = [cityFrom[i]]
    } else{
        obj[cityFrom[i]].push(cityTo[i])
        if(!obj[cityTo[i]]){
            obj[cityTo[i]] = [cityFrom[i]]
        }else{
            obj[cityTo[i]].push(cityFrom[i])
        }
        
    }
   }
   console.log(obj)
//'5,[1,1,1,2,3],[2,5,3,4,5],2'
   function bfs(start){
       console.log('in bfs');
    const q=[start]
    const visited={}
    const result =[]
    let currentVertex;
    visited[start] = true

    while(q.length){
            currentVertex=q.shift()
            result.push(currentVertex)

            obj[currentVertex].sort().forEach(neighbor=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    q.push(neighbor)
                }
            })
           
    }

  
    console.log(result);

   }
   bfs(company)

 }


let t1 = '5,[1,1,1,2,3],[2,3,5,4,5],3'
let t2 = '2,[2,1],[1,2],2'

order(5,[1,1,1,2,3],[2,5,3,4,5],3)