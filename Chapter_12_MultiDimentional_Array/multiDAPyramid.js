//   *
//  * * *
// * * * * *

let n = 3
for(let i = 1;i<= n;i++){
    let row = "";

for(let j=1;j<=n-1;j++){
    row = row + " "
}
for(let j= 1; j <= 2 * i - 1; j++){
    row = row + "*"
}
console.log(row)

}