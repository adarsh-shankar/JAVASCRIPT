//for each works in array , array of objects

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

/*
        js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
        ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
        java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
        python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
        cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/
const myCoding = [     //arrays of objects
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

/* 
    javascript
    java
    python
*/