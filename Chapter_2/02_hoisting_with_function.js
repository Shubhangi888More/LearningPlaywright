
//defining
 function statusCheck(){

    // console.log(status_code);  //behind - var status_code = "undefined" ..not show to us
    // var status_code = "active";
    // console.log(status_code);

//op=undefined and active
//var is function scoped so staus is hoisted too..

    console.log(status_code);
    let status_code = "active";
    console.log(status_code);

//op- ReferenceError: Cannot access 'status_code' before initialization
//let is the block scoped so status is not hoisted 
}
//calling
statusCheck();