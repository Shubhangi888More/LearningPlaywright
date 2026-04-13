let matrix= [
    ["pass", "fail", 10],
    ["error", "pass", 20],
    ["zero", "fail", 30]
];

for(let row of matrix){
    for(let cell of row){
        //console.log(cell + " ");
        process.stdout.write(cell + " ");
    }
    console.log("________________");
}

console.log("--------");

matrix.forEach(row => {
    row.forEach(cell => 
        process.stdout.write(cell + " ")
    )
    console.log("__________")
})