

var merge = function(nums1, m, nums2, n) {
   let first = m-1,second=n-1,i=m+n-1
  
   while(second>=0){
        let firstVal = nums1[first], secondVal =nums2[second]
    if(firstVal<secondVal){
        nums1[i] = secondVal
        
        i--
        second--
    }else{
      nums1[i] = firstVal
      i--
        first--
    }

   }

   console.log(nums1);
   return nums1
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

merge(nums1, m, nums2, n)