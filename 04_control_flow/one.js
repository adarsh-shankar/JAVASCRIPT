// if 

if(true){             //2==2  //somevariablename = true
  // code will execute
}
// > ,< ,<=, >= ,== ,!=

// The strict equality operator (===) in JavaScript is used to check for the equality of two values, 
//including their types. This means that if the values being compared have different data types

if(false){
    //code wont execute
}
// There is alsways concept of scope in JS , but var overrule this and it has global context

// if(balance > 500 ) console.log("Test") , console.log("test2"); // iss trh se nahi krna hai



/***************copying from Hitesh's code repo*************/
// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {  /// when all are true
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {  //when any of them be true
    console.log("User logged in");
}