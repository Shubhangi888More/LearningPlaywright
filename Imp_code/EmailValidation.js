function validateEmail(){
    let pattern = /^[^\s@]+[^\s@]+\.[^\s@]+$/;
    return pattern.test(email)
}
let email = "test@gmail.com"
if(validateEmail(email)){
    cosole.log("validated")
}
else{
    console.log("not validated")
}
