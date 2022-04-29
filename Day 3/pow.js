

var myPow = function(x, n) {
    x=Number(x)
  function p(x,n){
     
        if(n===1){
            return x
        }else{
            return x * p(x,n-1)
        }  
    }
        
    if(n===0) return 0
    if(n>0){
        
        return p(x,n)
    }else{
        return p(1/x,n)
    }
    
};

console.log(myPow(5,-2))