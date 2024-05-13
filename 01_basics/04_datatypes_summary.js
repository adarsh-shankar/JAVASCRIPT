// JS is a Dynamically typed language in which we no need to explicitly define the type of  data type
//of the variable ( it just judges dynamically accrording to the nature of the value getting entered)
/*
var x = 5; // x is a number
x = "hello"; // x is now a string
*/
/*
int x = 5; // x is a number
x = "hello"; // Error: cannot assign a string to a variable of type int
*/


//Divided into 2 types 1)primitive 2)non primitive on the basis of accessing and stroring of elements in memory


// Primitive -> call by value  
//7 types : String, Number, Boolean, null, undefined, symbol , BigInt(when more than number), nothing for decimal
const score =100
const scoreValue = 100.3
const isLoggedIn= false
const outsideTemp=null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId) //false [Even as giving the same value to symbol namely id and another id as '123']

const bigNumber=634568867456463456546464n  //adding n in last made the number as big int


// Non Primitive -> call by refernece 
// Array, Objects, Functions

//EXAMPLES OF ARRAYS , OBJECTS , FUNCTIONS 
const heros =["Shaktiman", "naagraaj" , "doga"];   //array
 let myObj ={          // object
    name: "Adarsh ", 
    age: 22,
}

const myFunction = function(){    //functions
    console.log("Hello world");
}


/* typeof  is function which return the type of value the particular value holdes */

// console.log(typeof myFunction); //function or  function object 
// console.log(typeof id); //symbol
// console.log(typeof bigNumber); //bigint


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//stack is used in primitive (here we get the copy of variables ]) , heap is used in non primitive [here we get the reference]
// drawing a stack where 
