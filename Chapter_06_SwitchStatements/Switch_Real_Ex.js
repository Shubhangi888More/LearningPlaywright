let responseCode = 400;

switch(responseCode){
    case 400 :
        console.log("Bad request");
        break;
    case 200 :
        console.log("success");
        break;
    case 404 :
        console.log("Not Found");
        break;  
    default:
        console.log("invalid");      
}