let val = null ?? "Hello";
 val2 = null ?? "default"; //"default" (?? returns right side if left null/undefined)
console.log(val);// 
//as like safe guard..

//ex - 2nd
let amul = null;
let a = amul ?? "nandani milk";
let b = null ?? "default";   // "default" (?? returns right side if left is null/undefined)
 // Modern JS - Typescript.

 a = "which milk? -> " + a;
 console.log(a);
  // very useful in test data handling.