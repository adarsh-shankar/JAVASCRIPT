//var c=300 //global scope
let a=300

//{} ->scope
if(true)
{
        
    let a = 10  //it is one scope of if where a, b, c are defined
    const b=20  //definition : all the working of a, b will be limited to its scope only
   // var c= 30   // var doesnt follow the rule of scope
    //console.log("Inner :",a) //10
} 


// console.log(a); //eror as , a is only in if scope
// console.log(b); //error as b is only in if scope
//console.log(c);    //30 O/P c being var will overrule the scope


//its not advisable to use var

//console.log(a); //300 fetching global variable

function one()
{
    const username ="Adarsh"

    function two()
    {
        const website = "youtube"
        console.log(username);

    }
    //console.log(website); //Error : this wont be working here as it is of child scope
    two()
}
one()
//So far the output was simply Adarsh

if(true)
    {
        const username = "adarsh"
        if(username === "adarsh")
            {
                const website = " youtube"
                console.log(username + website)
            }
            //console.log(website); //error using another scope variable
    }
  //console.log(username);  //error as using other scope variable 

//  O/P : adarsh Youtube


// *********************** Intresting***********************//

function addone(num)   //  a basic function
{
    return num + 1

}
console.log(addone(5)); //6 , also agar ye function call function definition ke upr rha hota tobhi o/p 6 aata (ye work krta) , and this is amazing
const addTwo = function (num)   // a function which is also called expression , a variable can hold definiton of a function
{
    return num + 2
}

console.log(addTwo(5)); /*7 pr agr expression type function definition hai ( variable me store hoke function ka definition) 
  to definition ke upr agr call krenge to error aayega */








