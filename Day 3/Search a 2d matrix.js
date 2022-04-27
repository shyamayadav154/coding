

var searchMatrix = function(matrix, target) {

   
   let arr = new Set(matrix.flat())
    console.log(arr.has(target));
   return arr.has(target)  ;
   console.log('false');
    return false

    
        let left=0,right=arr.length
    
        let mid= Math.floor((left+right)/2)
        console.log(left,right,mid,arr[mid]);

      
        while(left<right){
            console.log('running',arr[mid],left,right);
            if(target === arr[mid]){
                console.log('yes')
                return
            }
        
            if(target<arr[mid]){
                console.log('hell');
                right = mid
              

            }
            
            if(target>arr[mid]){
                console.log('hell2');

                left = mid
              

            }
            mid= Math.floor((left+right)/2)
        }
};

let  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

searchMatrix(matrix,target)