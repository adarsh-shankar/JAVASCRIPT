//package of lines and lines of codes



function sayMyNAme()             // Created a function and define it
{
    console.log("H");    //working of functions
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyNAme()        //calling the functions
/*      H
        I
        T
        E
        S
        H
    */    

// function addTwoNumbers(number1, number2)    //took two parameters , jiska dtatype btane ki jarurat nhi hai
// {
//     console.log(number1+number2)
// }
function addTwoNumbers(number1, number2) 
{
    return number1+number2
}

addTwoNumbers(3, 4) //NaN (Not a number) if argument not given in function call , O/P 7 in new line

addTwoNumbers(3,"4") // here 4 taken as string , o/p 34

addTwoNumbers(3,null)//3

const result = addTwoNumbers(3,5) //8


// console.log("result : ",result);  // o/p: result :  undefined
 
function loginusermessage(username)   //here we can give name to username="sam" , so that it never go to the if block , sending arguments from there will overright sam
{
    if(username === undefined)  //if(!username) also right
        {
            console.log("Please enter a username ");
            return
        }
        return `${username} just logged in `
    // 
}

//console.log(loginusermessage("adarsh")) //adarsh just logged in // agr console .log nhi lgaya hota to koooch print nhi hota
//O/P when nothing is passed as argument It says undefined

/*in projects : oftenly we encounter shopping cart where we dont
know initially how many arguments will come 
like so far we knew in case of calculator , two arguments were there 
*/
//in this case , there is more to come in arguments

function calculateCartprice(...num1)   //... is called as rest or spread operator
{
    return num1
}


console.log(calculateCartprice(200,400,500))  //made as array  [ 200, 400, 500 ]

const user1={
    city : "benaras"
}
const user = 
{
    username : "Adarsh",
    price : 199
}

function handleObject(anyObject,anyObject1)
{ 
    console.log(`Username is ${anyObject.username} and 
    price is ${anyObject.price} place is ${anyObject1.city}`);
}
handleObject(user,user1);

const myNewArray = [200,400,100,600]
function returnsecondvalue(getArray)    //passing array as parameter,here getarray is as good as myNewArray 
{
    return getArray[1] 
}

console.log(returnsecondvalue(myNewArray));



