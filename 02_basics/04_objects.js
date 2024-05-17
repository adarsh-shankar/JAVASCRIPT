// lastly we have studied about object literal
//now we are on singleton

//const tinderUser = new Object() // defined through constructor 

const tinderUser = {} // non singelton object same working as //const tinderUser = new Object()

tinderUser.id= "123abc"
tinderUser.name= "adarsh"
tinderUser.isLoggedin = false
// console.log(tinderUser);  //{}
const regularUser = {                        //nesting of objects
    email : " some@gmail.com",
    fullname: {
        userfullname : {
            firstname : "adarsh",
            lastname: " Tripathi"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); //use dot operator to go deeper into nesting
//o/p : adarsh


const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2}  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj4 = Object.assign(obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj5= Object.assign({},obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//best practice to include {} -> being this as target and obj1....obj n are the sorces , which moved into {}
//if not given {}  all object gets targetted into obj 1 



//best way to combine ALL  the objects in asingle object is spread way
const obj7 = {...obj1,...obj2}   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//console.log(obj7)

//database se values arrays ke form me aaayengi
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//destructuring 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
 
// course.courseInstructor  : to use the value , also square bracket

const {courseInstructor: instructor} = course  //hm ek nya naam dekste hai destructuring me courseinstrucor kewal instructor ho gya

// console.log(courseInstructor); //hitsh , hmne pura naam nhi likha dot operator wgrh lga ke
console.log(instructor); // hitesh


//**********************API Intro : JSON *************/

//Jason  : where keys are also string
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//API also comes as array
[
    {},
    {},
    {}
]
