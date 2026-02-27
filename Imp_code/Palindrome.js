let num = 121
let str = num.toString();
let reverse = str.split('').reverse().join('');
if(reverse === str){
console.log("palindrome")
}
else{
    console.log("not palindrome");
}

