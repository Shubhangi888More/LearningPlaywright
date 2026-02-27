let a = 5; 
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;


console.log(b); //b = 5 + 7 = 12
console.log(a); // a = 12
console.log(c); // c = 7 + 9 + 10 + 11 + 11 = 48
