// Union Type and Arrays


// let arr:(string|number|boolean)[] = [2,5,"rankit",54,5,36,265,32,21]
// let arr2 = []

// for (let i in arr){
//   arr2.push(arr[i])
// }

// console.log(arr2.sort((a,b)=> {
//   if(a>b){
//     return 1
//   }
// }))



// Tuple Type and Arrays

let arr:[string,number,boolean][] = [["rankit",54,true],["rankit",54,true],["rankit",54,true],["rankit",54,true]]
let arr2 = []

for (let i in arr){
  arr2.push(arr[i])
}

console.log(arr2.sort((a,b)=> {
  if(a>b){
    return 1
  }
}))
