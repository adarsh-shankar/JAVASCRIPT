//array in JS: Similar or different type of elements 
// 1)resizable , array of arrays 

const myArr=[0, 1, 2, 3, 4, 5,"adarsh"] //creating style one
const nyArr=[0, 1, 2, 3, 4, 5]  //
console.log(myArr[0]);    //accessing elements , first index 0
//JS array - copy operation creates shallow copy

const heroes=["ironman", "hulk"] //creating style two
const myArr2 = new Array(1,2,3,4) //creating style three 
//console.log(myArr2);  //to print all the elements of the array


//***********************Array Methods************************
// myArr.push(6); //added 6 in the last index
// myArr.pop(6);   //deleted 6 from the last 
// myArr.pop("adarsh");  //deleted string "adarsh" from the last
// myArr.push(7);
// myArr.unshift(9); //9 insert at beginining and shifted all the rest element by 1 index
// //not optimised as it do shift evevry elelemnt
// myArr.shift() // delete one elemet from the 0th index
// console.log(myArr.includes(9)); //it will return true or false
// console.log(myArr.indexOf(3)); //it will return the index of 3
// console.log(myArr); 

// const newArr=myArr.join() //created newArr with same element of myArr
// //and made the elements of string type

// console.log(myArr);      
// console.log(newArr);         
// console.log(typeof newArr);   //string

//******************Slice and Splice ****************//

console.log("A",myArr);   // First "A" then array elements , opposite is also valid
const myn1 = myArr.slice(1,3) //myn1 will include from 1stelement to 3rd(exlusive)
console.log(myn1);  //[1,2]
console.log("B",myArr); //B [ 0, 1, 2, 3, 4, 5, 'adarsh' ] the original array unaltered
const myn2 = myArr.splice(1,3) //this will delete [1,3] part of array and manipulate the original array

console.log("C",myArr);// c[0,4,5]
console.log(myn2);// myn2 store the spliced part [1,2,3]

/*
The slice() and splice() methods are both used with arrays in JavaScript, but they serve different purposes:

slice():

slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
It does not modify the original array.
Syntax: array.slice(begin, end)
Parameters:
begin (Optional): Zero-based index at which to begin extraction. If negative, it indicates an offset from the end of the sequence. (Defaults to 0)
end (Optional): Zero-based index before which to end extraction. The slice method extracts up to but not including end. If negative, it indicates an offset from the end of the sequence. (Defaults to array.length)
Example:
javascript
Copy code
const array = [1, 2, 3, 4, 5];
const newArray = array.slice(1, 3);
// newArray will be [2, 3], array remains [1, 2, 3, 4, 5]
splice():

splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
It modifies the original array.
Syntax: array.splice(start, deleteCount, item1, item2, ...)
Parameters:
start: Index at which to start changing the array. If greater than the length of the array, actual starting index will be set to the length of the array. If negative, it will begin that many elements from the end of the array (with -1 being the last element).
deleteCount (Optional): An integer indicating the number of elements in the array to remove from start. If omitted or undefined, all elements from start to the end of the array will be removed.
item1, item2, ... (Optional): Elements to add to the array, beginning from start. If deleteCount is 0, no elements are removed. If deleteCount is greater than the number of elements after start, additional elements passed as parameters will be inserted.
Returns: An array containing the deleted elements.
Example:
javascript
Copy code
const array = [1, 2, 3, 4, 5];
const removed = array.splice(1, 2);
// removed will be [2, 3], array becomes [1, 4, 5]
*/
   



