const userEmail = "adarshtripathi11@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN

//truthy values
// "0", 'false'as it is string type , " ", [](array), {}(object), function(){} this is empty function


// to check array true or not 
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

// const foo = null ?? 'default string';
// console.log(foo);
// // Expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// // Expected output: 0


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1); //10

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")