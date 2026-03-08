let count = 42;
let negative = -100;
let zero = 0;

let h = 0xFF;
let color_hex = 0xFF0000;
console.log(color_hex);

let octal = 0o77;
let pi = 3.14159;

let million = 1e6;
let tiny = 1.5e-4;

// Single quotes
let single = 'Hello World';
let withDouble = 'She said "hi"';
console.log(withDouble)

// let name = 'It's a test';  //both are valis single and double quote but when this type of thins happen then dont use single quote

// Double quotes
let double = "Hello World";
let withSingle = "It's a test";

//template literal - using backTick
let first_name = "shubhangi"
let last_name = `hi, ${first_name} more`;
console.log(last_name);

let math = `2+2= ${2+2}`
console.log(math)

let c = "C:\\Users\\meets\\Downloads\\Agile Scrum Manual Testing Notes-6.pdf";
console.log(c);   //always use double backward slash for path of any file

let a = "https://www.google.com";
console.log(a);   //always use double forward slash for address of any link

// String literal edge cases
let empty = "";                          // empty string (falsy!)
let space = " ";                         // single space (truthy!)
let zero1 = "0";                          // string zero (truthy!)

let isLoggedIn = true;
let hasPermission = false;
