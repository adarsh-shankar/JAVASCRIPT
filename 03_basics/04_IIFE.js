//IIFE Immediately Invoked function Expression
// if we want to start the function immediately when the file opened 
// if we want to call the function immediately after its definition , coz we dont want to 
// pollute the variable with global variable

(function chai()  //named IIFE
{
    console.log(`DB connected`);
})();  // semicolon is necessary to stop the context

//()()  

( () => {   //simple iife
    console.log(`DB CONNECTED TWO`);

})();

( (name) => {   //passing parameter
    console.log(`DB CONNECTED TWO ${name}`);

})('ADARSH')    //giving arguments at the time of call 