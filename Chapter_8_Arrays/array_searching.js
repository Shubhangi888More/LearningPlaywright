let result = [ "pass", "fail", "error", "fail"]
console.log(result)
console.log(result.length)
//searching  - returns first index
console.log(result.indexOf("fail"))
//searching  - returns last index
console.log(result.lastIndexOf("fail"))

//includes -returns boolean
console.log(result.includes("error"))
console.log(result.includes("app"))

//find - returns first matching element and index
let num = [59, 48,89, 99]
console.log(num.find(x => x>70))
console.log(num.findIndex(x => x > 70))

//find - returns last matching element and index
console.log(num.findLast(x=> x > 70))
console.log(num.findLastIndex(x => x > 70))