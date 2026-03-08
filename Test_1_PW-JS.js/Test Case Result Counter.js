// Test Case Result Counter
// After a test suite runs, you receive an array of test results
//  (strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop 
// that counts how many tests passed, failed, and were skipped. Print a test report with
//  total tests, counts, pass rate percentage, and a verdict (all passed → ready for release,
//  ≤2 failures → review, >2 failures → block release).
//testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let pass = 0
let fail = 0
let skip = 0

for(let i = 0; i<testResults.length; i++){
    if(testResults[i] === "pass")
        pass++
    else if(testResults[i] === "fail")
        fail++
    else
        skip++
}
//Go thruogh this