console.log("welcome to hot code replacement");

function add(a,b){
    return a +b;
}

let result;
for(let i=0; i<=100; i++){
    result = add(i, i +1);
    console.log("result is :", result);
};