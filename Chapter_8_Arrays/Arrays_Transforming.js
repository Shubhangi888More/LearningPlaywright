let score = [56, 90, 70, 59];
console.log(score)
//Transforming = expand or reduce

// map — transforms every element, returns NEW array
let grade = score.map(x => x > 60)
console.log(grade)

// filter — keeps elements that pass a test
let passing = score.filter(x =>x> 60)
console.log(passing)

// reduce — accumulates to a single value
let total = score.reduce((sum, s) => sum + s, 0)
console.log(total)

// flat — flattens nested arrays
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());
