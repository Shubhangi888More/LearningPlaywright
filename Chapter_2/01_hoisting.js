// console.log(a); //hoisted with undefined  (if u r running only this line of code then - error- a is not defined)
// var a = 12;     //changed
// console.log(a); //assignments stays in place

console.log(b);  //ReferenceError: b is not defined
let b = 13;      
console.log(b);  //ReferenceError: Cannot access 'b' before initialization
