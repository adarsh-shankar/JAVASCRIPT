// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of object) {  //kis object pe loop lgana chaahte hai , not object{} actually
//                              //for example array,string,map
// }

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {     //here i fetched the single character of strings
    console.log(`Each char is ${greet}`)
}

// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
//Any value (both objects and primitive values) may be used as either a key or a value.

/*

    const map1 = new Map();

    map1.set('a', 1);
    map1.set('b', 2);
    map1.set('c', 3);

    console.log(map1.get('a'));
    // Expected output: 1

    map1.set('a', 97);

    console.log(map1.get('a'));
    // Expected output: 97

    console.log(map1.size);
    // Expected output: 3

    map1.delete('b');

    console.log(map1.size);
    // Expected output: 2

*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 console.log(map);

 /*  

   'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France
*/ // it printed only unique india ek baar hi print hua
for (const [key, value] of map) {
     console.log(key, ':-', value);
}
/*
IN :- India
USA :- United States of America
Fr :- France
*/

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
// error: myObject is not iteratable through for of