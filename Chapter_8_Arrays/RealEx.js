let browser = ["chrome", "edge", "firefox"]
console.log(browser)
console.log(browser.length)
//access and modify
console.log(browser.at (-2))
browser[1]= "safari"
console.log(browser)

//adding and removing

browser.push("opera") //end
console.log(browser)
browser.pop()
console.log(browser)

browser.unshift("opera")
console.log(browser)
browser.shift("opera")
console.log(browser)

let removed = browser.shift()
console.log(removed)

let addend = browser.push("opera")
console.log(addend)

for(let i =0; i< browser.length; i++){
console.log(browser[i]);
if (browser[i]=="opera"){
    console.log("\n opera is removed from selenium")
}
}

