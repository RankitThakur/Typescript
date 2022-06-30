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
var day;
(function (day) {
    day["sun"] = "sun";
    day["mon"] = "mon";
    // tus,
    // wed,
    // thus,
    // fri,
    // sat
})(day || (day = {}));
function whichDay(days) {
    return days;
}
console.log(whichDay(day.mon));
