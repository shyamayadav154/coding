

var searchMatrix = function(matrix, target) {

    let n = matrix.length
    let m = matrix[0].length
    let lo = 0
    let hi = (n * m) - 1

    // let mr = Math.floor((matrix.length-1)/2)
    // let mc = Math.floor((matrix[0].length-1)/2

    while(lo<=hi){
        let mid = Math.floor((hi+lo) /2)
        let mr = Math.floor(mid/m)
        let mc = Math.floor(mid%m)
        console.log(mid,mr,mc);
       if(matrix[mr][mc] === target){
        console.log('true');
        return
       }

       if(matrix[mr][mc] < target){
        lo=mid+1
    }else{
        hi = mid - 1
    }

    }

    console.log('false');
};

let  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

searchMatrix(matrix,target)



 // method 1
  // let arr = new Set(matrix.flat())
//     console.log(arr.has(target));
//    return arr.has(target)  ;
//    console.log('false');
//     return false


//method 2
        // let row =0;
        // let col = matrix[0].length - 1
    

        // while (col>=0 && row <= matrix.length - 1) {
        //     if(matrix[row][col]===target){
        //         console.log(('true'));
        //         return
        //     }
        //     if(matrix[row][col]> target) col--
        //     else if(matrix[row][col]< target) row++
            
        // }
        // console.log('false');
        // return false