const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes=["Superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes) //marvel_heroes array got one of the elemnt as type aarray (dc_heroes) 
//console.log(marvel_heroes); //['thor', 'Ironman', 'Spiderman', ['Superman', 'flash', 'batman' ] ]
// dc_heroes is acting as single element which is an array.


//console.log(marvel_heroes[3]); //[ 'Superman', 'flash', 'batman' ]
//console.log(marvel_heroes[3][1]); //flash//first element of the 3rd element (which is the array)

// const all_heroes=marvel_heroes.concat(dc_heroes); //combines two arrays and return an array, without modifying the same array
// console.log(all_heroes); 
//['thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]
//output is this

// const all_new_heroes=[...marvel_heroes,...dc_heroes] //like this, spreading both of the arrays as the glass breaks in its individual element 
// console.log(all_new_heroes); //[ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'batman' ]

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]] // Array of array of arrays : weird case and rare case...to handle with this *//

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 
/* 
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

/*whenever we extract data from the website, it comes in the form 
of node , string . to make it into the array */
console.log(Array.isArray("Hitesh")) //false (as this is not array)
console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"Hitesh"})) //[]  as we have given it as the key value pair , in this way it cant be changed it into the array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ] created array of the three elements
