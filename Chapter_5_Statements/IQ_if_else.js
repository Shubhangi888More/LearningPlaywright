//true
if("hello") console.log("string is truthy");
if(20) console.log("number is truthy");
if({}) console.log("empty object is truthy");
if([]) console.log("empty array is truthy");

//false
if("") console.log("Won't print");
if(null) console.log("Won't print");
if(undefined) console.log("eWon't print");
if(NaN) console.log("Won't print");
if(0) console.log("Won't print");
