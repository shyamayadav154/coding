

function merge(arr1,arr2) {
    let m=arr1.length
    let n=arr2.length
    let sArr=[]
    let i=0,j=0;k=0;

    while(i<=m && j<=n){
        if(arr1[i]<=arr2[j]){
            sArr[k]=arr1[i]
            k++
            i++

        }else if(arr1[i]>arr2[j]){
            sArr[k] = arr2[i]
            k++
            j++
        }else{
            sArr[k] = arr2[j]
            j++
            k++
        }

    }

    console.log(sArr);
    
}

let arr1 = [5,6,2,1,4,7,8,4,5].sort()
let arr2 = [15,6,2,1,14,17,18,14,15].sort((a,b)=>a-b)
console.log(
    arr1,arr2
);


merge(arr1,arr2)