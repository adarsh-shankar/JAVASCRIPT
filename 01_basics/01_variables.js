// learning declaration

const accountID=144553 
let accountEmail="adarshtripathi11@gmail.com" //Always use this
var accountPassword="12345"
    /* Prefer not to use var because  of 
    issues in block and functional scope
    */
accountCity="jaipur"
let accountState
    //var , let , const memory me space lega
    //const: value wont be changed : we keep those values here which we dont want to get changed 
    //accountID=2              //wrong line error
    //console.log(accountID);  // it will show an error
accountEmail="hc@hc.com"       //it was not const   
accountPassword="21212111"     //it was var
accountCity="kasia"
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);  //accountCity ke (ac) neeche
   
/* 


        ┌─────────┬─────────────┐
        │ (index) │ Values      │
        ├─────────┼─────────────┤
        │ 0       │ 144553      │  //accountID
        │ 1       │ 'hc@hc.com' │  //accountEmail
        │ 2       │ '21212111'  │  //account password
        │ 3       │ 'kasia'     │  //accountCity
        │ 4       │ undefined   │  //accountState is ''Undefined'' , becoz its just declared , and not defined !
        └─────────┴─────────────┘


*/

// let accountEmail=4;       a let keyword cannot be redeclared 
// console.log(accountEmail)  //error

// var x = "John Doe";
//  var x = 0;  // a var variable can be redeclared
// console.log(x); //0 
