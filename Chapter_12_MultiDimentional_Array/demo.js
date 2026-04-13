// let a = [
//     [1, 3, 6],
//     [2, 8, 9]
// ]

// console.log(a)
// a[1][1] = 23;
// console.log(a[1][1])
// console.log(a)
// console.log(a[a.length - 1][a[0].length - 1])

// let matri = [
//     ['p', 'f'],
//     ['E', 'p']
// ]
// console.log(matri)

// for(let i = 0; i< matri.length; i++){
//     for(let j = 0; j<matri[i].length; j++){
//         if(matri[i][j].includes('p')){
//         console.log(matri[i][j] + " ")
//         }
       
//     }
//     console.log(" ")
// }

// let n = 3;
// for(let i = 1; i<=n;i++){
//     let row = " ";
//     for(let j = 1; j<=i; j++){
//         row = row + "*";
//     }
//     console.log(row)
// }

// let n = 4
// for(let i = 1; i<= n; i++){
//     let row = " "
//     for(let j = 1; j<=i; j++){
//     row = row + "*"
//     }
//     console.log(row)

// }

let n = 4;
for(let i =n; i >= 1; i--){
    let row = " "
    for(let j = 1; j <= i; j++){
        row = row + "*"
    }
    console.log(row)
}