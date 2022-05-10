

var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let lss = 0
    let clss = 0
    for (let i = 0; i < s.length; i++) {
        
        if(!map.has(s[i])){
                clss+=1
                map.set(s[i],i)
              
            }else if(s[i] === s[i+1]){
                lss = Math.max(clss,lss)
               clss=1
               map.clear()
            } else{
               
                console.log(clss,lss);
                lss = Math.max(clss,lss)
                map.clear()
                clss = 1
    }

}
    console.log(lss);
    return lss
};

let s = "pwwkew" // 3
let t = "abcabcbb" // 3
let u ='bbbbbb'  // 1

lengthOfLongestSubstring(s)