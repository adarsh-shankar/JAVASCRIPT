const user = {
    username : " Adarsh",
    price : 999,

    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`)  //need to refer to the current context 
    }


}
user.welcomeMessage()  // Adarsh, welcome to website
// user.username = "Aditya" //changing the username varible , changing the context to aditya 
// user.welcomeMessage()  //Aditya, welcome to website

console.log(this); // O/P : {} , coz there is no global context before this line

// function chai(){
//     let username= " Adarsh"
//     console.log(this).username;  //o/p : undefined
// }

// chai() //O/P : undefined
// we have noticed that working of 'this' keyword can 
//only happen in object but not in function definition
// const chai = function ()
// {
//     let username = "Adarsh"
//     console.log(this.username);

// }
// chai() // undefined as this cant work in function

const chai =  () =>{
     let username = "Adarsh"
   console.log(this); 
}  
chai() // O/p : {} as the this keyword try to acces the global context of any object
                //   jo ki hai nhi to ye {} aise aa rha hai


///***********************Arrow Function********************//

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } //7

// const addTwo = (num1, num2) => num1 + num2 
// const addTwo = (num1, num2) => (num1 + num2) //7 (this way also output the 7 , return can be ommited)
console.log(addTwo(3,4));  //7

//analysis is this  
/*  
    when dealing with arrow function
    if we will use curly braces , one must write return 
    if we are using () parenthesis no need to write return
*/
// also object  can be returned in ({username : "adarsh"}) this way with no return
// return statement , as it is in () parenthesis
