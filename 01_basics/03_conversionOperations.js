let score="33abc"
console.log(typeof score)
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber); // an Nan (not a number) 

//"33" => 33
//"33abc" => Nan

let isLoggedIn=true;

let booleanIsLoggedIn=Boolean(IsLoggedIn)
let tocheckstring=""
let tocheck=Boolean(tocheckstring);
console.log(tocheck);  //it will show false
//true<=> 1; false<=>0
//empty string =>false in boolean

let someNumber=33
let stringNumber=String(someNumber)  //here 33 get converted to a string
console.log(stringNumber); // it will show 33 as output 
console.log(typeof stringNumber);  // ot will show as string