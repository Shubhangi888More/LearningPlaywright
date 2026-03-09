let arr = [1,2,3,5]
console.log(arr)
//Add at the end  
arr.push(3);
console.log(arr)
//remove at the end
arr.pop()
console.log(arr)
//add at the start
arr.unshift(7)
console.log(arr)
//remove at the start
arr.shift()
console.log(arr)
// splice(start, deleteCount, ...itemsToAdd)
arr.splice(1,1,4)
console.log(arr)
arr.splice(3, 2, 7 , 8)
console.log(arr)
arr.splice(1, 0)
console.log(arr)