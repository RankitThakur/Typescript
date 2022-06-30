// enum day{
//   sun,
//   mon,
//   tus,
//   wed,
//   thus,
//   fri,
//   sat
// }

// let result:day;
// result= day.mon
// console.warn(result)


enum day{
  sun="sun",
  mon="mon",
  // tus,
  // wed,
  // thus,
  // fri,
  // sat
}

function whichDay(days:day) {
 return days
}

console.log(whichDay(day.mon))
