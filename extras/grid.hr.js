// Array.prototype.min = function(){
//     return Math.min.apply(Math,this);
// };

// var arr = [12,56,126,-1,5,15];

// console.log(arr.min());
// let str1 = 'abc'.split('')
// console.log(str1.min());



function gridChallenge(grid) {
  // Write your code here
    // let m1 = Math.min(...grid[0].split('').charCodeAt())
     let newArr = grid.map((str,i)=>{
            let arr = str.split('').sort().join("")
            return arr
        })

           if(newArr === grid) return 'YES'

        console.log(newArr);

        for (let i = 0; i < newArr.length - 1; i++) {
            
            if(newArr[i].at(i)>newArr[i+1].at(i)){
                console.log("No");
                return "No"
            }
        }

        console.log("Yes");
       return "Yes"
       
}
let grid = ["abc", "ade", "efg"];

gridChallenge(grid);
