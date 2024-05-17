//declaring objects 
//1)Singleton made by constructor :: // object.create 
//2)object literal
const mySym = Symbol("key1")
//const  jsuser = {}  //created object
const Jsuser = {     //defining
    name : "Adarsh",     // an object can have value like 1)string
    "Full name" : "Adrash Shankar Tripathi" , //this wont be accesed by .(dot) operator
    age: 18,   //number
    location : "jaipur",   //string
    email :  "adarshtripathi11@google.com",
    isLoogedIn : false, //boolean
    lastloginindays:["Monday", "Saturday"],  //arrays
    [mySym] : "mykey1"  //syntax for including symbol in objects , so that its value get accessed
}//behind the scene all variables are treated as Strings - {name, age, location etc}
//accesing object
// 1) using dot operator :-
console.log(Jsuser.email) //when taken as dot , not necessary to take it as a string ("__")
console.log(Jsuser["email"]) //have put "" coz email is taken as a string in the defintitipn of objects
console.log(Jsuser["Full name"])  //have to acces it as string only
console.log(Jsuser.mySym) //O/P: mykey1 (not treted as symbol check its typeof came as string
console.log(typeof Jsuser.mySym) // O/p : String
//hme to symbol chahiye tha
console.log(Jsuser[mySym]) //mykey1 // now we have accesed the eact value of the symbol


//to change any member of object
Jsuser.email = "adityatripathi11@google.com"
//Object.freeze(Jsuser) //no further modification the value of any member of object 
Jsuser.email = "Abhilashtri@gmail.com"   // this wont be set as the member
console.log(Jsuser);  //in email its adityatripathi11@google .com


//adding a function

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

console.log(Jsuser.greeting); //undefined
console.log(Jsuser.greeting()); //error coz we have freezed the object , going to unfreeze it
//Hello JS user

Jsuser.greetingtwo = function () {
    console.log(`Hello Js user , ${this.name}`);
}
console.log(Jsuser.greetingtwo());  //Hello Js user , Adarsh