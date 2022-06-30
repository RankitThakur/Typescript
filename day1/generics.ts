// function myFun<T>(data:T):T {
//   return data
// }


// console.log(myFun("rankit"))

function myFun(data:any[]):any[] {
  return data
}

let array = [24,26,2,5,6,2,4,89,2,5,5,4,5,4,5,1]
console.log(myFun(array))
