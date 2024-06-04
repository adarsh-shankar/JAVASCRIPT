//for in worked in object , array

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const i in myObject) {
    console.log(`${i} shortcut is for ${myObject[i]}`);
}

//here i denoting all the keys of the object
//myObject[i] w=denote the value of all respective keys

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(`keys ${key}  value at keys ${programming[key]}`);
}
/*
keys 1  value at keys rb
keys 2  value at keys py
keys 3  value at keys java
keys 4  value at keys cpp
*/
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
//maps are not iteratable 